const db = require('./db');
const express = require('express');
const cors = require('cors');
const routerUsers = require('./routes/user');
const routerLogin = require('./routes/login');
const routerMilestone = require('./routes/milestone');
const routerComment = require('./routes/comment');
const routerDemo = require('./routes/demo');
const routerHome = require('./routes/home');
const routerTicket = require('./routes/ticket');
const routerProject = require('./routes/project');
const routerSubticket = require('./routes/subticket');
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
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Routes
  app.use('/', routerHome);
  app.use('/api/users/', routerUsers);
  app.use('/api/login/', routerLogin);
  app.use('/api/milestones/', routerMilestone);
  app.use('/api/demos/', routerDemo);
  app.use('/api/subtickets/', routerSubticket);
  app.use('/api/comments/', routerComment);
  app.use('/api/tickets', routerTicket);
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
