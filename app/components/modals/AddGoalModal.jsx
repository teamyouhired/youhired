import React from 'react';
import GoalForm from '../application-forms/GoalForm';

const AddGoalModal = ({ userId = null, addGoal, hideModal }) => (
  <div>
    <GoalForm addGoal={addGoal} hideModal={hideModal} />
  </div>
);

export default AddGoalModal;
