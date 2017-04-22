import { ADD_JOB, ADD_TASK, ADD_JOB_DESCRIPTION } from '../actions/dashboard/DashboardActionTypes';
import { addJob, addContactToApplication, addTask, getUserData, addJobDescription } from '../api/users';

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
        contacts: payload.contacts,
        jobDescription: payload.jobDescription
      }
    default:
      return state;
  }
}

export default dashboardReducer;
