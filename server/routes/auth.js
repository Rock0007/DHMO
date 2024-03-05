const router = require("express").Router();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { test, signup, login } = require("../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

router.get("/", test);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
