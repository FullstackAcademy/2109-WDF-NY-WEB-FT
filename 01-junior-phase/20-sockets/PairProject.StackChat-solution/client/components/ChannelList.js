import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1'
const GENERAL_CHANNEL = '/channels/2'
const DOGS_CHANNEL = '/channels/3'
const LUNCH_CHANNEL = '/channels/4'

export class ChannelList extends Component {
    render() {
        const filterMessageChannel = id =>
            this.props.messages.filter(m => m.channelId === id)
        const randomMessages = filterMessageChannel(1)
        const generalMessages = filterMessageChannel(2)
        const dogsMessages = filterMessageChannel(3)
        const lunchMessages = filterMessageChannel(4)

        return (
            <ul>
                <li>
                    <NavLink to={RANDOM_CHANNEL} activeClassName="active">
                        <span># really_random</span>
                        <span className="badge">{ randomMessages.length }</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={GENERAL_CHANNEL} activeClassName="active">
                        <span># generally_speaking</span>
                        <span className="badge">{ generalMessages.length }</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={DOGS_CHANNEL} activeClassName="active">
                        <span># dogs_of_fullstack</span>
                        <span className="badge">{ dogsMessages.length }</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={LUNCH_CHANNEL} activeClassName="active">
                        <span># lunch_planning</span>
                        <span className="badge">{ lunchMessages.length }</span>
                    </NavLink>
                </li>
            </ul>
        )
    }
}

const mapState = state => ({
    messages: state.messages,
})

export default connect(mapState)(ChannelList)
