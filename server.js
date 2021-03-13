const express = require('express');
const { server } = require('./config');
const { connectDb } = require('./mongodb');

const app = express();

app.use(express.json());

app.use('/api/v1/authentication', require('./routes/api/authentication'));

(async () => {
  try {
    await connectDb();

    app.listen(server.port, () => console.log(`Server listening on ${server.port}`));
  } catch (error) {
    console.error('ERROR - server.js - init', error);
    process.exit(1);
  }
})();

