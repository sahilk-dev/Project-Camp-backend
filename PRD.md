# Product Requirements Document (PRD)

## Imagify - AI Text-to-Image SaaS (Fullstack)

### 1. Product Overview

**Product Name:** Imagify\
**Version:** 1.0.0\
**Product Type:** Full Stack Text to Image Generator AI Saas

This project aims to build a Software-as-a-Service (SaaS) platform that allows users to generate AI-powered images from text prompts. It will leverage a pre-trained text-to-image model integrated into the MERN stack.

### 2. Target Users

**Administrators:** Manage users, monitor system performance, and oversee content.\
**Premium Users:** Access unlimited image generations, higher resolution, and exclusive features.\
**Free Users:** Limited image generations with restrictions on resolution and features.

### 3. Core Features

**3.1 User Authentication & Authorization**

- Sign Up/Login with JWT-based authentication
- Email Verification during registration
- **Password Management** Change, reset, and forgot password
- **Role-Based Access Control:** Admin, Premium, Free

**3.2 AI Image Generation**

- Text-to-Image Generation using AI models

**3.3 User Dashboard (Frontend Features)**

- Prompt Input Box
- Image Gallery to view/download generated images
- Usage Stats (e.g., number of prompts used today)
- Subscription Status displayed

**3.4 Subscription & Payments**

- **Free Plan:** Limited daily prompts
- **Premium Plan:** Unlimited prompts
- **Payment Gateway:** Razorpay integration

**3.5 Admin Features**

- **User management:** Add, update, deactivate accounts
- **Subscription Management:** Modify plan details
- **Content Moderation:** Remove inappropriate images
- **Usage Dashboard:** Analytics on system usage and API calls

**3.6 System Health**

- Health Check API for backend monitoring
- Service Status Dashboard for admins

### 4. Technical Specifications

**4.1 Frontend (React + Tailwind CSS)**

- **Framework:** React.js
- **State Management:** Redux / Context API
- **UI:** Tailwind CSS for modern, responsive design
- **Authentication:** JWT stored in HttpOnly cookies/localStorage

**4.2 Backend (Node.js + Express.js)**

- API Routes for authentication, image generation, payments and gallery
- Middleware for validation, error handling, rate limiting
- Rloe-Based Access Control via middleware
- RESTful APIs secured with JWT

**4.3 Database (MongoDB Atlas)**

- **User Schema:** Stores profile, subscription, history
- **Image Schema:** Stores prompt, image URL, metadata
- **Subscription Schema:** Manages payments & plan info

**4.4 AI Model Integration**

- **Option 1:** API Integration with external services (e.g., Stable Diffusion API, OpenAI DALL·E)
- **Option 2:** Self-hosted AI model (requires GPU server)
- **Queue Management:** Control concurrent requests to avoid overload

**4.5 Storage & File Management**

- **Cloud Storage**: Cloudinary / AWS S3 for generated images
- **Metadata in DB**: Store URL, prompt, userId, createdAt
- **Cleanup Policy**: Auto-delete free-user images after X days

**4.6 Payments**

- Stripe API Integration for subscription management
- Webhook Support for payment confirmation and cancellations
- Billing Dashboard for users

### 5. API Endpoints
