const User = require("../models/userdb");

exports.getUser = async (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
