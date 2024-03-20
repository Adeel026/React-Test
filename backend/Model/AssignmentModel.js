const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  assignmentName: {
    type: String,
    required: true
  },
  submissionPercent: {
    type: Number,
    required: true
  },
  submissionCount: {
    type: Number,
    required: true
  },
  percentMarks: {
    type: Number,
    required: true
  },
  averageMarks: {
    type: Number,
    required: true
  }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
