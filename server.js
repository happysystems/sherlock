const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  // some code ig
})

app.listen(PORT, () => {
  console.log("Server running!")
})
