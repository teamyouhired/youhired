import { ADD_JOB, ADD_TASK } from '../actions/dashboard/DashboardActionTypes';
import { addJob, addTask, getUserData } from '../api/users';

const defaultState = {
  jobs: [],
  contacts: []
};

const dashboardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case addJob.SUCCESS:
      return {
        ...state,
        jobs: payload.jobapplications,
        contacts: payload.contacts
      };
    case addTask.SUCCESS:
      return {
        ...state,
        activity: payload
      };
    case getUserData.SUCCESS:
      return {
        ...state,
        jobs: payload.jobapplications
      };
    default:
      return state;
  }
}

export default dashboardReducer;
