import React, { Component } from 'react';
import { postMessage as postMessage } from '../store'
import { connect } from 'react-redux'

export class NewMessageEntry extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message: ''
    }
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    const message = this.state.message
    this.props.post({
      content: message,
      channelId: this.props.channelId
    })
  }

  render () {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            onChange={this.handleChange}
            placeholder="Say something nice..."
            value={this.state.message}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}

const mapDispatch = dispatch => ({
  post: message => dispatch(postMessage(message))
})

export default connect(null, mapDispatch)(NewMessageEntry)
