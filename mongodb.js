const mongoose = require('mongoose');
const config = require('./config');

module.exports.connectDb = async () => {
  try {
    await mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to mongodb successfully');
  } catch (error) {
    console.error('ERROR - mongodb.js - connectDb():', error);
    throw error;
  }
};

