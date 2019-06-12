const express = require('express');

const albums = require('./albums.json');

const app = express();

app.get('/api/albums', (req, res) => {
  // Sending JSON as response
  res.send(albums);
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));
