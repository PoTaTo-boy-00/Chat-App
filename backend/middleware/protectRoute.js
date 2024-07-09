import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "unauthorized-No Token Found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ message: "unauthorized-Invalid Token" });
    }
    const user = await User.findById(decoded.userID).select("-password");

    if (!user) {
      return res.status(401).json({ message: "unauthorized-User Not Found" });
    }
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in middleware :", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export default protectRoute;
