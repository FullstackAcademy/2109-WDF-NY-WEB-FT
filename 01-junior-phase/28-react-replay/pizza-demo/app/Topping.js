import React from 'react';

// functional component
const Topping = (props) => {
  console.log('Props: ', props)
  return (
    <li onClick = {() => props.updateSelectedTopping(props.toppingName)}>{props.toppingName}</li>
  )
}

export default Topping;
