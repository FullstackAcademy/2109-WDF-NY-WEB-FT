const express = require('express');
const router = express.Router();
const todos = require('../models/express-models/todos');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.

router.get('/', (req, res, next) => {
  try {
    res.json(todos.listPeople());
  } catch (err) {
    next(err);
  }
});

router.get('/:name/tasks', (req, res, next) => {
  try {
    let userTodos = todos.list(req.params.name);

    if (!userTodos) {
      let err = new Error();
      err.status = 404;
      throw err;
    }

    if (req.query.status === 'complete') {
      let completedTodos = userTodos.filter((todo) => {
        return todo.complete;
      });
      res.json(completedTodos);
    } else if (req.query.status === 'active') {
      let openTodos = userTodos.filter((todo) => {
        return !todo.complete;
      });
      res.json(openTodos);
    } else {
      res.json(userTodos);
    }
  } catch (err) {
    next(err);
  }
});

router.post('/:name/tasks', (req, res, next) => {
  try {
    const addedTodo = todos.add(req.params.name, req.body);
    if (!req.body.content) {
      let err = new Error();
      err.status = 400;
      throw err;
    }
    res.status(201).json(addedTodo);
  } catch (err) {
    next(err);
  }
});

router.put('/:name/tasks/:idx', (req, res, next) => {
  try {
    todos.complete(req.params.name, req.params.idx);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.delete('/:name/tasks/:idx', (req, res, next) => {
  try {
    todos.remove(req.params.name, req.params.idx);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
