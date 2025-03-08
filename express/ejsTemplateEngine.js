const express = require("express");
const path = require("path"); // Import path module
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let siteDescription = "This is a site description";
  res.render("index", { siteName: siteName, siteDescription: siteDescription });
});

app.get("/blog/:slug", (req, res) => {
  let blogTite = "This is a blog title";
  let blogContent = "This is a blog content";
  res.render("blogPost", {
    blogTite: blogTite,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
