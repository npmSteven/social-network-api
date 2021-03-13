const mongoose = require('mongoose');

module.exports.CommentModel = mongoose.model('comment', {
  userId: String,
  body: String,
  createdAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
  updatedAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
});
