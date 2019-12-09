const db = require('./db');
const express = require('express');
const users = require('./routes/register');
const auth = require('./routes/auth');
const updateUSer = require('./routes/updateUser');
const routerHome = require('./routes/home');
const test = require('./routes/test');

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

  // Routes
  app.use('/', routerHome);
  app.use(express.json());
  app.use('/rubikproject/users', users);
  app.use('/rubikproject/auth', auth);
  app.use('/rubikproject/updateUser', updateUSer);
  app.use('/rubikproject/test', test);

  // App start
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 8080;
  app.listen(port, host, () =>
    console.log(
      `[App] Server is listening on http://${host}:${port}\n` +
        '========================================================'
    )
  );
};

main();
