const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Milestone = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = {
  Milestone,
};
