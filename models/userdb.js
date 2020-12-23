const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

let userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: {
    type: String,
    select: false,
  },
  avartar: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  PasswordchangedAt: Date,
});

//Encrypt password before saving into dbs
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//compare user password to password in the dbs
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimesstamp) {
  if (this.PasswordchangedAt) {
    const changedTimestamp = parseInt(this.PasswordchangedAt.getTime() / 1000, 10);

    console.log(changedTimestamp, JWTTimesstamp);

    return JWTTimesstamp < changedTimestamp; // if JWTTImesStamp is less than the time changed then return
  }

  return false;
};

module.exports = mongoose.model("user", userSchema);
