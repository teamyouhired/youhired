import { ADD_JOB } from './DashboardActionTypes';

export function addJob({ companyName, status }) {
  return {
    type: ADD_JOB,
    companyName,
    status
  };
}