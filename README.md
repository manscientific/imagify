# 🖼️ Imagify

A modern AI-powered image generation platform with authentication, payments, and credit-based usage.

---

## ✨ Features
- 🔐 **Authentication**: Secure login/signup with JWT
- 💳 **Credits & Payments**: Razorpay integration for buying credits
- 🖼️ **AI Image Generation**: Generate images using advanced AI models
- 📂 **Credit Management**: Track and manage credits
- ⚡ **Responsive UI**: Works across devices
- 🧩 **Reusable Components**: Clean React + Context structure

---

## 🏗️ Project Structure
```bash
imagify/
│── backend/
│   ├── controllers/     # Business logic (auth, payments, image generation)
│   ├── models/          # Mongoose models (User, Transaction)
│   ├── routes/          # Express routes
│   ├── middlewares/     # Authentication middleware
│   └── server.js        # App entry point
│
│── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # Global AppContext
│   │   ├── pages/       # UI pages (Login, Buy Credits, Generate)
│   │   └── App.jsx      # Root component
│   └── vite.config.js
│
└── README.md

```

# 🛠️ Tech Stack

Frontend

⚛️ React (Vite + Context API)

🎨 TailwindCSS

🔄 Axios for API calls

💳 Razorpay SDK

Backend

🟢 Node.js + Express

🍃 MongoDB + Mongoose

🔐 JWT Authentication

💳 Razorpay for payments

# 📦 Installation
Backend

```bash
cd backend
npm init -y
npm install express mongoose cors dotenv bcrypt jsonwebtoken razorpay body-parser
node server.js
```

frontend
```bash
npm create vite@latest frontend
cd frontend
npm install
npm install axios razorpay tailwindcss
npm run dev
```

# ⚡ Prerequisites

Node.js (v14 or higher)

MongoDB (local or Atlas)

Razorpay API keys

clipdrop / Image API key

 #🚀 Getting Started

Clone the repo
```bash
git clone https://github.com/manscientific/imagify.git
```


Setup backend (.env file with MongoDB + Razorpay + API keys)

Run backend and frontend simultaneously

Start generating AI-powered images 🎨
