const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
module.exports = app;

app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.use('/api', require('./api'));

app.use((req, res, next) => {
  const error = Error('page not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
