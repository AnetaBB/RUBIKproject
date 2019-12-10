const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema({
  commentInsert: {
    type: String,
    required: true,
    unique: true,
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
});

module.exports = {
  Comment,
};
