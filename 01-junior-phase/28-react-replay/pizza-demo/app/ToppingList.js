import React from 'react';
import Topping from './Topping.js'

const pizzaToppings = ['pepperoni', 'basil', 'pineapple', 'mushrooms']
class ToppingList extends React.Component {
  constructor() {
    console.log('In constructor')
    super();
    // Initial State
    this.state = {
      selectedTopping: 'cheese',
    };
    this.updateSelectedTopping = this.updateSelectedTopping.bind(this)
  }

  updateSelectedTopping(newTopping) {
    console.log('update selected topping')
    this.setState({
      selectedTopping: newTopping
    })
  }
  // The render function is called everytime props OR state changes.
  render() {
    console.log('Rendering')
    return (
      <div>
        <h1>Your favorite pizza topping is {this.state.selectedTopping}</h1>
        <p>Toppings will go here!</p>
        <ul>
          {pizzaToppings.map(topping => {
            return <Topping key={topping} toppingName={topping} updateSelectedTopping = {this.updateSelectedTopping} />
          })}
          {/* <Topping toppingName = 'cheese' updateSelectedTopping={this.updateSelectedTopping}/>
          <Topping toppingName = 'pepperoni' updateSelectedTopping={this.updateSelectedTopping}/>
          <Topping toppingName = 'basil' updateSelectedTopping={this.updateSelectedTopping}/>
          <Topping toppingName = 'pineapple' updateSelectedTopping={this.updateSelectedTopping}/> */}
        </ul>
      </div>
    );
  }
}

export default ToppingList;
