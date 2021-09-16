function shallowObjectAssign(target, ...sources) {
  for (let source of sources) {
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}

console.log(
  shallowObjectAssign({ d: 10 }, { a: 1, b: 2, c: 3 }, { t: 67, h: 90 })
);
