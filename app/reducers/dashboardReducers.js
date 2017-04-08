import { ADD_JOB } from '../actions/dashboard/DashboardActionTypes';

const defaultState = {
  jobs: []
};

const dashboardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: state.jobs.concat([{ companyName: payload.companyName, status: payload.status }])
      };
    default:
      return state;
  }
}

export default dashboardReducer;


