const db = require('./db');
const express = require('express');
const routerProject = require('./routes/project');
const routerHome = require('./routes/home');

const main = async () => {
  const app = express();
  app.use(express.json());

  // Database setup and connection
  const connection = await db.connect();
  const models = db.load(connection);
  if (process.env.NODE_ENV === 'dev') {
    if (process.env.DB_INIT === 'yes') {
      //TO-DO if ever...
    }
  }

  db.register(app, connection, models);

  // Routes
  app.use('/', routerHome);
  app.use('/api/projects/', routerProject);

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
