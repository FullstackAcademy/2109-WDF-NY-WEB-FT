const object1 = {
  name: "magic box 1",
  run: function () {
    console.log("running code in magic box 1...");
  },
};

const object2 = {
  name: "magic box 2",
  run: function () {
    console.log("running code in magic box 2...");
  },
};

console.log(object1, object2);

function runner(objects) {
  for (let i = 0; i < objects.length; ++i) {
    objects[i].run();
  }
}

runner([object1, object2]);
