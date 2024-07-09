import jwt from "jsonwebtoken";

const generateTokenandSetCookie = async (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent Cross site scripting (xss) attack
    sameSite: "strict", //CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenandSetCookie;
