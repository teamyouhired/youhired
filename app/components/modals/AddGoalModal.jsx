import React from 'react';
import GoalForm from '../application-forms/GoalForm';

const AddGoalModal = ({ userId = null, addGoal, hideModal }) => (
  <div>
    <GoalForm />
  </div>
);

export default AddGoalModal;
