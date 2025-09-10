

---

```markdown
# 🖼️ Imagify – Text to Image Generator with Credits System

**Imagify** is a mern-stack web application that lets users **generate AI-powered images from
 text prompts**.  
Users can **register, log in, purchase credits via Razorpay**, and spend credits
 to generate images.  

Built with **React (Vite)** on the frontend and **Node.js + Express + MongoDB**
 on the backend.

---

## 🚀 Features

- 🔑 **User Authentication** – Secure login & registration with JWT
- 💳 **Credits System** – Each user has a credit balance
- 💰 **Razorpay Payments** – Buy credits with secure Razorpay integration
- 🖼️ **Text-to-Image Generation** – Convert prompts into images
- 📊 **Transaction Tracking** – All purchases stored in MongoDB
- 🎨 **Responsive UI** – Built with Vite + React

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🎨 TailwindCSS
- 🔔 React Toastify (notifications)
- 🔗 Axios (API calls)
- Razorpay Checkout.js

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB + Mongoose
- 🔑 JWT Authentication
- 🧂 Bcrypt (password hashing)
- 🔐 Crypto (Razorpay signature verification)

---

## 📂 Project Structure

```

imagify/
│── backend/
│   ├── controllers/      # All business logic (auth, payments, image generation)
│   ├── models/           # Mongoose models (User, Transaction)
│   ├── routes/           # Express routes
│   ├── middlewares/      # Authentication middleware
│   └── server.js         # App entry point
│
│── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── context/      # Global AppContext
│   │   ├── pages/        # UI pages (Login, Buy Credits, Generate)
│   │   └── App.jsx       # Root component
│   └── vite.config.js
│
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/imagify.git
cd imagify
````

### 2️⃣ Setup Backend

```bash
cd backend
npm init
```

Create a `.env` file:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_CURRENCY=INR
```

Run backend:

```bash
npm run start
```

### 3️⃣ Setup Frontend

```bash

npm create vite@latest client
cd client
npm install
npm run dev


```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Run frontend:

```bash
npm run dev
```

---

## 💳 Payment Flow

1. User clicks **Purchase Credits**
2. Backend creates Razorpay **order**
3. Razorpay Checkout opens → user pays
4. Razorpay sends `order_id`, `payment_id`, and `signature`
5. Backend verifies signature using `crypto`
6. On success → credits added to user’s account

---

## 🎯 Future Improvements

* 📜 Add user’s **transaction history page**
* 🖼️ Gallery of generated images
* 🌍 Deploy backend (Render/Heroku) and frontend (Vercel/Netlify)

---

## 👨‍💻 Author

Developed by Shiven kumar ✨

```

---


```
