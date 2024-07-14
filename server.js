require('dotenv').config();

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the image
app.get('/p1.jpeg', (req, res) => {
  const stream = fs.createReadStream(path.join(__dirname, 'public', 'p1.jpeg'));
  stream.on('open', () => {
    stream.pipe(res);
  });
  stream.on('error', (err) => {
    res.status(404).end('Image not found');
  });
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log('> Ready on http://localhost:3000');
});
