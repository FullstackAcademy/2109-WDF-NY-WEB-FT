const router = require('express').Router()
const {Album, Artist, Song} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [Artist]
    })
    res.json(albums)
  } catch (err) { next(err) }
})

router.get('/:albumId', async (req, res, next) => {
  try {
    const album = await Album.findByPk(req.params.albumId, {
      include: [Artist, {model: Song, include: [Artist]}]
    })
    res.json(album)
  } catch (err) { next(err) }
})

module.exports = router
