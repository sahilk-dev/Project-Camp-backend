# Project Camp Backend

> Backend API for Project Management System - A comprehensive solution for managing projects, tasks, and team collaboration.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 🎯 About

Project Camp Backend is a robust RESTful API built to power project management applications. It provides comprehensive features for user management, project tracking, task organization, and team collaboration.

## ✨ Features

- 🔐 User Authentication & Authorization (JWT)
- 👥 User Management
- 📁 Project Management
- ✅ Task Management
- 🔒 Secure Password Hashing (bcrypt)
- ✉️ Email Notifications (Nodemailer)
- 🛡️ Input Validation (express-validator)
- 🌐 CORS Support
- 🍪 Cookie-based Session Management

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB (Mongoose v8.19.1)
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcrypt v6.0.0
- **Validation**: express-validator
- **Email**: Nodemailer + Mailgen
- **Dev Tools**: Nodemon, Prettier

## 📁 Project Structure
```
Project-Camp-backend/
├── public/
│ └── images/ # Static images
├── src/
│ ├── controllers/ # Route controllers
│ ├── db/ # Database configuration
│ ├── middlewares/ # Custom middlewares
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── utils/ # Utility functions
│ ├── validators/ # Input validators
│ ├── app.js # Express app setup
│ └── index.js # Entry point
├── .gitignore
├── .prettierrc
├── .prettierignore
├── package.json
├── package-lock.json
├── PRD.md # Product Requirements Document
└── README.md
```

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Steps

1. **Clone the repository**
git clone https://github.com/sahilk-dev/Project-Camp-backend.git
cd Project-Camp-backend

2. **Install dependencies**
npm install

3. **Set up environment variables**
- Create a `.env` file in the root directory
- Add required environment variables (see [Environment Variables](#environment-variables))

4. **Start the development server**
npm run dev

5. **Start the production server**
npm start

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

Server Configuration
PORT=5000
NODE_ENV=development

Database
MONGODB_URI=your_mongodb_connection_string

JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=noreply@projectcamp.com

CORS
CORS_ORIGIN=http://localhost:3000

Cookie
COOKIE_SECRET=your_cookie_secret

## 📡 API Documentation

### Base URL
http://localhost:5000/api/v1

### Authentication Endpoints
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `GET /auth/profile` - Get user profile
- `PUT /auth/profile` - Update user profile

### Project Endpoints
- `GET /projects` - Get all projects
- `POST /projects` - Create new project
- `GET /projects/:id` - Get project by ID
- `PUT /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

### Task Endpoints
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create new task
- `GET /tasks/:id` - Get task by ID
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

> **Note**: Detailed API documentation with request/response examples can be found in the `/docs` folder (coming soon).

## 📜 Scripts
- npm run dev # Start development server with nodemon
- npm start # Start production server
- npm run format # Format code with Prettier
