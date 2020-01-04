const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Todo = new Schema({
  content: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
    unique: false,
  },
  done: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = {
  Todo,
};
