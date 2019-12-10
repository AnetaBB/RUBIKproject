const db = require('./db');
const express = require('express');
const routerComment = require('./routes/comment');
const routerDemo = require('./routes/demo');
const routerHome = require('./routes/home');
const routerMilestone = require('./routes/milestone');
const routerTicket = require('./routes/ticket');

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

  // Global middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Routes
  app.use('/', routerHome);
<<<<<<< Updated upstream
=======
  app.use('/api/demos/', routerDemo);
  app.use('/api/projects/', routerProject);
>>>>>>> Stashed changes
  app.use('/api/comments/', routerComment);
  app.use('/api/milestones/', routerMilestone);

  app.use('/api/tickets', routerTicket);

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
