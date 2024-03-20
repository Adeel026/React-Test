const mongoose = require("mongoose");

const Calenderchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Calender = mongoose.model("Calender", Calenderchema);

module.exports = Calender;
