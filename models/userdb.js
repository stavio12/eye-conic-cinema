const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true, "Please Provide a an Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide an Email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  orders: [
    {
      id: String,
      movie: String,
      runtime: String,
      view: String,
      payment: String,
    },
  ],
  watchList: [
    {
      id: String,
      movie: String,
      runtime: String,
      view: String,
    },
  ],
  avartar: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  PasswordchangedAt: Date,
});

//Encrypt password before saving into dbs
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.PasswordchangedAt = Date.now() - 1000;
  next();
});

//Save updated password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//compare user password to password in the dbs
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//If password is changed after a certain time range dont ggive access to user
userSchema.methods.changedPasswordAfter = function (JWTTimesstamp) {
  if (this.PasswordchangedAt) {
    const changedTimestamp = parseInt(this.PasswordchangedAt.getTime() / 1000, 10);

    console.log(changedTimestamp, JWTTimesstamp);

    return JWTTimesstamp < changedTimestamp; // if JWTTImesStamp is less than the time changed then return
  }

  return false;
};

//reset token for users
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  this.resetPasswordExpires = Date.now() + 10 * 60 * 1000;

  console.log({ resetToken }, this.resetPasswordToken);
  return resetToken;
};

module.exports = mongoose.model("user", userSchema);
