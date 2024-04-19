const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World of Akash!");
});
app.get("/login", (req, res) => {
  res.send("login into your account");
});

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/abcd");
  console.log("database connected");
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
