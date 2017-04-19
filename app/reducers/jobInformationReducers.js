import { SELECT_JOB } from '../actions/dashboard/DashboardActionTypes';

const defaultState = {
    jobDetails: {},
    jobActivities: [],
    jobContacts: []
};

const jobInformationReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SELECT_JOB:
    console.log('payload from dashboard reducer : ', payload);
      return {
        ...state,
        jobDetails: payload.jobDetails,
        jobActivities: payload.jobActivities,
        jobContacts: payload.jobContacts
      }
    default:
      return state;
  }
}

export default jobInformationReducer;
