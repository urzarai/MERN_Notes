const express = require('express')
const router = express.Router()
const blog = require('./routes/blog')
app.use('/blog', blog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs')
})

// define the blogPost
router.get('/blogPost/:slug', (req, res) => {
    res.send(`fetch the blogPost for ${req.params.slug}`)
  })

module.exports = router