import React, { createClass, PropTypes } from 'react';
import ContactForm from '../application-forms/ContactForm';

const AddContactModal = ({ userId = null, addContact, hideModal }) => (
  <div>
    <ContactForm addContact={addContact} hideModal={hideModal} />
  </div>
);

export default AddContactModal;
