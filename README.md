### ✅ `backend/README.md`

# Brewex Backend

This is the backend for the Brewex product landing page and admin CMS, built with **Node.js**, **Express**, and **MongoDB**.

🔗 **GitHub Repository:** [https://github.com/Saichandanyadav/brewex-landing-cms](https://github.com/Saichandanyadav/brewex-landing-cms)

🌐 **Live Site:** [https://brewex-landing-cms.vercel.app](https://brewex-landing-cms.vercel.app)

---

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── headingController.js
├── models/
│   ├── Admin.js
│   └── Heading.js
├── routes/
│   ├── authRoutes.js
│   └── headingRoutes.js
├── .env
├── server.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Saichandanyadav/brewex-landing-cms.git
cd brewex-landing-cms/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server

```bash
node server.js
```

---

## 🔌 API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/heading`       | Get landing page heading |
| POST   | `/api/heading`       | Update heading text      |
| POST   | `/api/auth/register` | Register a new admin     |
| POST   | `/api/auth/login`    | Login as admin           |

---

## 🔐 Auth Notes

* Passwords are hashed using **bcryptjs**
* JWT tokens are issued on successful login
* Admin credentials are validated (email format and minimum 6-character password)

---

## 📦 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Bcrypt
* Validator
* CORS

---

### ✅ `frontend/README.md`

# Brewex Frontend

This is the frontend for the Brewex product landing page and admin CMS, built with **ReactJS**.

🔗 **GitHub Repository:** [https://github.com/Saichandanyadav/brewex-landing-cms](https://github.com/Saichandanyadav/brewex-landing-cms)
🌐 **Live Site:** [https://brewex-landing-cms.vercel.app](https://brewex-landing-cms.vercel.app)

---

## 📁 Project Structure

```
frontend/
├── public/
│   └── style-frame.png
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Product/
│   │   ├── CMS/
│   │   ├── Login/
│   │   └── Register/
│   ├── App.jsx
│   └── App.css
```

---

## ⚙️ Setup Instructions

### 1. Navigate to Frontend Directory

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will run locally at:
📍 `http://localhost:5173`

---

## 🔐 Admin Panel Flow

* Go to `/register` to create a new admin account
* After registering, you'll be redirected to `/login`
* On successful login, you'll be redirected to `/admin`
* Unauthorized access is blocked with error toast notifications

---

## 🔗 Routes Overview

* `/` – Home (Landing Page)
* `/login` – Admin Login
* `/register` – Admin Registration
* `/admin` – Admin CMS Panel

---

## 🎯 Features

* Dynamic homepage heading managed via CMS
* Real-time content updates via **Socket.IO**
* Admin authentication using **JWT**
* Toast notifications for interactive feedback

---

## 🧰 Tech Stack

* ReactJS
* React Router
* Toastify
* Socket.IO Client
* CSS Modules
