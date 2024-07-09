import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.js";
import messageRoutes from "./Routes/message.routes.js";
import conversationRoutes from "./Routes/conversation.routes.js";
import userRoutes from "./Routes/user.routes.js";

import connectToDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //to parse the incoming request from req.body
app.use(cookieParser()); //to parse the incoming request from cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
