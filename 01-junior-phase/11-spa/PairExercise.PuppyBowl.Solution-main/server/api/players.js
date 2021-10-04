const router = require('express').Router();
const {Player, Team} = require('../db');

// GET /api/players
router.get('/', async (req, res, next) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    next(err);
  }
});

// GET /api/players/:id
router.get('/:id', async (req, res, next) => {
  try {
    const player = await Player.findByPk(req.params.id, {
      include: Team
    });
    if(!player) {
      let err = new Error('No player found with that ID');
      err.status = 404;
      next(err);
    } else {
      res.send(player);
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/players
router.post('/', async (req, res, next) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.send(newPlayer);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/players/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const playerToRemove = await Player.findByPk(req.params.id);
    if(!playerToRemove) {
      let err = new Error('Cannot remove player - No player found with that ID');
      err.status = 404;
      next(err);
    } else {
      await playerToRemove.destroy();
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
})

module.exports = router;
