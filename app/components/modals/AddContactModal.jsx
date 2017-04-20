import React, { createClass, PropTypes } from 'react';
import ContactForm from '../application-forms/ContactForm';

const AddContactModal = ({ userId = null, addContact, hideModal, applicationId }) => (
  <div>
    <ContactForm applicationId={applicationId} addContact={addContact} hideModal={hideModal} />
  </div>
);

export default AddContactModal;
