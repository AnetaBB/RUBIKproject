const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Demo = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = {
  Demo,
};
