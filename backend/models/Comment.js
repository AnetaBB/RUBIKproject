const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Private', 'Public'],
    required: true,
  },
  projectID: {
    id: { type: ObjectId, ref: 'projects' },
  },
});

module.exports = {
  Comment,
};
