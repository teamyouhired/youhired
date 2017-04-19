import { SELECT_JOB } from '../actions/dashboard/DashboardActionTypes';
import { addContact, addActivity } from '../api/users';

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
    case addContact.SUCCESS:
      return {
        ...state,
        jobContacts: state.jobContacts.concat([payload])
      }
    case addActivity.SUCCESS:
      return {
        ...state,
        jobActivities: state.jobActivities.concat([payload])
      }
    default:
      return state;
  }
}

export default jobInformationReducer;
