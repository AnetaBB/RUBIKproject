const db = require('./db');
const express = require('express');

const main = async () => {
  const app = express();

  // Database setup and connection
  const connection = await db.connect();
  const models = db.load(connection);
  if (process.env.NODE_ENV === 'dev') {
    if (process.env.DB_INIT === 'yes') {
      //TO-DO if ever...
    }
  }
};

main();