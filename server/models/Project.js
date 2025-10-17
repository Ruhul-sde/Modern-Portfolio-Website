
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  gradient: String,
  tech: [String],
  stats: {
    stars: Number,
    forks: Number,
    views: String
  },
  status: String,
  category: String,
  image: String,
  links: {
    github: String,
    live: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
