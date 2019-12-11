const register = (app, db, models) => {
  app.use((req, res, next) => {
    res.locals.models = models;
    res.locals.db = db;
    next();
  });
  console.log('[MongoDB] Connection and models registered in App');
  return app;
};

module.exports = register;
