import { ADD_JOB, ADD_TASK, SELECT_JOB } from './DashboardActionTypes';

export const addJob = ({ companyName, status }) => {
  return {
    type: ADD_JOB,
    payload: {
      companyName,
      status
    }
  };
}

export const selectJob = (jobInformation) => {
  return {
    type: SELECT_JOB,
    payload: jobInformation
  };
}

export const addTask = ({ dateStarted, dateDue, completed, description, application }) => {
  return {
    type: ADD_TASK,
    payload: {
      dateStarted,
      dateDue,
      completed,
      description,
      application
    }
  };
}
