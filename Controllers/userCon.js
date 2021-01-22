// import { v4 as uuidv4 } from "uuid";

// let myuuid = uuidv4();

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

exports.activeOrders = async (req, res, next) => {
  //find user id
  const movieDetails = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { $push: movieDetails });
  // findUser.order.insertOne(movieDetails);

  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
};

exports.watchList = async (req, res, next) => {
  //find user id
  const movieDetails = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { $push: movieDetails });
  // findUser.order.insertOne(movieDetails);

  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
};

exports.DeleteMovie = async (req, res, next) => {
  //find movie id
  const movieQuery = { _id: req.params.id };

  //search for logged in user
  const user = await User.findById(req.user.id).then(async (movie) => {
    //remove movie from database
    movie.watchList.id(movieQuery).remove();
    await movie.save({ validateBeforeSave: false });
    res.status(200).json({
      status: "success",
      data: {
        user: movie,
      },
    });
  });
};
