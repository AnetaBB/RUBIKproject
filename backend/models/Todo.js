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
});

module.exports = {
  Todo,
};
