const mongoose = require('mongoose');

module.exports.CommentModel = mongoose.model('comment', {
  userId: String,
  body: String,
  createdAt: Number,
  updatedAt: Number,
});
