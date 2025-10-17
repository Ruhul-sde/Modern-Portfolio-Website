
const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: [String],
  availability: {
    freelance: Boolean,
    opportunities: Boolean
  },
  currentFocus: [{
    title: String,
    description: String,
    color: String
  }],
  stats: {
    experience: String,
    projects: String,
    techStack: String
  }
}, { timestamps: true });

module.exports = mongoose.model('About', aboutSchema);
