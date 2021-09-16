const list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// here we define a
//  simple function to loop over an array and display information
function loopOverArray(array) {
  for (let i = 0; i < array.length; ++i) {
    if (i === 1 || i === 3) {
      console.log(array[i]);
    }
  }

  // for... of is a simpler way to loop than a plain for loop
  for (const element of array) {
    console.log(element);
  }
}

// here we execute this function
loopOverArray(list);
