class BinarySearchTree {
  constructor (val) {
    this.value = val
    this.left = null
    this.right = null
    this.magnitude = 1
  }

  // // "simple" approach
  // insert (val) {
  //   this.magnitude++
  //   if (val < this.value) { // left case
  //     if (this.left) {
  //       this.left.insert(val)
  //     } else {
  //       this.left = new BinarySearchTree(val)
  //     }
  //   } else { // right case
  //     if (this.right) {
  //       this.right.insert(val)
  //     } else {
  //       this.right = new BinarySearchTree(val)
  //     }
  //   }
  // }

  // concise / review video approach
  insert (val) {
    const direction = val < this.value ? 'left' : 'right'
    if (this[direction]) this[direction].insert(val)
    else this[direction] = new BinarySearchTree(val)
    this.magnitude++
  }

  // // simple approach
  // contains (val) {
  //   if (this.value === val) return true
  //   if (val < this.value) { // left case
  //     if (this.left) {
  //       return this.left.contains(val)
  //     } else {
  //       return false
  //     }
  //   } else { // right case
  //     if (this.right) {
  //       return this.right.contains(val)
  //     } else {
  //       return false
  //     }
  //   }
  // }

  // concise / review video approach
  contains (val) {
    if (this.value === val) return true
    const direction = val < this.value ? 'left' : 'right'
    if (this[direction]) return this[direction].contains(val)
    else return false
  }

  // // simple approach
  // depthFirstForEach (fn, opt) {
  //   if (!opt) opt = 'in-order'
  //   if (opt === 'pre-order') {
  //     fn(this.value)
  //     if (this.left) this.left.depthFirstForEach(fn, opt)
  //     if (this.right) this.right.depthFirstForEach(fn, opt)
  //   } else if (opt === 'in-order') {
  //     if (this.left) this.left.depthFirstForEach(fn, opt)
  //     fn(this.value)
  //     if (this.right) this.right.depthFirstForEach(fn, opt)
  //   } else if (opt === 'post-order') {
  //     if (this.left) this.left.depthFirstForEach(fn, opt)
  //     if (this.right) this.right.depthFirstForEach(fn, opt)
  //     fn(this.value)
  //   }
  // }

  // concise / review video approach
  // es6 Default Parameter - initializing with default values if no value passed in
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
  depthFirstForEach (fn, opt = 'in-order') {
    if (opt === 'pre-order') fn(this.value)
    if (this.left) this.left.depthFirstForEach(fn, opt)
    if (opt === 'in-order') fn(this.value)
    if (this.right) this.right.depthFirstForEach(fn, opt)
    if (opt === 'post-order') fn(this.value)
  }

  breadthFirstForEach (fn) {
    const queue = [this]
    while (queue.length) {
      const current = queue.shift()
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
      fn(current.value)
    }
  }

  size () {
    return this.magnitude
  }
}

module.exports = BinarySearchTree
