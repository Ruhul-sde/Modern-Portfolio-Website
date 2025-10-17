# Full-Stack Portfolio Website

This project is a full-stack portfolio website built using React for the frontend and Express with MongoDB for the backend. The website showcases various sections such as Home, About, Dashboard, Portfolio, Education, Experience, and Contact, all dynamically populated from a MongoDB database.

## Features

- Modern UI built with React and Tailwind CSS.
- RESTful API for data retrieval via Express and Mongoose.
- Data is seeded from a MongoDB database to provide dynamic content.
- Utilizes React Query for fetching and caching data efficiently.

## Tech Stack

- **Frontend**
  - React
  - Vite
  - Tailwind CSS
  - Lucide-React for icons
  - Recharts for data visualization
- **Backend**
  - Express
  - Mongoose
  - MongoDB
  - dotenv for environment variable management
  - CORS for managing Cross-Origin Resource Sharing

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   Install server dependencies:
   ```

cd server
npm install
Install client dependencies:

cd client
npm install
Set up environment variables:

Create a .env file in the server directory and add your database connection string.
Create a .env file in the client directory and set VITE_API_URL=http://0.0.0.0:5000/api.
Running the Application
Run both server and client using Replit:

Go to the Replit environment and click the "Run" button to start the full-stack application. The server will listen on port 5000 and the frontend will be served on port 80.
API Endpoints
GET /api/about - Retrieve about data
GET /api/projects - Retrieve portfolio projects
GET /api/dashboard - Retrieve dashboard data
GET /api/experiences - Retrieve work experiences
GET /api/education - Retrieve educational background
GET /api/contact - Retrieve contact information
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Special thanks to the libraries and tools used in this project:

React
Express
Mongoose
Tailwind CSS
