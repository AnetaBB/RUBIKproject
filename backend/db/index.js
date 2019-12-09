const connect = require('./connect');
const models = require('../models');
const register = require('./register');

const load = db => {
  const compiledModels = {};

  for (let modelName in models) {
    compiledModels[modelName] = db.model(modelName, models[modelName]);
  }

  console.log('[MongoDB] Models compiled');
  return compiledModels;
};

module.exports = {
  connect,
  load,
  register,
};
