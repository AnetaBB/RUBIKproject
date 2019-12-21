const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Todo = new Schema({
  content: {
    type: String,
    required: true,
    unique: true,
  },
  done: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = {
  Todo,
};
