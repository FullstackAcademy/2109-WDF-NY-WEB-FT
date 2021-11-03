import React from 'react';
import Topping from './Topping';

let pizzaToppings = ['pepperoni', 'mushroom']
class ToppingList extends React.Component {
  constructor() {
    super();
    // Initial State
    this.state = {
      selectedTopping: 'cheese'
    };
    this.updateSelectedTopping = this.updateSelectedTopping.bind(this);
  }

  updateSelectedTopping(newTopping) {
    this.setState({
      selectedTopping: newTopping
    })
  }
  // The render function is called everytime props OR state changes.
  render() {
    return (
      <div>
        <h1>Your favorite pizza topping is {this.state.selectedTopping}</h1>
        <p>Toppings will go here!</p>

        {/* Passing props into <Topping> component */}
        {/* You can pass in as many as you want */}
        {/* automatically turns these attributes into an object called props */}

        {/* Option 1: list each component */}
        <Topping toppingName='cheese' updateSelectedTopping = {this.updateSelectedTopping}/>

        {/* Option 2: map across an array */}
        {pizzaToppings.map(topping => {
          return <Topping toppingName={topping} updateSelectedTopping = {this.updateSelectedTopping}/>
        })}
      </div>
    );
  }
}

export default ToppingList;
