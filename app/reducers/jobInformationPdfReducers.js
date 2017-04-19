import { CREATE_PDF } from '../actions/jobsinformationpage/JobinformationActionTypes';

const defaultState = {
    jobUrl: null
};

const jobInformationPdfReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CREATE_PDF:
    console.log('payload from pdf reducer : ', payload);
      return {
        ...state,
        jobUrl:
      }
    default:
      return state;
  }
}

export default jobInformationPdfReducer;
