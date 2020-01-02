const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Ticket = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  owner: {
    type: String,
    required: true,
  },
  createdAt: Date,
  contributors: String,
  status: {
    type: String,
    required: true,
    enum: ['Open', 'Assigned', 'Completed', 'Closed'],
  },
  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Urgent'],
  },
  relevance: {
    type: String,
    required: true,
    enum: ['Trivial', 'Minor', 'Major', 'Critical'],
  },
  projectID: {
    type: String,
    required: true,
  },
});

module.exports = {
  Ticket,
};
