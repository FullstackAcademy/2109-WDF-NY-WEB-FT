const router = require('express').Router()

router.use('/albums', require('./albums'))

module.exports = router
