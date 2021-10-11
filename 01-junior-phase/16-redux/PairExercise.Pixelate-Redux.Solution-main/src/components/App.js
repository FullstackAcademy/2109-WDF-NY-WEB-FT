import React from 'react'
import store, { addRow, AVAILABLE_COLORS, pickColor } from '../store'
import Table from './Table.js'
import ColorSelector from './ColorSelector.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    this.handleAddRowClick = this.handleAddRowClick.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleAddRowClick() {
    store.dispatch(addRow())
  }

  handleColorChange(evt) {
    store.dispatch(pickColor(evt.target.value))
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={this.handleAddRowClick}>Add a row</button>
          <ColorSelector colors={AVAILABLE_COLORS}
                         selectedColor={this.state.selectedColor}
                         onChange={this.handleColorChange}
          />
        </div>
        <Table grid={this.state.grid} />
      </div>
    )
  }
}
