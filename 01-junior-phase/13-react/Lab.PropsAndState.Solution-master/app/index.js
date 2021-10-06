import React from 'react';
import ReactDOM from 'react-dom';

const Color = (props) => {
  const color = props.color;
  const selectColor = props.selectColor;
  const selectedColor = props.selectedColor;
  const className = props.color + (color === selectedColor ? ' selected' : '');

  return <div className={className} onClick={() => selectColor(color)} />;
};

class Picker extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: 'red',
    };
    this.selectColor = this.selectColor.bind(this);
  }

  selectColor(colorName) {
    this.setState({
      selectedColor: colorName,
    });
  }

  render() {
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>
            {this.state.selectedColor}
          </div>
        </div>
        <div id="colors-list">
          <Color
            color="red"
            selectColor={this.selectColor}
            selectedColor={this.state.selectedColor}
          />
          <Color
            color="blue"
            selectColor={this.selectColor}
            selectedColor={this.state.selectedColor}
          />
          <Color
            color="green"
            selectColor={this.selectColor}
            selectedColor={this.state.selectedColor}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);
