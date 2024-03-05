const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT;
const db = require("./db");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
