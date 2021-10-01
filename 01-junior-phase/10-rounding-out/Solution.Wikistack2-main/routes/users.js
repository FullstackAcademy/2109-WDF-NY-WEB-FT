const express = require("express");
const router = express.Router();
const { Page, User } = require("../models");
const { userList, userPages, notFoundPage } = require("../views");

// GET /users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) {
    next(error);
  }
});

// GET /users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [{ model: Page }]
    });

    if(!user) {
      res.status(404).send(notFoundPage());
    } else {
      res.send(userPages(user, user.pages));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
