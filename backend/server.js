import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./Routes/auth.js";
import messageRoutes from "./Routes/message.routes.js";

import userRoutes from "./Routes/user.routes.js";

import connectToDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json()); //to parse the incoming request from req.body
app.use(cookieParser()); //to parse the incoming request from cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
