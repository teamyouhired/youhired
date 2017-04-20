import React from 'react';
import JobOfferForm from '../application-forms/JobOfferForm';

const AddJobOfferModal = ({ userId = null, addJobOffer, hideModal, applicationId }) => (
  <div>
    <JobOfferForm addJobOffer={addJobOffer} hideModal={hideModal} applicationId={applicationId} />
  </div>
);

export default AddJobOfferModal;
