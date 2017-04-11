import {} from '../actions/jobsinformationpage/JobInformationActionTypes';
import { getUserData } from '../api/users';

const defaultState = {
    companies: [],
    activity: [],
    applicationContacts: [],
    jobs: []
};

const jobInformationReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
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

export default jobInformationReducer;

