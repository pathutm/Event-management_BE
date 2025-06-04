PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackathon
JWT_SECRET=Pathu@123

# Hackathon Event Management Platform – Backend

This is the backend service for the Hackathon Event Management Platform. It provides RESTful APIs to manage users, events, authentication, and admin functionalities.

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (for Authentication)
- CORS, Helmet, Morgan (Security & Logging)
- dotenv (Environment Variables)

## Folder Structure

be/
├── config/ # Database connection setup
├── controllers/ # Route handler logic
├── middlewares/ # Auth and error handling
├── models/ # Mongoose schemas (User, Event)
├── routes/ # API route definitions
├── utils/ # Helper functions
├── index.js # Entry point
├── .env # Environment variables
├── .gitignore
└── package.json

give the proper readme file using this content
Hackathon Event Management Platform – Backend
Node.js
Express.js
MongoDB

This is the backend service for the Hackathon Event Management Platform. It provides RESTful APIs to manage users, events, authentication, and admin functionalities.

Features
User authentication (JWT)

CRUD operations for hackathon events

Admin dashboard functionalities

Secure API endpoints

Request logging

CORS protection

Tech Stack
Runtime: Node.js

Framework: Express.js

Database: MongoDB (with Mongoose ODM)

Authentication: JWT (JSON Web Tokens)

Security: Helmet, CORS

Logging: Morgan

Environment Management: dotenv

Environment Variables
The following environment variables need to be set in your .env file:

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackathon
JWT_SECRET=your_strong_jwt_secret_here
Installation
Clone the repository:

bash
git clone https://github.com/yourusername/hackathon-platform.git
cd hackathon-platform/be
Install dependencies:

bash
npm install
Set up environment variables:

bash
cp .env.example .env
# Edit .env file with your configuration
Start the development server:

bash
npm start
or for development with nodemon:

bash
npm run dev
Folder Structure
be/
├── config/          # Database connection and configuration
├── controllers/     # Route handlers and business logic
├── middlewares/     # Authentication and error handling middleware
├── models/          # Mongoose schemas and models (User, Event)
├── routes/          # API route definitions
├── utils/           # Helper functions and utilities
├── index.js         # Application entry point
├── .env             # Environment variables
├── .gitignore
└── package.json
API Documentation
The API documentation is available at /api-docs when the server is running (requires Swagger setup).

Sample Endpoints
POST /api/auth/register - User registration

POST /api/auth/login - User login

GET /api/events - Get all events

POST /api/events - Create new event (admin only)

PUT /api/events/:id - Update event (admin only)

Development
To run in development mode with automatic restart:

bash
npm run dev
To run tests:

bash
npm test
Deployment
For production deployment:

Set NODE_ENV=production in your .env file


bash
pm2 start index.js --name "hackathon-backend"
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
