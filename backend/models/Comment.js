const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema({
  commentInsert: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  Comment,
};
