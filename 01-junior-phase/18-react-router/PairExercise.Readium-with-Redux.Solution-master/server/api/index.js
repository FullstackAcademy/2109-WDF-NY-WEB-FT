const router = require('express').Router()

router.use('/stories', require('./stories'))
router.use('/authors', require('./authors'))

module.exports = router
