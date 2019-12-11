const db = require('./db');
const express = require('express');
const users = require('./routes/user');
const routerMilestone = require('./routes/milestone');
const routerComment = require('./routes/comment');
const routerDemo = require('./routes/demo');
const routerHome = require('./routes/home');
const routerTicket = require('./routes/ticket');
const routerProject = require('./routes/project');
const config = require('config');
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

  db.register(app, connection, models); //ads db connection and models to res.locals

  /* Sprawdzenie czy jest zdefiniowana zmienna środowiskowa jwtKey */
  if (!process.env.rubikproject_jwtKey) {
    console.log('FATAL ERROR: jwtKey is not defined.');
    process.exit(1);
  }
  /* jeżeli po odpaleniu widzisz error: jwtKey is not defined.
     musisz zdefiniować zmienną środowiskową
     w pliku .env wklej na końcu
     rubikproject_jwtKey=secretKey
      */

  // Global middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Routes
  app.use('/', routerHome);
  app.use('/api/users/', users);
  app.use('/api/milestones/', routerMilestone);
  app.use('/api/demos/', routerDemo);
  //app.use('/api/subtickets/', routerSubticket);
  app.use('/api/comments/', routerComment);
  app.use('/api/tickets', routerTicket);
  app.use('/api/project', routerProject);

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
