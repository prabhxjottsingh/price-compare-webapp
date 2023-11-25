// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const path = require('path');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'src/views'));

// Import routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(__dirname);  
  console.log(`The server is running at http://localhost:${PORT}`);
});
