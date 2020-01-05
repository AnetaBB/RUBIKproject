const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Project = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  editedAt: {
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
  active: {
    type: Boolean,
    required: true,
  },
});

module.exports = {
  Project,
};
