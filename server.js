const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Render uses process.env.PORT

// Serve static files (optional, if you have a frontend folder)
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "home.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
