/*
  Joins all elements within inputArr into a string separated by the delimeter
  This essentially does the same thing is Array.prototype.join()
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
const join = (inputArr, delimiter) => {
  let finalString = "";
  for (let i = 0; i < inputArr.length; i++) {
    finalString += inputArr[i];
    if (typeof delimiter !== "undefined" && i < inputArr.length - 1) {
      finalString += delimiter;
    }
  }
  return finalString;
};

// converts obj passed in into a string
//  with obj's properties and values written
//  out in sorted order with an & in between the key and value
const paramify = (obj) => {
  const params = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      params.push(`${prop}=${obj[prop]}`);
    }
  }
  // used the join function created earlier
  return join(params.sort(), "&");
};

// uses the bubble sort algorithm for sorting an array
//  of numbers
function sort(items) {
  let length = items.length;
  for (let i = length - 1; i >= 0; i--) {
    //Number of passes
    for (let j = length - i; j > 0; j--) {
      //Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        //Swap the numbers
        let tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
  return items;
}

// creates a grid if equal height and length
//  based on size
const gridGenerator = (size) => {
  let board = "";
  // i represents the row
  for (let i = 0; i < size; i++) {
    // j represents the column
    for (let j = 0; j < size; j++) {
      /* 
        Identify if the current column is
          should be a "#" or "-" based on its placement

        The output would be:
        -#-#-#
        #-#-#-
        -#-#-#
        
        For a size of 3 
      */
      if ((i + j) % 2 === 0) {
        board += "#";
      } else {
        board += "-";
      }
    }
    board += "\n";
  }
  return board;
};

// let's create an person with some information about them
const person = {
  name: "Orlando",
  age: 36,
};

// we can display our data down here :)
console.log(sort([-1000, 10, 100, -3, 90, -30]));
console.log(gridGenerator(20));
console.log(paramify(person));
