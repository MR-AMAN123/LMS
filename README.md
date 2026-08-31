# 🎓 LMS - Learning Management System

A full-stack Learning Management System (LMS) that allows students to browse and enroll in courses, while instructors can create and manage educational content.

The application is built using modern web technologies with a React frontend, Node.js/Express backend, MongoDB database, and Stripe integration for payments.

## 🚀 Live Demo

🔗 **Live Application:**  
https://lms-rho-azure.vercel.app/

---

## 📌 Features

### 👨‍🎓 Student Features

- User registration and login
- Secure authentication
- Browse published courses
- View course details
- Enroll in courses
- Purchase courses
- Access enrolled courses
- Track learning progress
- User profile management

### 👨‍🏫 Instructor Features

- Create courses
- Update course information
- Publish/unpublish courses
- Upload course content
- Manage course lectures
- View created courses
- Manage course details

### 💳 Payment Features

- Stripe payment integration
- Secure course checkout
- Payment verification
- Enrollment after successful payment

### 🔐 Authentication & Security

- User authentication
- Protected routes
- Role-based access
- JWT-based authentication
- Environment variables for sensitive credentials

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### Payment

- Stripe

### Cloud & Deployment

- MongoDB Atlas
- Vercel
- Render
- Cloudinary

---

## ⚙️ Installation & Setup

Follow the steps below to run the LMS project locally.

### 📋 Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher recommended)
- npm
- Git
- MongoDB Atlas account
- Cloudinary account
- Stripe account (for payment testing)

You can check Node.js and npm:

```bash
node -v
npm -v

1️⃣ Clone the Repository
git clone https://github.com/MR-AMAN123/LMS.git

Navigate into the project:

cd LMS

2️⃣ Install Frontend Dependencies

Navigate to the client folder:

cd client

Install the required packages:

npm install

Start the frontend development server:

npm run dev

The frontend will normally be available at:

http://localhost:5173

3️⃣ Install Backend Dependencies

Open a new terminal and navigate to the project:

cd LMS

Then go to the server folder:

cd server

Install the backend dependencies:

npm install

Start the backend server:

npm start

The backend will normally run on:

http://localhost:8080


4️⃣ Configure MongoDB Atlas
Create an account on MongoDB Atlas.
Create a new project.
Create a MongoDB cluster.
Create a database user.
Add your IP address to the MongoDB Network Access list.
For development/testing, you can temporarily allow:
0.0.0.0/0
Go to:
Database → Connect → Drivers
Copy the MongoDB connection string.


5️⃣ Configure Environment Variables

Inside the server folder, create a file named:

.env

MONGO_URL=your_mongodb_connection_string
PORT=8080
SECRET_KEY=your_secret_key

API_KEY=your_api_key
API_SECRET=your_api_secret
CLOUD_NAME=your_cloud_name

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

FRONTEND_URL=http://localhost:5173

Terminal 1 — Backend
cd LMS/server
npm install
npm start

Terminal 2 — Frontend
cd LMS/client
npm install
npm run dev
