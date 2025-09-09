import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  try {
    // Extract token from "Authorization: Bearer <token>" OR headers.token
    const token = req.headers.authorization?.split(" ")[1] || req.headers.token;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Login Again" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.id) {
      req.user = { id: decoded.id }; // ✅ attach userId to request
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Login Again" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message || "Auth error" });
  }
};
