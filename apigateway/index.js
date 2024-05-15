const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// Auth Service
app.post("/auth/register", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:4001/register",
      req.body
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error registering user.");
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:4001/login", req.body);
    res.send(response.data);
  } catch (error) {
    res.status(401).send("Invalid username or password.");
  }
});

// User Service
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4002/users");
    console.log("in users", response.data);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error creating user.");
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
