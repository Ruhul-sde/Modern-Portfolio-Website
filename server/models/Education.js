
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  period: String,
  gpa: String,
  description: String,
  achievements: [String],
  courses: [String]
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);
