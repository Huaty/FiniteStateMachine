// Import the necessary libraries
const express = require("express");
const cors = require("cors");
// Create an instance of express app
const app = express();
const usersRoutes = require("./routes/user");

// Use JSON middleware to automatically parse JSON
app.use(express.json());

// Configure CORS
app.use(cors());

// Connect to the database

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Server Working");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});

try {
  app.use("/users", usersRoutes);
  console.log("Working");
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "An error occurred." });
}
