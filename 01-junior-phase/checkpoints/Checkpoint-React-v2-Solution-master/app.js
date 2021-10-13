const express = require('express');
const morgan = require('morgan');
const { join } = require('path');
const { getPets, addPet, removePet } = require('./petdata');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();

// Body Parsing
app.use(express.json());

// Request/Response Logging
app.use(morgan('dev'));

// GET all the pets
app.get('/api/pets', (req, res) => {
  // Wanna see what would happen if this endpoint were to fail? Uncomment
  // this line and comment out the other responses:
  // res.sendStatus(500)

  // Wanna see what would happen if this endpoint were to take a whole second?
  // Uncomment this line and comment out the other responses:
  // setTimeout(() => {
  //   res.json(getPets())
  // }, 1000)

  // This is how this endpoint SHOULD behave:
  res.json(getPets());
});

// POST a new pet
app.post('/api/pets', (req, res) => {
  console.log('server received this request body:\n', req.body);
  const { name, description, species } = req.body;
  const newPet = { name, description, species };
  addPet(newPet);
  res.json(newPet);
});

// DELETE pet with the given id
app.delete('/api/pets/:id', (req, res) => {
  const id = Number(req.params.id);
  removePet(id);
  res.sendStatus(204);
});

// Webpack Dev Middleware
const compiler = webpack(webpackConfig);
app.use(
  middleware(compiler, {
    // publicPath: join(__dirname, "public"),
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: true,
  })
);

// static file-serving middleware
app.use(express.static(join(__dirname, 'public')));

module.exports = app;
