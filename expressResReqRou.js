const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Its a get request");
  res.send("<h1>Hello World Get!</h1>");
});

app.post("/", (req, res) => {
  console.log("Its a post request");
  res.send("<h1>Hello World post!</h1>");
});

app.put("/", (req, res) => {
  console.log("Its a put request");
  res.send("<h1>Hello World put!</h1>");
});

app.delete("/", (req, res) => {
  console.log("Its a delete request");
  res.send("<h1>Hello World delete!</h1>");
});

app.get("/index", (req, res) => {
    console.log("Its a index");
    res.sendFile(templates/index.html,{root:__dirname});
});

app.get("/api", (req, res) => {
    res.json({a:1,b:2,c:3});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
