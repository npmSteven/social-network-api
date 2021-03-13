const mongoose = require('mongoose');

module.exports.UserModel = mongoose.model('user', {
  email: String,
  username: String,
  password: String,
  avatar: String,
  createdAt: Number,
  updatedAt: Number,
});
