const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.sendFile(path.name(__dirname, "frontend", "home.html"));
})

app.listen(PORT, () => {
  console.log("Server running!");
})
