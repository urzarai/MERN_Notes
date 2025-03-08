const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.static("public"));

//sytax to write middleware
app.use((req, res, next) => {
  console.log("MIDDLEWARE");
  next();
});
//MIDDLEWARE 01
app.use((req, res, next) => {
  console.log("Midddleware - 01");
  const formattedTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  }); // Indian Timezone Format
  console.log(`Time: ${formattedTime} - ${req.method} request`);
  next();
});

//MIDDLEWARE 02
app.use((req, res, next) => {
  console.log("Midddleware - 02");
  const formattedTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  }); // Indian Timezone Format
  console.log(`Time: ${formattedTime} - ${req.method} request`);
  fs.appendFileSync(
    "log.txt",
    `Time: ${formattedTime} is a ${req.method} request\n`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Middleware running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
