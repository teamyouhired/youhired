import React, { createClass, PropTypes } from 'react';
import AddJob from '../dashboard/jobs/AddJob';

const AddJobModal = ({ userId = null, addJob, hideModal, addJobDescription }) => (
  <div>
    <AddJob addJob={addJob} addJobDescription={addJobDescription} hideModal={hideModal} />
  </div>
);

export default AddJobModal;
