
require('dotenv').config();
const mongoose = require('mongoose');

const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const About = require('./models/About');
const Hero = require('./models/Hero');
const Dashboard = require('./models/Dashboard');
const Contact = require('./models/contact.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const heroData = {
  name: "Ruhul Amin",
  role: "Software Developer",
  description: "Passionate about full-stack development using Java, Python, and JavaScript. Skilled in creating scalable solutions with React.js and Node.js.",
  availability: "Available for opportunities",
  stats: {
    experience: "8+ Months",
    projects: "3+",
    techStack: "15+"
  }
};

const aboutData = {
  name: "Ruhul Amin",
  title: "Software Developer",
  bio: [
    "I'm a passionate Software Developer with expertise in full-stack development using Java, Python, and JavaScript. Skilled in creating scalable solutions with React.js and Node.js, and experienced in delivering high-quality projects like AI-powered apps and collaborative code editor.",
    "I specialize in full-stack development with the MERN stack. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. Currently working as a Trainee Engineer at Akshay Software Technologies, where I collaborate with cross-functional teams to develop scalable web applications.",
    "My approach to development is user-centered and detail-oriented. I'm eager to leverage my technical skills and problem-solving abilities in a dynamic, agile environment. Every project is an opportunity to learn something new and push my skills further."
  ],
  availability: {
    freelance: true,
    opportunities: true
  },
  currentFocus: [
    { title: "Full Stack Development", description: "React, Node.js, TypeScript", color: "#3B82F6" },
    { title: "UI/UX Design", description: "TailwindCSS, Figma", color: "#06B6D4" },
    { title: "Cloud & DevOps", description: "AWS, Docker, CI/CD", color: "#C084FC" }
  ],
  stats: {
    experience: "1+ Yrs",
    projects: "15+",
    techStack: "12+"
  }
};

const dashboardData = {
  totalProjects: 15,
  commits: 351,
  technologies: "12+",
  experience: "1+ Yrs",
  skillsData: [
    { skill: 'React', proficiency: 90 },
    { skill: 'TypeScript', proficiency: 85 },
    { skill: 'Node.js', proficiency: 80 },
    { skill: 'Python', proficiency: 75 },
    { skill: 'SQL', proficiency: 70 },
    { skill: 'AWS', proficiency: 65 }
  ],
  radarData: [
    { subject: 'Frontend', value: 90 },
    { subject: 'Backend', value: 75 },
    { subject: 'DevOps', value: 65 },
    { subject: 'Database', value: 70 },
    { subject: 'Design', value: 80 },
    { subject: 'Testing', value: 75 }
  ],
  contributionData: [
    { month: 'Jan', commits: 45 },
    { month: 'Feb', commits: 52 },
    { month: 'Mar', commits: 61 },
    { month: 'Apr', commits: 58 },
    { month: 'May', commits: 70 },
    { month: 'Jun', commits: 65 }
  ]
};

const contactData = {
  email: "ruhulamin@example.com",
  phone: "+91 1234567890",
  location: "West Bengal, India",
  github: "https://github.com/ruhulamin",
  linkedin: "https://linkedin.com/in/ruhulamin",
  twitter: "https://twitter.com/ruhulamin",
  resume: "/src/assets/resume.pdf",
  tagline: "Building scalable solutions with Java, Python, and JavaScript"
};

const projects = [
  {
    id: 1,
    title: 'Collaborative Code Editor',
    description: 'Real-time collaborative code editor supporting up to 20 concurrent users, enabling simultaneous code editing, debugging, and version control with conflict resolution. Improved team productivity by 35%.',
    tech: ['React', 'Node.js', 'Socket.IO', 'CodeMirror', 'Express.js', 'Uuid'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    stats: { stars: 234, forks: 45, views: '12.5k' },
    status: 'Live',
    category: 'Full Stack',
    links: {
      github: 'https://github.com/ruhulamin/code-editor',
      live: 'https://code-editor-demo.com'
    }
  },
  {
    id: 2,
    title: 'Blood Bank Management System',
    description: 'Efficiently manages blood donor and recipient information, tracks blood inventory, and facilitates seamless communication between blood banks and hospitals. Enhances the overall blood donation process.',
    tech: ['Java', 'JFrame', 'NetBeans', 'MySQL'],
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=600&fit=crop',
    stats: { stars: 156, forks: 28, views: '8.3k' },
    status: 'Live',
    category: 'Healthcare',
    links: {
      github: 'https://github.com/ruhulamin/blood-bank',
      live: 'https://blood-bank-demo.com'
    }
  },
  {
    id: 3,
    title: 'Personal Finance Management System',
    description: 'Tracks over 10,000 transactions per user, categorizes expenses, and provides automated financial insights. Enhanced financial planning leading to 20% increase in savings.',
    tech: ['Java', 'MySQL', 'Spring Boot', 'Apache POI', 'REST API'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    stats: { stars: 189, forks: 34, views: '9.7k' },
    status: 'Live',
    category: 'Finance',
    links: {
      github: 'https://github.com/ruhulamin/finance-manager',
      live: 'https://finance-manager-demo.com'
    }
  }
];

const experiences = [
  {
    type: 'work',
    title: 'Trainee Engineer',
    company: 'Akshay Software Technologies',
    period: 'Ongoing',
    description: 'Collaborating with cross-functional teams to develop and implement scalable web applications using the MERN stack.',
    achievements: [
      'Developed scalable web applications using MERN stack',
      'Designed responsive user interfaces for enhanced UX',
      'Integrated RESTful APIs to enhance functionality',
      'Managed debugging and optimized application performance',
      'Partnered with senior developers on project milestones'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Cooch Behar Government Engineering College',
    period: '2020 - 2024',
    gpa: '8.56/10',
    description: 'Graduated with expertise in software engineering, web development, and data structures.',
    achievements: [
      'Cumulative CGPA: 8.56',
      'Completed Madhyamik from Mitna High School with 76.7%',
      'Strong academic performance throughout the program',
      'Developed multiple real-world projects'
    ],
    courses: ['Data Analysis', 'Software Engineering', 'Operating Systems', 'Algorithms', 'Artificial Intelligence', 'Database Systems']
  }
];

async function seedDatabase() {
  try {
    await Hero.deleteMany({});
    await About.deleteMany({});
    await Dashboard.deleteMany({});
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Contact.deleteMany({});
    
    await Hero.create(heroData);
    await About.create(aboutData);
    await Dashboard.create(dashboardData);
    await Project.insertMany(projects);
    await Experience.insertMany(experiences);
    await Education.insertMany(education);
    await Contact.create(contactData);
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
