import { ADD_JOB, ADD_TASK, SELECT_JOB, ADD_JOB_DESCRIPTION } from './DashboardActionTypes';


export const addJobDescription = (jobPostUrl) => {
  return {
    type: ADD_JOB_DESCRIPTION,
    payload: jobPostUrl
  };
}


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
