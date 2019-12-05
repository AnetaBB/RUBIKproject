const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const User = new Schema({
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
  User,
};
