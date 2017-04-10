import { ADD_JOB } from '../actions/dashboard/DashboardActionTypes';
import { ADD_TASK } from '../actions/dashboard/DashboardActionTypes';

const defaultState = {
  jobs: [],
  tasks: [{
    dateStarted: '04/4/2017',
    dateDue: '04/28/2017',
    completed: false,
    description: 'Build a complete website',
    application: 'HackReactor'
  }]
};

const dashboardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: state.jobs.concat([{ companyName: payload.companyName, status: payload.status }])
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat([{
          dateStarted: payload.dateStarted,
          dateDue: payload.dateDue,
          completed: payload.completed,
          description: payload.description,
          application: payload.application
        }])
      }
    default:
      return state;
  }
}

export default dashboardReducer;


