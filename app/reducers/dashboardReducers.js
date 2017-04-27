import { SELECT_GOAL_TYPE } from '../actions/dashboard/DashboardActionTypes';
import { addJob, addContactToApplication, addTask, getUserData, getGoals, addJobDescription, getProgressVersusAverage, getCurrentStatuses } from '../api/users';

const defaultState = {
  jobs: [],
  contacts: [],
  goalType: '',
  goals: [],
  progressVsAverage: {},
  currentStatuses: {}
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
    case SELECT_GOAL_TYPE:
      return {
        ...state,
        goalType: payload
      }
    case getGoals.SUCCESS:
      return {
        ...state,
        goals: payload
      }
    case getProgressVersusAverage.SUCCESS:
      return {
        ...state,
        progressVsAverage: payload
      }
    case getCurrentStatuses.SUCCESS:
      return {
        ...state,
        currentStatuses: payload
      }
    default:
      return state;
  }
}

export default dashboardReducer;
