// YOUR CODE HERE
class Node {
  constructor (value) {
    this.value = value
    this.previous = null
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  addToHead (value) {
    const newNode = new Node(value)
    const formerHead = this.head
    this.head = newNode
    if (formerHead) {
      formerHead.previous = newNode
      newNode.next = formerHead
    } else {
      this.tail = newNode
    }
  }

  addToTail (value) {
    const newNode = new Node(value)
    const formerTail = this.tail
    this.tail = newNode
    if (formerTail) {
      formerTail.next = newNode
      newNode.previous = formerTail
    } else {
      this.head = newNode
    }
  }

  removeHead () {
    const removedHead = this.head
    if (!removedHead) return null
    if (removedHead.next) {
      this.head = removedHead.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }
    return removedHead.value
  }

  removeTail () {
    const removedTail = this.tail
    if (!removedTail) return null
    if (removedTail.previous) {
      this.tail = removedTail.previous
      this.tail.next = null
    } else {
      this.head = null
      this.tail = null
    }
    return removedTail.value
  }

  search (comparator) {
    if (typeof comparator === 'string') {
      const comparatorString = comparator
      comparator = (elementValue) => comparatorString === elementValue
    }
    let currentNode = this.head
    while (currentNode !== null) {
      if (comparator(currentNode.value)) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }
}

module.exports = {
  Node,
  LinkedList
}
