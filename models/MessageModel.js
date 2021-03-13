const mongoose = require('mongoose');

module.exports.MessageModel = mongoose.model('message', {
  userId: String,
  body: String,
  createdAt: Number,
  updatedAt: Number,
});
