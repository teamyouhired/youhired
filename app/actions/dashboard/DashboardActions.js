import { ADD_JOB } from './DashboardActionTypes';
import { ADD_TASK } from './DashboardActionTypes';

export function addJob({ companyName, status }) {
  return {
    type: ADD_JOB,
    payload: {
      companyName,
      status
    }
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
