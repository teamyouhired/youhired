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
          <ScrollArea
            speed={0.8}
            className='job-list-scroll'
            horizontal={false}>
            { contacts.map((contact, index) =>
              <Contact
                key={index}
                {...contact}
              />
            )}
          </ScrollArea>
        </div>
      );
    }
});

export default ContactList;
