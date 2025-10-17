
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: String,
  phone: String,
  location: String,
  github: String,
  linkedin: String,
  twitter: String,
  resume: String,
  tagline: String
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
