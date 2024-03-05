const router = require("express").Router();
const authenticateToken = require("../helpers/jwtMiddleware");
const cors = require("cors");
const dotenv = require("dotenv").config();
const {
  test,
  signup,
  login,
  getProfile,
  logout,
} = require("../controllers/authController");

// Update the origin based on your frontend URL
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

router.get("/", test);
router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authenticateToken, getProfile);
router.delete("/logout", authenticateToken, logout);

module.exports = router;
