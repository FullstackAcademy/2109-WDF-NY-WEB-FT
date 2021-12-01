# Test-First Binary Search Tree

**Note: be sure to read this README.md thoroughly, as well as the comments in the test spec**

In this portion of the workshop, we are going to be writing the JavaScript implementation of a Binary Search Tree.

## Running

1. Run `npm install` to install dependencies
2. Run `npm test` to run the specs and watch for changes

### Binary Search Tree DS

When we implemented our Linked List, we had a central `LinkedList` object that had "handles" on the head and tail `Nodes`, which in turn "pointed" to the next and previous `Node` in the list.

Our Binary Search Tree, however, is a *recursive* data structure. This means that *every `BinarySearchTree` instance is itself a `BinarySearchTree`.* There is no "central" object with handles.

This means that many of your methods should employ recursive problem solving!

### Recursive Problem Solving

Any problem that can be solved iteratively (that is, using "for" or "while" loops) can also be solved recursively (and vice versa). However, this does not mean that the iterative solution for a given problem is as *easy* to implement as the recursive solution (and vice versa).

Because Binary Search Trees are a "recursive" data structure, it is *much* easier to implement their operations using recursion. While recursive code often looks simpler and easier to read than its iterative equivalent, it's often harder for beginners to visualize *why* it works, or to step through the logic.

To help you solve problems in a recursive manner, follow this methodology:

1. Identify the *simplest possible input* for the problem. For example, if the input to your function is a number, the simplest possible input might be `0`. If it's an array, it might be an empty array or an array with one element.

```javascript
function factorial (n) {
  // Our goal is to write a function that finds the factorial of a number 'n'
  // The factorial of a number is the product of all positive integers less than or
  // equal to n. For example, the factorial of 5 (in maths, notated 5!) is:

  // 5 * 4 * 3 * 2 * 1 === 120

  // Additionally, 0! is defined as 1

  // The "simplest input" to this function is 0 and/or 1
}
```

2. Solve the problem **specifically** for the "simplest possible input". This is known as the "base case".

```javascript
function factorial (n) {
  // We know that 1! and 0! are 1 - no calculation needed.
  // Therefore, we can simply return 1 in those cases
  if (n === 1 || n === 0) {
    return 1
  }
}
```

3. Solve the problem **specifically** for the "second simplest possible input", making sure to
  a. **invoke the function recursively with the simplest possible input**.
  b. **shrink the "problem space"** when we recurse

This is the key to the trick. Beginners to recursion often get caught up trying to solve the problem for large values, which makes it difficult to visualize. However, if you work **very concretely** with the second simplest possible input, it will reduce the mental overhead, and more than likely solving the problem this way will also solve the problem for **any** input.

```javascript
// The "second simplest possible input for factorial is...2!"
// Let's imagine that n is 2
function factorial (n) {
  if (n === 1 || n === 0) { // this will be false...
    return 1
  } else { // so we write an else statement
    // in this else statement, we know for sure that we must do two things:
    // a. invoke factorial again with the base case (factorial(1) or factorial(0))
    // b. get our input to factorial by "shrinking" the value of n (for example, by subtracting 1)

    // Now, let's return to our concrete example: n is 2
    // We know that 2! should be 2 * 1 (which is 2)
    // We could just return two, but we also know we must do those other two tasks above.
    // We know that we can get 1 by subtracting n - 1
    // And we can see that if we invoke factorial(n - 1), that will give us 1,
    // so instead of saying 2 * 1, we could say 2 * factorial(n - 1).
    return 2 * factorial(n - 1)
  }
}
```

4. Generalize anything concrete to be in terms of the input, and test with third simplest possible input and so on until satisifed.

```javascript
function factorial (n) {
  if (n === 1 || n === 0) {
    return 1
  } else {
    // Let's keep pretending that n is 2.
    // We were getting our answer by returning 2 * factorial(n - 1).
    // In the case where n is 2, we could then substitute the input n instead of the concrete value 2,
    // which gives us: n * factorial(n - 1).
    // This still solves the problem for 2, but we'll also discover that this
    // solves the problem for 3, 4, 5...and so on!
    return n * factorial(n - 1)
  }
}
```
