require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT,
  },
  authentication: {
    secret: process.env.JWT_SECRET,
  },
  db: {
    uri: process.env.MONGO_URI,
  }
};
