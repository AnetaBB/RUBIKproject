const db = require('./db');
const express = require('express');
const users = require('./routes/register');
const auth = require('./routes/auth')
const updateUSer = require('./routes/updateUser');

const main = async () => {
  const app = express();

  // Database setup and connection
  const connection = await db.connect();
  const models = db.load(connection);
  if (process.env.NODE_ENV === 'dev') {
    if (process.env.DB_INIT === 'yes') {
      //TO-DO if ever...

      app.use(express.json());
      app.use('/api/users', users);
      app.use('/api/auth', auth);
      app.use('/api/updateUser', updateUSer);

    }
  }
};

main();