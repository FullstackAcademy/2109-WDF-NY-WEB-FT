const router = require('express').Router();

router.use('/cats', require('./cat-api'));

module.exports = router;
