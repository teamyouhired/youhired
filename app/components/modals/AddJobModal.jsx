import React, { createClass, PropTypes } from 'react';
import AddJob from '../dashboard/jobs/AddJob';

const AddJobModal = ({ userId = null, addJob, hideModal }) => (
  <div>
    <AddJob addJob={addJob} hideModal={hideModal} />
  </div>
);

export default AddJobModal;
