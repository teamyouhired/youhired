import React, { createClass } from 'react';
import Contact from './Contact';

const ApplicationContacts = createClass({
  render() {
    return (
      <div>
        <h2>Application contact information goes here</h2>
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
