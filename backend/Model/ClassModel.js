const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  totallectures: {
    type: String,
    required: true
  },
  lectureTaken: {
    type: String,
    required: true
  }
});

const classSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  classes: {
    type: String,
    required: true
  },
  students: {
    type: Number,
    required: true
  },
  courses: {
    type: courseSchema,
    required: true
  }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
