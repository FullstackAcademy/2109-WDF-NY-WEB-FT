const router = require('express').Router()
const {Story, Author, Comment} = require('../db')

// GET /api/stories
router.get('/', async (req, res, next) => {
  try {
    const stories = await Story.findAll({
      where: req.query,
      attributes: ['id', 'title'],
      include: [Author]
    })
    res.json(stories)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/stories/:storyId
router.get('/:storyId', async (req, res, next) => {
  try {
    const story = await Story.findById(req.params.storyId, {
      include: [Author, {model: Comment, include: Author}]
    })
    res.json(story)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
