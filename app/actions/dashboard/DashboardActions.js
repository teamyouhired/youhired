import { ADD_JOB, ADD_TASK, SELECT_JOB } from './DashboardActionTypes';

export function addJob({ companyName, status }) {
  return {
    type: ADD_JOB,
    payload: {
      companyName,
      status
    }
  };
}

export function selectJob(jobInformation) {
  return {
    type: SELECT_JOB,
    payload: jobInformation
  };
}

export function addTask({ dateStarted, dateDue, completed, description, application }) {
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
