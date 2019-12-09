const {
  Schema
} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Comments = new Schema({
  comment: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  Comments,
};