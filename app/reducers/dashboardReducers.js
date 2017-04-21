import { ADD_JOB, ADD_TASK } from '../actions/dashboard/DashboardActionTypes';
import { addJob, addContactToApplication, addTask, getUserData } from '../api/users';

const defaultState = {
  jobs: [],
  contacts: []
};

const dashboardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case addJob.SUCCESS:
      return {
        ...state,
        jobs: state.jobs.concat([{ details: payload, activities: [], contacts: [] }])
      }
    case getUserData.SUCCESS:
      return {
        ...state,
        jobs: payload.jobapplications,
        contacts: payload.contacts
      }
    default:
      return state;
  }
}

export default dashboardReducer;
