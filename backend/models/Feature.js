const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Feature = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  owner: {
    type: String,
    required: true,
  },
  project: { 
    type: ObjectId, 
    ref: 'Project', 
    required: true,
  },
  status: {
    type: String,
    enum: ['Open', 'Misguided', 'Acceptable'],
    required: true,
  },
});

module.exports = {
  Feature,
};
