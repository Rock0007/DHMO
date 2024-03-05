const jwt = require("jsonwebtoken");
const SSStaffModel = require("../models/SS_Staff");
const { hashPassword, comparePassword } = require("../helpers/auth");

//test
const test = async (req, res) => {
  res.json("test is working");
};

//Signup
const signup = async (req, res) => {
  try {
    const { name, email, mobile, password, confirmPassword } = req.body;

    const existingUser = await SSStaffModel.findOne({
      $or: [{ mobile }, { email }],
    });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    if (!/^\d{10}$/.test(mobile)) {
      return res.status(400).json({
        error: "Mobile number must be 10 digits and contain only numbers.",
      });
    }

    if (!email.endsWith("@gmail.com")) {
      return res.status(400).json({ error: "Email must end with @gmail.com" });
    }

    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      return res.status(400).json({
        error:
          "Password must be at least 6 characters long and contain at least one uppercase letter and one symbol.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const hashedPassword = await hashPassword(password);

    const newSSStaffUser = new SSStaffModel({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    await newSSStaffUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Login
const login = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    const user = await SSStaffModel.findOne({ mobile });

    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid mobile number or password" });
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Invalid mobile number or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .cookie("token", token)
      .json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get Profile
const getProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await SSStaffModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Logout
const logout = (req, res) => {
  res
    .status(200)
    .clearCookie("token", { httpOnly: true, sameSite: "None", secure: true })
    .json({ message: "Logout successful" });
};

module.exports = {
  test,
  signup,
  login,
  getProfile,
  logout,
};
