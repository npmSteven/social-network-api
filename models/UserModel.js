const mongoose = require('mongoose');

module.exports.UserModel = mongoose.model('user', {
  email: String,
  username: String,
  password: String,
  avatar: String,
  createdAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
  updatedAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
});
