import React from 'react'
import ReactDOM from 'react-dom'

class Magic8Ball extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ['it is certain', 'decidedly so', 'most likely', 'ask again later', 'cannot predict now', 'do not count on it', 'my sources say no', 'very doubtful'],
      currentMessage: 'it is certain'
    }
    this.setMessage = this.setMessage.bind(this);
  }
  setMessage() {
    console.log("clicked")
    const randomIndex = Math.floor(Math.random() * this.state.messages.length)
    this.setState({
      currentMessage: this.state.messages[randomIndex]
    })
  }
  render () {
    return (
      <div id='container'>
        <div id='circle'>
          <div>
            <h3>
            {this.state.currentMessage}
            </h3></div>
        </div>
        <div>
        <button onClick={this.setMessage}>Shake</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Magic8Ball />, document.getElementById('app'));
