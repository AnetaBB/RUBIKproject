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
  cratedAt: {
    type: Date,
  },
  deadline: {
    type: Date,
  },
  owner: {
    type: String,
    required: true,
  },
  contributors: {
    type: String,
  },
});

module.exports = {
  Milestone,
};
