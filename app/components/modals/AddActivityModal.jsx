import React from 'react';
import ActivityForm from '../application-forms/ActivityForm';

const AddActivityModal = ({ userId = null, addActivity, hideModal }) => (
  <div>
    <ActivityForm addActivity={addActivity} hideModal={hideModal} />
  </div>
);

export default AddActivityModal;
