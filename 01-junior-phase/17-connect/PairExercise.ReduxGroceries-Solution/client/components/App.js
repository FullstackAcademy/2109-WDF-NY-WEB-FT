import React from "react";
import AddGrocery from "./AddGrocery";
import Footer from "./Footer";
import GroceryList from "./GroceryList";

const App = () => (
  <div className="app">
    <img src="groceries.png" alt="Groceries" width="500" />

    <div className="list">
      <AddGrocery />
      <GroceryList groceries={[]} />
      <Footer />
    </div>
  </div>
);

export default App;
