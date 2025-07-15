### ✅ `backend/README.md`

# Brewex Backend

This is the backend for the Brewex product landing page and admin CMS, built with **Node.js**, **Express**, and **MongoDB**.

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

````

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/brewex.git
cd brewex/backend
````

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

### 5. API Endpoints

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
* Admin credentials are validated (email format & min 6-character password)

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

````

---

### ✅ `frontend/README.md`

# Brewex Frontend

This is the frontend for the Brewex landing page and admin CMS, built with **ReactJS**.

## 📁 Project Structure

````

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

````

## ⚙️ Setup Instructions

### 1. Navigate to Frontend Directory

```bash
cd frontend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be running at:
📍 `http://localhost:5173`

---

## 🔐 Admin Panel Flow

* Navigate to `/register` to create an admin account.
* After registering, you'll be redirected to `/login`.
* On successful login, you're redirected to `/admin` (CMS).
* Unauthorized access is blocked and error toasts are shown.

---

## 🔗 Navigation

* `/` - Home (Landing Page)
* `/login` - Admin Login
* `/register` - Admin Registration
* `/admin` - CMS Panel

---

## 🎯 Features

* Styled landing page with dynamic CMS-controlled heading
* Admin login/register with JWT auth
* Realtime content update on the home page via Socket.IO
* Toast notifications for user feedback

---

## 🧰 Tech Stack

* ReactJS
* React Router
* Toastify
* Socket.IO Client
* CSS Modules

