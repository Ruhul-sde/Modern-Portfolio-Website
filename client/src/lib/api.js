
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const api = {
  async getHero() {
    const response = await fetch(`${API_URL}/hero`);
    if (!response.ok) throw new Error('Failed to fetch hero data');
    return response.json();
  },

  async getAbout() {
    const response = await fetch(`${API_URL}/about`);
    if (!response.ok) throw new Error('Failed to fetch about data');
    return response.json();
  },

  async getDashboard() {
    const response = await fetch(`${API_URL}/dashboard`);
    if (!response.ok) throw new Error('Failed to fetch dashboard data');
    return response.json();
  },

  async getProjects() {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },

  async getExperiences() {
    const response = await fetch(`${API_URL}/experiences`);
    if (!response.ok) throw new Error('Failed to fetch experiences');
    return response.json();
  },

  async getEducation() {
    const response = await fetch(`${API_URL}/education`);
    if (!response.ok) throw new Error('Failed to fetch education');
    return response.json();
  },

  async getContact() {
    const response = await fetch(`${API_URL}/contact`);
    if (!response.ok) throw new Error('Failed to fetch contact');
    return response.json();
  },

  async submitContact(data) {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit contact form');
    return response.json();
  }
};
