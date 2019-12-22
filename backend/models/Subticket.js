const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const Subticket = new Schema({
  // ticket: {
  //   type: ObjectId,
  //   ref: 'Ticket',
  //   required: true,
  // },
  title: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 70,
    required: true,
  },
  description: {
    type: String,
    minlength: 25,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    default: 'Open',
    enum: ['Open', 'Assigned', 'Completed', 'Closed'],
    required: true,
  },
  contributor: {
    type: String,
    // docelowo wykonawca nadrzednego ticketa
    default: 'Mateusz',
    required: true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Urgent'],
    required: true,
  },
  relevance: {
    type: String,
    enum: ['Trivial', 'Minor', 'Major', 'Critical'],
    required: true,
  },
});

module.exports = {
  Subticket,
};
