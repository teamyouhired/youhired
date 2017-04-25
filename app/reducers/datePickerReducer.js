import { CHANGE_DATE } from '../actions/jobsinformationpage/JobInformationActionTypes';
import moment from 'moment';

const defaultState = {
  startDate: moment(),
  currentDate: null
};

const datePicker = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_DATE:
      return {
        ...state,
        startDate: payload.startDate,
        currentDate: payload.currentDate
      };
    default:
      return state;
  }
};

export default datePicker;
