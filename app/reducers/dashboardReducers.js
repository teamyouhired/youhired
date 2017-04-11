import { ADD_JOB } from '../actions/dashboard/DashboardActionTypes';
import { ADD_TASK } from '../actions/dashboard/DashboardActionTypes';
import {} from '../actions/dashboard/DashboardActionTypes';
import { addJob, addTask, getUserData } from '../api/users';


const defaultState = {
    companies: [],
    activity: [],
    applicationContacts: [],
    jobs: []
};

const dashboardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case addJob.SUCCESS:
      return {
        ...state,
        jobs: payload.userData.jobs
      };
    case addTask.SUCCESS:
      return {
        ...state,
        activity: payload.userData.activity
      };
    case getUserData.SUCCESS:
      return {
        ...state,
        jobs: payload[0],
        companies: payload[1],
        activity: payload[2],
        applicationContacts: payload[3]
      }
    default:
      return state;
  }
}

export default dashboardReducer;


