const mongoose = require('mongoose');

module.exports.PostModel = mongoose.model('post', {
  userId: String,
  body: String,
  createdAt: Number,
  updatedAt: Number,
});
