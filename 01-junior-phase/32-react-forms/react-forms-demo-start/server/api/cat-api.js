const express = require('express');
const { Cat } = require('../db');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cats = await Cat.findAll();
    res.json(cats);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdCat = await Cat.create(req.body);
    res.json(createdCat);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
