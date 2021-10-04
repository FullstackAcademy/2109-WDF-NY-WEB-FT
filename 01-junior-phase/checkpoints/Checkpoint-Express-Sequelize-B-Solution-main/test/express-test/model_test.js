/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;

const Todos = require('../../models/express-models/todos');
describe('Todo model', function () {
  // every test starts with a clean slate (see todos.js)
  beforeEach(function () {
    Todos.reset();
  });

  describe('`listPeople` and `add`', function () {
    it('initially returns an empty array', function () {
      expect(Todos.listPeople()).to.eql([]);
    });

    it('lists people after they have todos added', function () {
      Todos.add('zeke', { content: 'clean room' });
      expect(Todos.listPeople()).to.eql(['zeke']);
    });

    it('handles multiple people with multiple todos', function () {
      Todos.add('zeke', { content: 'clean room' });
      Todos.add('zeke', { content: 'write mom' });
      expect(Todos.listPeople()).to.eql(['zeke']);
      Todos.add('omri', { content: 'exercise' });
      expect(Todos.listPeople()).to.eql(['zeke', 'omri']);
    });
  });

  describe('`add` and `list`', function () {
    it('remembers who does what', function () {
      Todos.add('zeke', { content: 'clean bath room' });
      expect(Todos.list('zeke')).to.have.length(1);
      Todos.add('omri', { content: 'clean living room' });
      expect(Todos.list('omri')).to.have.length(1);
      Todos.add('omri', { content: 'clean garage' });
      expect(Todos.list('omri')).to.have.length(2);
    });
  });

  describe('`complete`', function () {
    it('is a boolean set to `false` for any new tasks', function () {
      Todos.add('zeke', { content: 'clean self' });
      expect(Todos.list('zeke')[0].complete).to.be.false;
    });

    it('respects a pre-existing completion status', function () {
      Todos.add('zeke', { content: 'clean self', complete: true });
      Todos.add('zeke', { content: 'clean the world', complete: false });
      expect(Todos.list('zeke')[0].complete).to.be.true;
      expect(Todos.list('zeke')[1].complete).to.be.false;
    });

    it("is a method that sets a specified task's `complete` property to true", function () {
      Todos.add('zeke', { content: 'go to store' });
      Todos.add('zeke', { content: 'go to library' });
      Todos.add('zeke', { content: 'go to park' });
      Todos.complete('zeke', 1);
      expect(Todos.list('zeke')[0].complete).to.be.false;
      expect(Todos.list('zeke')[1].complete).to.be.true;
      expect(Todos.list('zeke')[2].complete).to.be.false;
    });
  });

  describe('`remove`', function () {
    it('removes a task, by index, for a given person', function () {
      // set up a bunch of tasks
      for (let i = 0; i < 10; i++) Todos.add('zeke', { content: 'task ' + i });
      expect(Todos.list('zeke').length).to.equal(10);
      // use the method being tested
      Todos.remove('zeke', 5);
      // check the new state
      expect(Todos.list('zeke').length).to.equal(9);
      expect(Todos.list('zeke')[4].content).to.equal('task 4'); // nothing below 5 affected
      expect(Todos.list('zeke')[5].content).to.equal('task 6'); // 5 was deleted
      expect(Todos.list('zeke')[6].content).to.equal('task 7'); // everything moved down
    });
  });
});
