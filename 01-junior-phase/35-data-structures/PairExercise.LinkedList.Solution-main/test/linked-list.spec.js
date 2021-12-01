/* eslint-env mocha */
const {expect} = require('chai');
const {LinkedList, Node} = require('../src/linked-list');

// ## Linked Lists

// A **Linked List** is a data structure, meaning a concrete programmatic way of managing information in memory. They can be used to implement a number of ADTs, including Queues, Stacks, Lists, and others.

// Linked Lists are collections of *nodes* — wrapper structures which encapsulate a `value` and one or more *pointers* (references) to other nodes. The Linked List instance typically only has a reference to a so-called *handle* node, e.g. the `head` (first node) — it has no direct knowledge of other nodes in the list. However, the handle then points to a `next` node, which itself points to another `next` node, and so on and so forth. A list ends when a node's `next` pointer is `null` or `undefined`. The act of starting from a handle and visiting nodes in sequence is known as "traversing" a linked list.

// Below is a description of a singly-linked list with a `head` handle and three nodes total:

// ```
// Head reference -> Node A
// Node A has value 56 and pointer next -> Node B
// Node B has value 33 and pointer next -> Node C
// Node C has value 12 and pointer next -> null
// ```

// ```
// HEAD  ────┐                                 ┌──── TAIL
//           │                                 │
//           │                                 │
//           ▼                                 ▼
//      ┌────┬────┐      ┌────┬────┐      ┌────┬────┐
//      │    │    │      │    │    │      │    │    │
//      │ 56 │  ──┼────> │ 33 │  ──┼────> │ 12 │  ──┼───> NULL
//      │    │    │      │    │    │      │    │    │
//      └────┴────┘      └────┴────┘      └────┴────┘
// ```

// Linked Lists can come in various flavors. For example, in doubly-linked lists, each node might point both to the `next` node and to the `previous` node as well. In some variations, the parent Linked List instance might maintain both `head` *and* `tail` references. For this workshop, follow the (opinionated) spec to implement a doubly-linked list with both handles.

// *Side note: in JavaScript, an object is maintained in memory so long as there exist references to it. Once an object has no references pointing to it, automatic garbage collection will eventually free that memory so that the program can use it for other variables (it does not matter if the object itself has references to other variables). So the only real way to "delete" an object in JS to remove all references to it.*

describe('A linked list implementation', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  describe('`Node` class', () => {
    it('should take a value argument in the constructor and define next and previous to be null by default', () => {
      const node = new Node('test')
      expect(node.value).to.equal('test')
      expect(node.next).to.equal(null)
      expect(node.previous).to.equal(null)
    })
  })

  describe('`LinkedList` class', () => {
    it('should take no arguments in the constructor and define head and tail to be null', () => {
      expect(linkedList.head).to.equal(null)
      expect(linkedList.tail).to.equal(null)
    })

    it('has methods `addToTail`, `addToHead`, `removeHead`, `removeTail`, and `search`', () => {
      expect(typeof linkedList.addToTail).to.equal('function')
      expect(typeof linkedList.addToHead).to.equal('function')
      expect(typeof linkedList.removeHead).to.equal('function')
      expect(typeof linkedList.removeTail).to.equal('function')
      expect(typeof linkedList.search).to.equal('function')
    })

    describe('`addToTail` method', () => {
      it('should take a value as a parameter', () => {
        // the length of a function returns how many parameters it has
        expect(linkedList.addToTail.length).to.equal(1)
      })

      it('should use `Node` class to add nodes', () => {
        linkedList.addToTail('first')
        expect(linkedList.tail instanceof Node).to.equal(true)
      })

      it('should be able to add to tail without removing or overwriting existing nodes', () => {
        linkedList.addToTail('first')
        expect(linkedList.tail.value).to.equal('first')

        linkedList.addToTail('second')
        expect(linkedList.tail.value).to.equal('second')
        expect(linkedList.tail.previous.value).to.equal('first')
      })

      it('if the linked list consists of a single node after adding to tail, that node should be both the head and the tail', () => {
        linkedList.addToTail('only')
        expect(linkedList.head.value).to.equal('only')
        expect(linkedList.head).to.equal(linkedList.tail)
        expect(linkedList.head.next).to.equal(null)
        expect(linkedList.head.previous).to.equal(null)
      })
    })

    describe('`addToHead` method', () => {
      it('should take a value as a parameter', () => {
        // the length of a function returns how many parameters it has
        expect(linkedList.addToHead.length).to.equal(1)
      })

      it('should use `Node` class to add nodes', () => {
        linkedList.addToHead('first')
        expect(linkedList.head instanceof Node).to.equal(true)
      })

      it('should be able to add to head without removing or overwriting existing nodes', () => {
        linkedList.addToHead('first')
        expect(linkedList.head.value).to.equal('first')

        linkedList.addToHead('zeroth')
        expect(linkedList.head.value).to.equal('zeroth')
        expect(linkedList.head.next.value).to.equal('first')
      })

      it('if the linked list consists of a single node after adding to head, that node should be both the head and the tail', () => {
        linkedList.addToHead('only')
        expect(linkedList.head.value).to.equal('only')
        expect(linkedList.head).to.equal(linkedList.tail)
        expect(linkedList.head.next).to.equal(null)
        expect(linkedList.head.previous).to.equal(null)
      })
    })

    describe('`removeHead` method', () => {
      it('should return the `value` of the removed head node', () => {
        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')
        expect(linkedList.removeHead()).to.equal('first')
        expect(linkedList.removeHead()).to.equal('second')
        expect(linkedList.removeHead()).to.equal('third')
      })

      it('should reassign the `head` after the current head node is removed', () => {
        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')

        linkedList.removeHead() // remove 'first'
        expect(linkedList.head.value).to.equal('second')

        linkedList.removeHead() // remove 'second'
        expect(linkedList.head.value).to.equal('third')
      })

      it('should make sure the `previous` of any newly appointed head is null', () => {
        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')

        linkedList.removeHead()
        expect(linkedList.head.value).to.equal('second')
        expect(linkedList.head.previous).to.equal(null)

        linkedList.removeHead()
        expect(linkedList.head.value).to.equal('third')
        expect(linkedList.head.previous).to.equal(null)
      })

      it('returns null if there is no head to remove (ie: the list is empty, or all nodes have been removed)', () => {
        expect(linkedList.removeHead()).to.equal(null)

        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')
        linkedList.removeHead()
        linkedList.removeHead()
        linkedList.removeHead()
        expect(linkedList.removeHead()).to.equal(null)
      })

      it('should reset head and tail to null when last node is removed', () => {
        linkedList.addToTail('first')
        linkedList.removeHead()
        expect(linkedList.head).to.equal(null)
        expect(linkedList.tail).to.equal(null)
      })
    })

    describe('`removeTail` method', () => {
      it('should return the `value` of the removed tail node', () => {
        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')
        expect(linkedList.removeTail()).to.equal('third')
        expect(linkedList.removeTail()).to.equal('second')
        expect(linkedList.removeTail()).to.equal('first')
      })

      it('should reassign the `tail` after the current tail node is removed', () => {
        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')

        linkedList.removeTail() // remove 'third'
        expect(linkedList.tail.value).to.equal('second')

        linkedList.removeTail() // remove 'second'
        expect(linkedList.tail.value).to.equal('first')
      })

      it('should make sure the `next` of any newly appointed tail is null', () => {
        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')

        linkedList.removeTail()
        expect(linkedList.tail.value).to.equal('second')
        expect(linkedList.tail.next).to.equal(null)

        linkedList.removeTail()
        expect(linkedList.tail.value).to.equal('first')
        expect(linkedList.tail.next).to.equal(null)
      })

      it('returns null if there is no tail to remove (ie: the list is empty, or all nodes have been removed)', () => {
        expect(linkedList.removeTail()).to.equal(null)

        linkedList.addToTail('first')
        linkedList.addToTail('second')
        linkedList.addToTail('third')
        linkedList.removeTail()
        linkedList.removeTail()
        linkedList.removeTail()
        expect(linkedList.removeTail()).to.equal(null)
      })
    })

    // The `search` method takes a "comparator" as a parameter, traverses the linked list, and returns the `value` of the matching node if found, or `null` if not found.
    // The "comparator" could be a string or a function.
    // When the comparator is a string, the `search` method will compare each node's `value` with the comparator string.
    // When the comparator is a function, that function will accept a value as a parameter and return a boolean indicating if the value is a match. The `search` method will use the comparator function on each node's `value` to determine if it is a match.
    describe('`search` method', () => {
      it('should return the correct values when searching for a string or number', () => {
        linkedList.addToTail('one')
        linkedList.addToTail('two')
        linkedList.addToTail('three')
        expect(linkedList.search('one')).to.equal('one')
        expect(linkedList.search('sdd')).to.equal(null)
        expect(linkedList.search('three')).to.equal('three')
      })

      it('should be able to take functions as search inputs', () => {
        linkedList.addToTail('one')
        linkedList.addToTail('two')
        const foundNode = linkedList.search((nodeValue) => {
          return nodeValue === 'two'
        })
        expect(foundNode).to.equal('two')
      })

      // This spec demonstrates the utility of the previous spec.
      // If you are passing the last one correctly, this one should already pass!
      it('should therefore be able to store and search for objects, not just strings', () => {
        function UserNode (name, email, city) {
          this.name = name
          this.email = email
          this.city = city
        }

        linkedList.addToHead(new UserNode('Nimit', 'nimit@fs.com', 'New York'))
        linkedList.addToHead(new UserNode('David', 'david@fs.com', 'New York'))
        linkedList.addToHead(new UserNode('Paul', 'paul@yc.com', 'Mountain View'))

        const foundNode1 = linkedList.search((userNode) => {
          return userNode.name === 'Nimit'
        })
        expect(foundNode1.email).to.equal('nimit@fs.com')

        const foundNode2 = linkedList.search((userNode) => {
          return userNode.email === 'david@fs.com'
        })
        expect(foundNode2.city).to.equal('New York')

        const foundNode3 = linkedList.search((userNode) => {
          return userNode.city === 'Mountain View'
        })
        expect(foundNode3.name).to.equal('Paul')
      })
    })
  })
})
