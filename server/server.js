
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const About = require('./models/About');
const Hero = require('./models/Hero');
const Dashboard = require('./models/Dashboard');
const Contact = require('./models/contact.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// API Routes
app.get('/api/hero', async (req, res) => {
  try {
    const hero = await Hero.findOne();
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/about', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/dashboard', async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne();
    res.json(dashboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/education', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    res.json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
