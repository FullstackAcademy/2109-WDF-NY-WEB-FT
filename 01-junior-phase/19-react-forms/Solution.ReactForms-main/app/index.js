import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (evt) {
    evt.preventDefault()
    window.alert(JSON.stringify(this.state))
    this.setState({
      username: '',
      password: ''
    })
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
      <div id='container'>
        <div id='navbar'>
          Form.js
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input value={this.state.username} type='text' name='username' onChange={this.handleChange} />
          <label htmlFor='password'>Password:</label>
          <input value={this.state.password} type='password' name='password' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
