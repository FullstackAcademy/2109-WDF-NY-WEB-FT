const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// Logging middleware
app.use(morgan('dev'));

// Body-parsing middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Static file serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes that will be accessed via AJAX should be prepended with /api
app.use('/api', require('./api'));

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
