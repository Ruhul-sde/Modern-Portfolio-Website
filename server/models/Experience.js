
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  type: String,
  title: String,
  company: String,
  period: String,
  description: String,
  achievements: [String]
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
