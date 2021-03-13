const mongoose = require('mongoose');

module.exports.ChatUserModel = mongoose.model('chatUser', {
  userId: String,
  chatId: String,
  createdAt: Number,
  updatedAt: Number,
});
