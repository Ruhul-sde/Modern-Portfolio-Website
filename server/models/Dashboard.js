
const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  totalProjects: Number,
  commits: Number,
  technologies: String,
  experience: String,
  skillsData: [{
    skill: String,
    proficiency: Number
  }],
  radarData: [{
    subject: String,
    value: Number
  }],
  contributionData: [{
    month: String,
    commits: Number
  }]
}, { timestamps: true });

module.exports = mongoose.model('Dashboard', dashboardSchema);
