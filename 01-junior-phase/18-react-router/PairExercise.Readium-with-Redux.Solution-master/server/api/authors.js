const router = require('express').Router()
const {Author, Comment, Story} = require('../db')

// GET /api/authors
router.get('/', async (req, res, next) => {
  try {
    const authors = await Author.findAll({
      attributes: ['id', 'name', 'imageUrl']
    })
    res.json(authors)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/authors/:authorId
router.get('/:authorId', async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.authorId)
    res.json(author)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/authors/:authorId/comments
router.get('/:authorId/comments', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      where: {
        authorId: req.params.authorId
      },
      include: [Author]
    })
    res.json(comments)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/authors/:authorId/stories
router.get('/:authorId/stories', async (req, res, next) => {
  try {
    const story = await Story.findAll({
      where: {
        authorId: req.params.authorId
      },
      include: [Author]
    })
    res.json(story)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
