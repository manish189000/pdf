const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.get("/download/resume", (req, res) => {
  const file = path.join(__dirname, "resume.pdf");
  res.download(file);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
