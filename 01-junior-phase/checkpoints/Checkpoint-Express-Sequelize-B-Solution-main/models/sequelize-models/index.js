const db = require('./database');
const Sequelize = require('sequelize');

// Make sure you have `postgres` running!

//---------VVVV---------  your code below  ---------VVV----------

const Task = db.define('Task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  due: Sequelize.DATE,
});

const Owner = db.define('Owner', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

Task.belongsTo(Owner);
Owner.hasMany(Task);

Task.clearCompleted = function () {
  return this.destroy({ where: { complete: true } });
};

Task.completeAll = function () {
  return this.update({ complete: true }, { where: { complete: false } });
};

Task.prototype.getTimeRemaining = function () {
  if (!this.due) return Infinity;
  else return this.due - new Date();
};

Task.prototype.isOverdue = function () {
  if (this.getTimeRemaining() < 0 && !this.complete) return true;
  else return false;
};

Task.prototype.assignOwner = function (owner) {
  return this.setOwner(owner);
};

Owner.getOwnersAndTasks = async function () {
  const owners = await Owner.findAll({
    include: [{ model: Task }],
  });
  return owners;
};

Owner.prototype.getIncompleteTasks = async function () {
  const tasks = await this.getTasks();
  const incompleteTasks = tasks.filter((task) => {
    return !task.complete;
  });
  return incompleteTasks;
};

Owner.beforeDestroy(function (owner) {
  if (owner.name === 'Grace Hopper') {
    throw new Error('Grace Hopper is unstoppable');
  }
});

//---------^^^---------  your code above  ---------^^^----------

module.exports = {
  Task,
  Owner,
};
