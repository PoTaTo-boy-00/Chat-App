import express from "express";
import { loginUser } from "../Controllers/loginUser.js";
import { logoutUser } from "../Controllers/logoutUser.js";
import { signupUser } from "../Controllers/signupUser.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.post("/signup", signupUser);

export default router;
