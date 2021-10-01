const express = require("express");
const router = express.Router();
const { Page, User, Tag } = require("../models");
const { main, addPage, editPage, wikiPage, notFoundPage } = require("../views");

// GET /wiki
router.get("/", async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
});

// POST /wiki
router.post("/", async (req, res, next) => {
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email
      }
    });

    const page = await Page.create(req.body);

    await page.setAuthor(user);

    const tagArray = req.body.tags.split(' ');
    const tags = await Promise.all(tagArray.map(async (tagName) => {
      const [tag, wasCreated] = await Tag.findOrCreate({
        where: {
          name: tagName
        }
      });
      return tag;
    }));

    await page.addTags(tags);

    res.redirect("/wiki/" + page.slug);
  } catch (error) {
    next(error);
  }
});

// GET /wiki/search
router.get("/search", async (req, res, next) => {
  try {
    const pages = await Page.findByTag(req.query.search);
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
});

// PUT /wiki/:slug
router.put("/:slug", async (req, res, next) => {
  try {
    const [updatedRowCount, updatedPages] = await Page.update(req.body, {
      where: {
        slug: req.params.slug
      },
      returning: true
    });

    const tagArray = req.body.tags.split(' ');
    const tags = await Promise.all(tagArray.map(async (tagName) => {
      const [tag, wasCreated] = await Tag.findOrCreate({
        where: {
          name: tagName
        }
      });
      return tag;
    }));

    await updatedPages[0].setTags(tags);

    res.redirect("/wiki/" + updatedPages[0].slug);
  } catch (error) {
    next(error);
  }
});

// DELETE /wiki/:slug
router.delete("/:slug", async (req, res, next) => {
  try {
    await Page.destroy({
      where: {
        slug: req.params.slug
      }
    });

    res.redirect("/wiki");
  } catch (error) {
    next(error);
  }
});

// GET /wiki/add
router.get("/add", (req, res) => {
  res.send(addPage());
});

router.get('/search', async (req, res, next) => {
  try {
    const pages = await Page.findByTag(req.query.search);
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
});

// GET /wiki/:slug
router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      },
      include: [
        {
          model: Tag
        },
        {
          model: User,
          as: 'author'
        }
      ]
    });
    if (page === null) {
      res.status(404).send(notFoundPage());
    } else {
      res.send(wikiPage(page));
    }
  } catch (error) {
    next(error);
  }
});

// GET /wiki/:slug/edit
router.get("/:slug/edit", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      },
      include: [
        {
          model: Tag
        },
        {
          model: User,
          as: 'author'
        }
      ]
    });

    if (page === null) {
      res.sendStatus(404);
    } else {
      res.send(editPage(page, page.author, page.tags));
    }
  } catch (error) {
    next(error);
  }
});

// GET /wiki/:slug/similar
router.get('/:slug/similar', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      },
      include: [{ model: Tag }]
    });
    const tagNames = page.tags.map(tag => tag.name);
    const similars = await page.findSimilar(tagNames);
    res.send(main(similars));
  } catch (error) {
    next(error);
  }
})

module.exports = router;
