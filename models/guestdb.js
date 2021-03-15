const mongoose = require("mongoose");
const validator = require("validator");

let GuestuserSchema = new mongoose.Schema({
  GuestOrder: [
    {
      movieId: String,
      movie: String,
      runtime: String,
      pcs: Number,
      view: String,
      payment: String,
      mall: String,
      amount: String,
      phone: Number,
    },
  ],
});

module.exports = mongoose.model("guestuser", GuestuserSchema);
