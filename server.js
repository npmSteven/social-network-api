const express = require('express');
const { server } = require('./config');
const { connectDb } = require('./mongodb');

const app = express();

(async () => {
  try {
    await connectDb();
    app.listen(server.port, () => console.log(`Server listening on ${server.port}`));
  } catch (error) {
    console.error('ERROR - server.js - init', error);
    process.exit(1);
  }
})();

