const router = require('express').Router();
const { Channel, Message } = require('../db/models');

module.exports = router;

// GET /api/channels
router.get('/', async (req, res, next) => {
  try {
    const channels = await Channel.findAll();
    res.json(channels);
  } catch (err) {
    next(err);
  }
});

// GET /api/channels/:channelId/messages
router.get('/:channelId/messages', async (req, res, next) => {
  try {
    const channelId = req.params.channelId;
    const messages = await Message.findAll({ where: { channelId } })
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

// POST /api/channels
router.post('/', async (req, res, next) => {
  try {
    const channel = await Channel.create(req.body);
    res.json(channel);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/channels
router.delete('/:channelId', async (req, res, next) => {
  try {
    const id = req.params.channelId;
    await Channel.destroy({ where: { id } });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});
