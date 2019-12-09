const {
  Schema
} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Subticket = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = {
  Subticket
};