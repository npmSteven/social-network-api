const mongoose = require('mongoose');

module.exports.LikeModel = mongoose.model('like', {
  userId: String,
  postId: String,
  createdAt: Number,
  updatedAt: Number,
});
