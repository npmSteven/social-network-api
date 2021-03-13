const mongoose = require('mongoose');

module.exports.MessageModel = mongoose.model('message', {
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
