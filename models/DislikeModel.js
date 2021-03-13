const mongoose = require('mongoose');

module.exports.DislikeModel = mongoose.model('dislike', {
  userId: String,
  postId: String,
  createdAt: Number,
  updatedAt: Number,
});
