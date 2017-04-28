import React, { createClass, PropTypes } from 'react';
import Contact from '../jobsinformationpage/contacts/Contact';
import ScrollArea from 'react-scrollbar';

const ContactList = createClass({
    displayName: 'ContactList',

    propTypes: {
      contacts: PropTypes.array.isRequired
    },

    render() {
      const {
        contacts
      } = this.props;

      return (
        <div>
          { contacts.map((contact, index) =>
            <Contact
              key={index}
              {...contact}
            />
          )}
        </div>
      );
    }
});

export default ContactList;
