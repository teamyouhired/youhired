import React, { createClass, PropTypes } from 'react';
import Contact from './Contact';


const ApplicationContacts = createClass({
  displayName: 'ApplicationContacts',

  propTypes: {
    addContact: PropTypes.func.isRequired
  },

  onAddContact(event) {
    console.log(this.props)
    this.props.displayContactForm({
        formType: 'DISPLAY_CONTACT_FORM',
        modalProps: {
          addContact: this.props.addContact,
          hideModal: this.props.hideModal
        }
      });
  },

  render() {
    return (

      <div>
        {this.props.contacts.map((contact, index) =>
          <Contact
            key={index}
            {...contact}
          />
        )}

        <div className="app-contacts">
          <div className="contact-text" onClick={this.onAddContact}>
            <p className="large-plus-sign text-center">+</p>
          </div>
        </div>

      </div>

    );
  }
});

export default ApplicationContacts;
