export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "User logged out successfully." });
  } catch (error) {
    console.log("Error in logout", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
