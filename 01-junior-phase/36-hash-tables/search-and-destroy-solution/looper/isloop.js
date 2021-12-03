"use strict";

const LinkedList = require("./linkedlist");

//Complete this algo
const isLoop = (linkedlist) => {
  let slowReference = linkedlist.head;
  let fastReference = slowReference.next;

  while (slowReference !== fastReference) {
    if (
      slowReference === null ||
      fastReference === null ||
      fastReference.next === null
    ) {
      return false;
    }

    slowReference = slowReference.next;
    fastReference = fastReference.next.next;
  }

  return true;
};

const linkedList = new LinkedList();
linkedList.addToTail(15);
linkedList.addToTail(20);
linkedList.addToTail(-55);
linkedList.addToTail(9000);
linkedList.addToTail(-2);
linkedList.addToTail(-33);

// linkedList.getNthNode(4).next = linkedList.getNthNode(2);

console.log(isLoop(linkedList));

module.exports = isLoop;
