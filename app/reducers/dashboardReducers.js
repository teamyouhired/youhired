import { ADD_JOB, ADD_TASK } from '../actions/dashboard/DashboardActionTypes';
import { addJob, addTask, getUserData } from '../api/users';

const defaultState = {
  jobs: [],
  contacts: []
};

const dashboardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case addJob.SUCCESS:
    console.log('add job payload ', payload);
      return {
        ...state,
        jobs: state.jobs.concat([{ details: payload, activities: [], contacts: [] }])
      };
    case addTask.SUCCESS:
      return {
        ...state,
        activity: payload
      };
    case getUserData.SUCCESS:
    console.log('user data payload', payload);
      return {
        ...state,
        jobs: payload.jobapplications,
        contacts: payload.contacts
      };
    default:
      return state;
  }
}

export default dashboardReducer;
