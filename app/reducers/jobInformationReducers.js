import { SELECT_JOB } from '../actions/dashboard/DashboardActionTypes';
import { addContactToApplication, addActivity, addInterview, addJobOffer } from '../api/users';

const defaultState = {
    jobDetails: {},
    jobActivities: [],
    jobContacts: []
};

const jobInformationReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SELECT_JOB:
      return {
        ...state,
        jobDetails: payload.jobDetails,
        jobActivities: payload.jobActivities,
        jobContacts: payload.jobContacts
      }
    case addContactToApplication.SUCCESS:
      return {
        ...state,
        jobContacts: state.jobContacts.concat([payload])
      }
    case addActivity.SUCCESS:
      return {
        ...state,
        jobActivities: state.jobActivities.concat([payload])
      }
    case addInterview.SUCCESS:
    case addJobOffer.SUCCESS:
      return {
        ...state,
        jobDetails: payload
      }
    default:
      return state;
  }
}

export default jobInformationReducer;
