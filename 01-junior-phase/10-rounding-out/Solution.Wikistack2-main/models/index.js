const Sequelize = require("sequelize");
const {Op} = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    //since we are searching, editing, deleting by slug, these need to be unique
    unique: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("open", "closed")
  }
});

Page.beforeValidate((page) => {
  /*
   * Generate slug
   */
  if (!page.slug) {
    page.slug = page.title.replace(/\s/g, "_").replace(/\W/g, "").toLowerCase();
  }
});

Page.findByTag = function(search) {
  return Page.findAll({
    include: {
      model: Tag,
      where: {
        name: {
          [Sequelize.Op.substring]: search
        }
      }
    }
  })
}

Page.prototype.findSimilar = function(tags) {
  return Page.findAll({
    where: {
      id: {
        [Sequelize.Op.ne]: this.id
      }
    },
    include: {
      model: Tag,
      where: {
        name: {
          [Sequelize.Op.in]: tags
        }
      }
    }
  });
}

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  }
});

const Tag = db.define("tag", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//This adds methods to 'Page', such as '.setAuthor'. It also creates a foreign key attribute on the Page table pointing ot the User table
Page.belongsTo(User, { as: "author" });
User.hasMany(Page, {foreignKey: 'authorId'});

Page.belongsToMany(Tag, {through: 'page_tags'});
Tag.belongsToMany(Page, {through: 'page_tags'});

module.exports = {
  db,
  Page,
  User,
  Tag
};
