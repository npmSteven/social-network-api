const mongoose = require('mongoose');

module.exports.ChatModel = mongoose.model('chat', {
  userId: String,
  image: String,
  createdAt: Number,
  updatedAt: Number,
});
