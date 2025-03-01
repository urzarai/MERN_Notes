const express = require("express");
const app = express();
const port = 3000;

//to use middleware
app.use(express.static('public'));

// app.get or app.put or app.post or app.delete (path,handler)
app.get("/", (req, res) => {
  res.send("<h1> Express is running <h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1> Express is running About <h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1> Express is running Contact Me <h1>");
});

app.get("/blog", (req, res) => {
  res.send("<h1> Express is running Blog page<h1>");
});

app.get("/blog/:slug/:sluggy", (req, res) => {
  res.send(`<h1> Express is running ${req.params.slug} and ${req.params.sluggy}<h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
