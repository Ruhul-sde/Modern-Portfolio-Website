
const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  availability: String,
  stats: {
    experience: String,
    projects: String,
    techStack: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Hero', heroSchema);
