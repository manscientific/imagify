import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

// ✅ Safe logs for environment variables
console.log(
  "✅ CLIPDROP_API loaded:",
  process.env.CLIPDROP_API ? process.env.CLIPDROP_API.slice(0, 5) + "..." : "❌ NOT FOUND"
);
console.log("✅ Mongo URI:", process.env.MONGODB_URI ? "Loaded" : "❌ Missing");
console.log("✅ JWT_SECRET:", process.env.JWT_SECRET ? "Loaded" : "❌ Missing");

// ✅ Start server after DB connection
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB connected");

    // Routes
    app.use("/api/user", userRouter);
    app.use("/api/image", imageRouter);

    // Test route
    app.get("/", (req, res) => res.send("API working"));

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
