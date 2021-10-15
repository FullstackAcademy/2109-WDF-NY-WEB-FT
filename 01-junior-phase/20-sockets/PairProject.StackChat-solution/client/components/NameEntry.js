import React from 'react'
import { connect } from 'react-redux'
import { userSet } from '../store'

export class NameEntry extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { value: name } = event.target
        this.props.userSet(name)
    }

    render() {
        return (
            <React.Fragment>
                <label htmlFor="name">Your name:</label>
                <input
                    name="name"
                    onChange={this.handleChange}
                    value={this.props.userName}
                />
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        userName: state.user,
    }),
    dispatch => ({
        userSet: nameStr => dispatch(userSet(nameStr)),
    })
)(NameEntry)
