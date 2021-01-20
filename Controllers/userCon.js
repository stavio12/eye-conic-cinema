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
  //find user id
  const movieQuery = { _id: req.params.id };
  const movieDetails = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { $pull: { _id: req.params.id } });
  // console.log(user.watchList);
  // user.watchList.deleteOne({ _id: req.params.id }).then((del) => {
  //   res.status(200).json({
  //     status: "success",
  //     data: {
  //       user: del,
  //     },
  //   });
  // });
  // findUser.order.insertOne(movieDetails);

  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     user: user,
  //   },
  // });

  // {"_id":{"$oid":"6008813895e40e0178fdd902"},"username":"kobla","email":"sikadell8@gmail.com","password":"$2a$12$ZuIzbnx/cAetDlRmLK26oO.0pU.jORfYgjk65G7rJM.DxY9QxgDd.","orders":[],"watchList":[{"_id":{"$oid":"6008814f95e40e0178fdd903"},"movie":"BadBoys4Life","runtime":"2 hours","view":"watch-list"},{"_id":{"$oid":"6008815095e40e0178fdd904"},"movie":"BadBoys4Life","runtime":"2 hours","view":"watch-list"}],"__v":0}
};
