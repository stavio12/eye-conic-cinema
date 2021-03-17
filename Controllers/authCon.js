const { promisify } = require("util");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/userdb");
const catchAsync = require("../utils/catchAsync");
const AppError = require("./../utils/appError");
const sendEmail = require("../utils/email");

//control token ids
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  //Remove password from res
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

//Protect routes and authenticate users
exports.bodyGuard = catchAsync(async (req, res, next) => {
  // Getting token and check if it exists
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return res.send({ status: 401, data: "Log In to access this page!" });
  }

  // verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(res.send({ status: 401, data: "User does not exist" }));
  }

  // check if user changed password after the token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(res.send({ status: 401, data: "Password Recently changed!, Please log in again" }));
  }

  //Grant user access to route and send user data
  req.user = freshUser;

  next();
});

exports.signup = catchAsync(async (req, res, next) => {
  //Get Details from frontend and check if user is already registered or not
  const oldUser = await User.findOne({ email: req.body.email });

  if (oldUser) {
    return next(new AppError("You already have an account with us", 400));
  }

  const newUser = await User.create(req.body);

  const token = signToken(newUser._id);

  //send email to user after siginin up

  const message = `<p> Hi  <b> ${newUser.username} </b>, Welcome to Eyeconic Cinema! <br> <b>Enjoy your world of ${newUser.membershipType} access!</b> </p> `;

  try {
    await sendEmail({
      email: newUser.email,
      subject: `Welcome! ${newUser.username}`,
      message: message,
    });

    createSendToken(newUser, 201, res);
  } catch (error) {
    console.log(error);

    return next(new AppError("There was an error sending your email", 500));
  }
});

exports.login = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  // verify if password and email was is available
  if (!email || !password) {
    return next(new AppError("Please Provide Email and Password", 400));
  }

  // Check if user exist and password is correct
  const user = await User.findOne({ email }).select("+password");

  //compare user password to password in the dbs
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  //if everyting is okay send token and data client
  const token = signToken(user._id);
  createSendToken(user, 200, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  console.log(req.body.email);

  if (!req.body.email) {
    return next(new AppError("Please Provide an email!", 404));
  }
  // Get User based on email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with this email address", 404));
  }

  //Generate random token
  const resetToken = user.createPasswordResetToken();

  //Validate before saving else our validators will not allow token to be saved into the dbs
  await user.save({ validateBeforeSave: false });

  //send token to user's email
  const resetUrl = `${req.protocol}://${req.get("host")}/resetpassword/${resetToken}`;
  const message = `<p> Hi  <b> ${user.username} </b>, You requested for a password reset. Click on the link below <br> <br> <a href="${resetUrl}"> <b> Click here to Reset your password </b> </a> </p>`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Reset Password Token (valid for 10 min)",
      message: message,
    });
    createSendToken("Token sent via email", 200, res);
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new AppError("There was an error sending your email", 500));
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // Get user based on the token
  const hashedToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

  const user = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpires: { $gt: Date.now() } });

  //check if token has expired
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  //update password
  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  //Update password
  await user.save();

  //log user in
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //Get user from dbs
  const user = await User.findById(req.user.id).select("+password");

  //Check if inserted password is correct
  if (!(await user.correctPassword(req.body.oldPassword, user.password))) {
    return res.send({ status: 401, data: "Your current password is incorrect" });
  }

  //Update password if correct
  user.password = req.body.password;
  await user.save();

  //Log user in finally
  createSendToken(user, 200, res);

  console.log("Password Updated Successfully!");
});

exports.logout = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.send({ status: 200, data: "success" });
});
