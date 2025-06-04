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

