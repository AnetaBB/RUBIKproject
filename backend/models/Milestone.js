const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Milestone = new Schema({
  projectID: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },

  owner: {
    type: String,
  },

});

module.exports = {
  Milestone,
};
