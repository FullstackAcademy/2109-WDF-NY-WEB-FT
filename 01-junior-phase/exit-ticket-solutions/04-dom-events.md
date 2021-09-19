# Day 04: DOM Events

**You should be able to:**
- Set up event listeners to handle DOM events
- Explain the concepts of event delegation, event bubbling, and event delegation
- Be able to stop an event from bubbling


## In JavaScript, what can you attach to your elements to deal with events?

- [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  ```js
  target.addEventListener(type, listener [, options]);
  target.addEventListener(type, listener [, useCapture]);
  ```


## What are the three phases of event propagation?

1. Capture
2. Target
3. Bubbling

**Reference:**
- [An Introduction to DOM Events](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/#event-phases)


## What is the main purpose of event delegation?

- To write an event listener once on a parent node and have it propagate through all the elements between the parent and the target. Allows a common ancestor do work that would have been otherwise repetitive over many different children.


## How do you stop an event from bubbling?

- `.stopPropogation()`
  - This prevents any callbacks from being fired on any nodes further along the event chain, but it does not prevent any additional callbacks of the same event name from being fired on the current node.
