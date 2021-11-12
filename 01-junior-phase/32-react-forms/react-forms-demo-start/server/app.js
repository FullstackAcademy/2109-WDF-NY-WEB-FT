const express = require('express');
const path = require('path');
const app = express();
const { db } = require('./db');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.use('/api', require('./api'));

app.use((req, res, next) => {
  res.sendStatus(404);
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const init = async () => {
  try {
    await db.sync();
    app.listen(3000, () => {
      console.log('app is running!');
    });
  } catch (err) {
    console.log(err);
  }
};

init();
