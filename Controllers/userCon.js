const { filter } = require("async");
const User = require("../models/userdb");

const filterObj = (obj, ...allowedFields) => {
  //Loop through the objects
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getUser = async (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.updateMe = async (req, res, next) => {
  // Create error if user tries to change password
  if (req.body.password) {
    return res.send({ status: 400, data: "Passwords can not be change here. Please use /updateMyPassword" });
  }

  //Filter out names that are not allowed to be updated
  const filterBody = filterObj(req.body, "username", "email");

  // Update user document

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, { new: true });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });

  console.log("Data updated sucessfully");
};
