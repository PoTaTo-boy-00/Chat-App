import bcrypt from "bcrypt";

import User from "../models/user.model.js";
import generateTokenandSetCookie from "../utils/token.js";

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await User.findOne({ username });
    const correctPassword = await bcrypt.compare(
      password,
      userExist?.password || ""
    );
    if (!userExist || !correctPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    generateTokenandSetCookie(userExist._id, res);

    res.status(200).json({
      message: "Login Successful",
      user: userExist.username,
      fullname: userExist.fullname,
      profilePic: userExist.profilePic,
    });
  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};
