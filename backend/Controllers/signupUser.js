import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenandSetCookie from "../utils/token.js";

export const signupUser = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    //Matching the passwords

    if (password != confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }

    const userExist = await User.findOne({ username });

    //Validating a unique Username

    if (userExist) {
      return res.status(400).json({ message: "Username already exists" });
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Profile Pic
    const boyProfilePic =
      "https://avatar.iran.liara.run/public/boy?username=${username}";
    const girlProfilePic =
      "https://avatar.iran.liara.run/public/girl?username=${username}";

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      //Generate Token
      await generateTokenandSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Something went Wrong" });
    }
  } catch (error) {
    console.log("SignUp Error", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
