# Event Management Platform – Backend

This is the backend service for the **Event Management Platform**, built with **Node.js**, **Express.js**, and **MongoDB**, following a **clean MVC architecture** for better separation of concerns. The backend is designed to handle user authentication, event creation, Gemini-based AI description generation, and image handling via base64 directly into the database.

## Technologies Used

| Category         | Stack/Library       |
|------------------|---------------------|
| Runtime          | Node.js             |
| Server Framework | Express.js          |
| Database         | MongoDB + Mongoose  |
| Auth             | JWT (jsonwebtoken)  |
| AI Integration   | Google Gemini API   |
| Environment Vars | dotenv              |
| CORS             | cors                |
| Error Handling   | Custom Middlewares  |


---

## Folder Architecture

```bash
.
├── config/
│   └── db.js                 # MongoDB connection setup
├── controllers/
│   ├── authController.js     # Login/Register handlers
│   └── eventController.js    # Event creation logic
├── middlewares/
│   ├── authMiddleware.js     # Protect routes using JWT
│   └── errorHandler.js       # Global error catcher
├── models/
│   ├── user.js               # Mongoose schema for User
│   └── event.js              # Mongoose schema for Event
├── routes/
│   ├── authRoutes.js         # Auth endpoints
│   └── eventRoutes.js        # Event-related endpoints
├── services/
│   └── geminiService.js      # Handles interaction with Gemini API
├── .env                      # Store all secrets and keys
├── server.js                 # Entry point for backend server
├── package.json
├── README.md

```

## .env

PORT=5000

MONGODB_URI=mongodb://localhost:27017/test-sample

JWT_SECRET=Pathu@123

## Key Features

- Clean and modular **MVC architecture**
- JWT-based authentication with secure protected routes
- Route separation for `auth` and `event` modules
- **Google Gemini API integrated** for AI-powered event description
- Image upload via base64 and stored directly in MongoDB
- Proper error handling with centralized middleware
- Easy to extend for new features or services
- Ready for scale: **can be upgraded to microservices also**

## Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/username/your-backend-repo.git

# 2. Navigate into the project
cd backend-repo

# 3. Install dependencies
npm install

# 4. Create a `.env` file with the following:
PORT=5000
MONGO_URI=mongodb_uri_here #localhost or we can use cluster for testing
JWT_SECRET=jwt_secret
GEMINI_API_KEY=gemini_api_key #use in Frontend else we can use here

# 5. Run the server
npm start

```

## REST API Overview
➤ Auth Routes
```POST /api/auth/register``` – Register user

```POST /api/auth/login``` – Login and receive JWT token

➤ Event Routes
```POST /api/events/create``` – Create event with image + Gemini description

Requires valid JWT token in``` Authorization``` header as: ```Bearer <token>```

## Status
MongoDB integration tested

Event + User schema live

JWT secure routes working

Gemini API tested with fallback

Scalable code structure

Ready for hackathons, demos, or feature extension

 ## Done by

 Pathu T
 
 Intern
 
 SNS InnovationHub

Thank you, Your feedback is greatly appreciated!




