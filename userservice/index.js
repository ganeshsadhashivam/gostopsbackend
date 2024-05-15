// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const app = express();
// app.use(bodyParser.json());

// mongoose.connect(process.env.MONGO_DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const User = mongoose.model("User", { username: String, email: String });

// app.post("/users", async (req, res) => {
//   const { username, email } = req.body;
//   const user = new User({ username, email });
//   await user.save();
//   res.send("User created successfully.");
// });

// const PORT = 4002;
// app.listen(PORT, () => console.log(`User service running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv").config();
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/users", userRoutes);

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
