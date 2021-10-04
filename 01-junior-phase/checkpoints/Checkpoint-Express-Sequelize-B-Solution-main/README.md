# [Checkpoint - Express and Sequelize](https://github.com/FullstackAcademy/Checkpoint-Express-Sequelize-B)

Firstly, don't stress out that we will be using this test to judge you in any way except to understand how we can better help you.

Also, we ask that you don't help each other or cheat. Feel free to use any online resource but don't copy/paste answers to each other or if you find something similar online.

## Introduction Video (Watch This First)

[![Express-Sequelize: Getting Started](https://img.youtube.com/vi/KgniaenJsj0/0.jpg)](https://youtu.be/KgniaenJsj0)


## Resources

The following resources are allowed:

- Any notes you've taken so far.
- Any code you have in your previous projects.
- learn.fullstackacademy.com.
- All the slide decks that we've used in class.

## Things we're testing

- Express app architecture
- Express routing
- Sequelize model configuration

## Starting

1. Fork this repository to your own Github user account.
2. Clone this to your local machine.
3. `npm install`
4. Create `checkpoint-express-sequelize` database (need this only for the Sequelize portion of the checkpoint)
5. Test code (see below)

To run all the tests, run `npm test`. To run only _specific_ test suites, you can optionally run the following:

```bash
npm run express-test
npm run sequelize-test
```

To only run a specific `describe` or `it`, you can chain `.only`:

```js
it.only('does something', testFunc);
```

## Specs

Please make sure you complete specs located in the following files. Additionally, make sure to change an `xit` to an `it` to change any given spec from pending to active:

`tests/express-test/model_test.js`

`tests/express-test/route_test.js`

`tests/sequelize-test/model_test.js`

You should work on the Express tests before moving onto the Sequelize tests. Specifically for the Express tests, you will **need** to complete `tests/express-test/model_test.js` before moving onto `tests/express-test/route_test.js`. Otherwise, the tests will not work. If you get stuck on a spec, you may skip it and come back to it later. However, the tests MAY depend on each other.

You will only be working in the following files:

**Express:**

`models/express-models/todos.js`

`routes/index.js`

`app.js`

**Sequelize:**

`models/sequelize-models/index.js`

## Submitting

As you complete each answer (or make an update), please commit the changes to the git repository (`git commit` often as you make progress on the tests). To submit your answers:

1. Keep all specs active.
2. Push your repository back to your own personal fork.
3. Before the deadline, `git commit -m 'submission for deadline'`
4. `git push`
