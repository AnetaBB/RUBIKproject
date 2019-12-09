const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Milestone = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },

  owner: {
    type: String,
  },

  contributors: {
    type: String,
  },
});

module.exports = {
  Milestone,
};
