import React from 'react';
import ReactDOM from 'react-dom';

// Stateless functional component; doesn't have a state, just takes a props argument
const Color = (props) => {
  const color = props.color
  const selectColor = props.selectColor
  const selectedColor = props.selectedColor
  const className = color + (color === selectedColor ? " selected" : "")
  console.log(`Rendering color ${color}`)
  return <div className={className} onClick = {() => selectColor(color)}/>;
};

class Picker extends React.Component {
  constructor() {
    console.log("In the constructor");
    super()
    this.state = {
      selectedColor: "red",
      colors: []
    }
    this.selectColor = this.selectColor.bind(this)
  }

  componentDidMount() {
    console.log('Component did mount')
    // Fake AJAX call
    this.setState({
      colors: ['red', 'blue', 'green']
    })
  }

  selectColor(colorName) {
    this.setState({
      selectedColor: colorName
    })
  }
  render() {
    console.log("Render")
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>{this.state.selectedColor}</div>
        </div>
        <div>
          <ul id="colors-list">
            { this.state.colors.map( (color) => {
              return  <Color key = {color}color= {color} selectColor = {this.selectColor} selectedColor = {this.state.selectedColor}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Picker />, document.getElementById('app'));
