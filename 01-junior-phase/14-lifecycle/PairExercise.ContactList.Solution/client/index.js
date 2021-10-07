import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ContactList from './ContactList';
import SingleContact from './SingleContact';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      selectedContact: {},
    };
    this.selectContact = this.selectContact.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/contacts');
      const contacts = res.data;
      this.setState({ contacts });
    } catch (err) {
      console.log('There was a problem making contact!');
    }
  }

  async selectContact(contactId) {
    try {
      const res = await axios.get(`/api/contacts/${contactId}`);
      const selectedContact = res.data;
      this.setState({ selectedContact });
    } catch (err) {
      console.log('There was a problem making contact!');
    }
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {this.state.selectedContact.id ? (
            <SingleContact
              selectedContact={this.state.selectedContact}
              // 👇 This wasn't there originally
              selectContact={this.selectContact}
            />
          ) : (
            <ContactList
              contacts={this.state.contacts}
              selectContact={this.selectContact}
            />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
