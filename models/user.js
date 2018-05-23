const express = require("express");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: { type: String, required: true }
});

userSchema.pre("save", async function(req, res, next) {
  try {
  	if(!this.isModified("password")) {
  	  return next(err);
  	}
  	let hashedPassword = bcrypt.hash(this.password, 10);
  	this.password = hashedPassword;
  } catch(err) {
  	return next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
  	let isMatch = await bcrypt.compare(candidatePassword, this.password);
  	return isMatch;
  } catch(err) {
  	return next(err);
  }
}

const User = mongoose.model("User", userSchema);

module.exports = User;