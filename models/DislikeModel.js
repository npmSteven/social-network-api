const mongoose = require('mongoose');

module.exports.DislikeModel = mongoose.model('dislike', {
  userId: String,
  postId: String,
  createdAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
  updatedAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
});
