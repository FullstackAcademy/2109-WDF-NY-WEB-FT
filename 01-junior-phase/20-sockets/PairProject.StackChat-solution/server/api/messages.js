const router = require('express').Router();
const { Message, Author } = require('../db/models');

module.exports = router;

// GET /api/messages
router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

// POST /api/messages
router.post('/', async (req, res, next) => {

  // We don't have proper users yet (we'll get there soon, though!).
  // Instead, we'll findOrCreate an author by name, for simplicity.
  // Of course, you wouldn't want to do this in a real chat app!
  try {
    const [author] = await Author.findOrCreate({
      where: {
        name: req.body.name || 'Cody'
      }
    })
    const message = Message.build(req.body);
    message.setAuthor(author, { save: false });
    await message.save()
    const returnMessage = message.toJSON();
    returnMessage.author = author;
    res.json(returnMessage);
  } catch (err) {
    next(err);
  }
});

// PUT /api/messages
router.put('/:messageId', async (req, res, next) => {
  try {
    const messageId = req.params.messageId;
    const message = await Message.findByPk(messageId)
    await message.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// DELETE /api/messages
router.delete('/:messageId', async (req, res, next) => {
  try {
    const id = req.params.messageId;
    await Message.destroy({ where: { id } })
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});
