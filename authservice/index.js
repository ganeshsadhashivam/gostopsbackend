const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv").config();
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("", authRoutes);

const PORT = 4001;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
