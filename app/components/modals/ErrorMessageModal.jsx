import React from 'react';

const ErrorMessageModal = ({ message }) => (
  <div className="text-center error-message-modal">
    <h1>{`${message}`}</h1>
  </div>
);

export default ErrorMessageModal;
