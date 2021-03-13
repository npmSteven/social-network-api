const mongoose = require('mongoose');

module.exports.ChatUserModel = mongoose.model('chatUser', {
  userId: String,
  chatId: String,
  createdAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
  updatedAt: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
});
