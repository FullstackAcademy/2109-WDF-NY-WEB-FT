/* eslint-env mocha */
const {expect} = require('chai');
const BinarySearchTree = require('../src/bst');

// ## Binary Search Trees
// Trees are powerful data structures which solve myriad computer science problems. A *Binary Tree* is one for which every node has up to two children, a `left` and/or `right` child (or `lesser`/`greater` if you prefer). It is a *Search* tree if all nodes respect an *order*: all values less than a given node value are in its left subtree, and all values greater or equal to a given node value are stored in its right subtree. Trees are very recursive structures; for a given root node, the left child node is the root of a subtree and the right child node is the root of a subtree.

// ## Searching
// The excellent quality of BSTs is how quickly they can insert or find a particular value. For example, to get the minimum value in a BST, you have only to keep taking the left path downwards. For every node you jump, you are on average throwing away half of the remaining nodes in your search! This means that for a (balanced) tree of *n* nodes, you will find the minimum in an average of log2(n) moves. Log2(n) grows very very slowly with respect to n:

// ---
//
// Number of nodes *n* in the tree | log2(n) (average number of moves to find minimum node)
// --   |--
// 1    | 0
// 8    | 3
// 64   | 6
// 512  | 9
// 4096 | 12
//
// ---

// For a tree of over 4000 nodes, we will find the minimum node in about 12 jumps. That's way better than an unsorted array or linked list, for which we'd have to check all 4096 values to find out which is the minimum. Unfortunately, this is the ideal case, and depends on the subtrees all having roughly equal numbers of left and right descendants ("balanced") — in the worst case, a "degenerate" tree is just a linked list.

describe('BinarySearchTree', () => {
  let tree
  let testArr
  const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]

  // Before each spec, create a new BST with 20 at the root
  beforeEach(() => {
    tree = new BinarySearchTree(20)
    testArr = []
  })

  it('should take a value argument in the constructor, define `left` and `right to be null`, and include a `magnitude` to represent the tree size', () => {
    expect(tree.value).to.equal(20)
    expect(tree.left).to.equal(null)
    expect(tree.right).to.equal(null)
    expect(tree.magnitude).to.equal(1);
  })

  it('has methods named `insert`, `size`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`', () => {
    expect(typeof tree.insert).to.equal('function')
    expect(typeof tree.size).to.equal('function')
    expect(typeof tree.contains).to.equal('function')
    expect(typeof tree.depthFirstForEach).to.equal('function')
    expect(typeof tree.breadthFirstForEach).to.equal('function')
  })

  describe('`insert` method', () => {
    it('makes nodes on the correct branches, without overwriting existing nodes', () => {
      tree.insert(12)
      tree.insert(22)
      expect(tree.value).to.equal(20)
      expect(tree.left.value).to.equal(12)
      expect(tree.right.value).to.equal(22)
    })

    it('sorts values when adding', () => {
      // see the `beforeEach` above to see what is in `valuesToInsert`
      valuesToInsert.forEach(val => tree.insert(val))
      expect(tree.value).to.equal(20)
      expect(tree.left.value).to.equal(15)
      expect(tree.right.value).to.equal(25)
      expect(tree.left.left.value).to.equal(5)
      expect(tree.left.left.right.left.left.left.value).to.equal(11)
      expect(tree.right.right.right.left.left.right.left.right.value).to.equal(34)
    })
  })

  describe('`size` method', () => {
    it('reports the current size of the tree', () => {
      expect(tree.size()).to.equal(1)
      tree.insert(12)
      expect(tree.size()).to.equal(2)
      valuesToInsert.forEach(val => tree.insert(val))
      expect(tree.size()).to.equal(21)
    })
  })

  describe('`contains` method', () => {
    it('returns true if passed a value that exists in the tree', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      valuesToInsert.forEach((value) => {
        expect(tree.contains(value)).to.equal(true)
      })
    })

    it('returns false if passed a value that exists in the tree', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })

      const valuesNotInserted = [6, 23, 37, 51]
      valuesNotInserted.forEach((value) => {
        expect(tree.contains(value)).to.equal(false)
      })
    })
  })

  // ## Tree Traversal

  // A classic problem for trees is how to *traverse* them — i.e., visit and process every node. There are four flavors of tree traversal:

  // - **Breadth-first**: start at level 0, then go through all nodes at level 1, then all nodes at level 2, etc. This is meaningful when tree level actually has some meaning; for example, a hierarchical org chart. It is less useful for a BST, where levels don't usually have intrinsic meaning.
  // - **Depth-first**: go down paths to certain stopping points before moving on to the next branch. There are three types:
  //     - **pre-order**: process the current node value, then go down the left branch, then the right branch. This processes parents before leaves, so can be used to copy a tree.
  //     - **in-order**: process all the left children (lesser values), then this node's value, then the right children (greater values). This is the most useful for a BST as it respects the intrinsic ordering of the tree; values are processed from smallest to greatest.
  //     - **post-order**: process all the left children, then right children, then this node's value. This processes leaves before parents, so can be used in languages with explicit memory management to delete nodes in a safe way.

  describe('`depthFirstForEach` method', () => {
    // `depthFirstForEach` takes 2 parameters:
    //    1. a function that will be run on each node of the traversal
    //    2. the traversal type as a string ("pre-order", "in-order", or "post-order"). If no traversal type is provided, the default will be "in-order"

    // ### Depth-First Search: "In-Order" traversal
    // The one obvious advantage of "in-order" traversal is that values are processed respecting their comparative order
    it('runs a depth-first "in-order" traversal when run with no option or "in-order" option', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      // Note: no argument is passed in for the second parameter. This means that "in-order" should be our default.
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      })
      expect(testArr).to.deep.equal([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ])
      testArr = []
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      }, 'in-order')
      expect(testArr).to.deep.equal([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ])
    })

    // ### Depth-First Search: "Pre-Order" traversal
    // One use case for this kind of traversal would be copying a tree (processes roots first).
    it('runs a depth-first "pre-order" traversal when run with "pre-order" option', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      }, 'pre-order')
      expect(testArr).to.deep.equal([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34])
    })

    // ### Depth-First Search: "Post-Order" traversal
    // One use case would be deleting a tree. Because this kind of traversal processes the leaves first, it would allow us to delete or free the memory used by the leaves before deleting the parent. If we deleted the parent first, we would be unable to "get to" the leaves and delete them! This is called a "memory leak".
    it('runs a depth-first "post-order" traversal when run with "post-order" option', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      tree.depthFirstForEach((val) => {
        testArr.push(val)
      }, 'post-order')
      expect(testArr).to.deep.equal([1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20])
    })
  })

  describe('`breadthFirstForEach` method', () => {
    // `breadthFirstForEach` takes 1 parameter:
    //    1. a function that will be run on each node of the traversal

    // ### Breadth-First Search
    // BFS is helpful when tree levels have meaning (Ex. an organization chart, family tree, or even the DOM tree)
    it('runs a breadth-first traversal', () => {
      valuesToInsert.forEach((value) => {
        tree.insert(value)
      })
      const depth = []
      tree.breadthFirstForEach((val) => {
        depth.push(val)
      })
      expect(depth).to.deep.equal([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34])
    })
  })
})
