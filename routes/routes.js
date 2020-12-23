const express = require("express");
const router = express.Router();
const { promisify } = require("util");
const async = require("async");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../models/userdb");

//control token ids
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

//Protect routes and authenticate users
const authenUser = async (req, res, next) => {
  // Getting token and check if it exists
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
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
};

//Post routes
router.post("/signup", async (req, res) => {
  //Get Details from frontend
  const newUser = await User.create(req.body);

  const token = signToken(newUser._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });

  //After registering email user
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  //Mail info to user
  let mailOptions = {
    to: req.body.email,
    from: "EyeConic Cinema koblastavio@gmail.com",
    subject: "Welcome to EyeConic Cinema!",
    text: "Hi " + req.body.username + ", Have a look at our Now Playing Movies",
  };

  // Send email finally to user
  smtpTransport.sendMail(mailOptions, (err) => {
    console.log(err);
    res.send(err.message);
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // verify if password and email exist
  if (!email || !password) {
    return res.send({ status: 400, data: "Please Provide Email and Password" });
  }
  // Check if user exist and password is correct
  const user = await User.findOne({ email }).select("+password");

  //compare user password to password in the dbs

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.send({ status: 401, data: "Incorrect email or password" });
  }

  // If everything is okay send token to client
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    user,
  });
});

// router.get("/logout", authenUser, (req, res) => {
//   console.log("Hello");
//   res.logOut();

//   res.send({ status: 200 });
// });

router.get("/trumutu", authenUser, (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

module.exports = router;
