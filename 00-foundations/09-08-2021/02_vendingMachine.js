class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }

  // this method reduces the stock by 1 then
  //  returns a statement that indicates which item in the inventory
  //  was reduced by along with other text that doesn't change
  sale(id) {
    this.inventory[id].stock--;
    return `1 ${this.inventory[id].name} - Thank you and come again!`;
  }

  // this method adds all the values of the inventory
  //  and returns them in a string
  stockTotal() {
    // loops thru all values and adds up ONLY the item's stock property
    let total = Object.values(this.inventory).reduce(
      (total, item) => total + item.stock,
      0
    );

    // the code above is equivalent to the for in loop code below
    // let total = 0;
    // for(let id in this.inventory) {
    //   total += this.inventory[id].stock;
    // }

    if (total > 0) {
      // if total is greater than 0 then return total
      return `${total} item(s)`;
    } else {
      // otherwise return out of stock
      return "Out of Stock";
    }
  }
}

const drinkVendingMachine = new VM({
  1: { name: "Sunny Delight", stock: 5 },
  2: { name: "Diet Soda", stock: 3 },
  3: { name: "Bottled Water", stock: 4 },
});

const snackVendingMachine = new VM({
  1: { name: "Pringles", stock: 0 },
  2: { name: "M&Ms", stock: 0 },
  3: { name: "KitKat", stock: 0 },
});

drinkVendingMachine.stockTotal();
