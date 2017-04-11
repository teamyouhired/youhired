import React, { createClass } from 'react';
import Contact from './Contact';

const ApplicationContacts = createClass({
  render() {
    return (
      <div className='application-contacts'>
        {this.props.contacts.map((contact, index) =>
          <Contact
            key={index}
            {...contact}
          />
        )}
      </div>
    );
  }
});

export default ApplicationContacts;
