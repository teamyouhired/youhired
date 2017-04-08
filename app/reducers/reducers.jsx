import { combineReducers } from 'redux';
import jobs from './dashboardReducers';

const jobsList = combineReducers({
  jobs
});
export default jobsList;
