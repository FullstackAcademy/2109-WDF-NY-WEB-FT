const router = require('express').Router();
module.exports = router;

router.use('/channels', require('./channels'));
router.use('/messages', require('./messages'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});
