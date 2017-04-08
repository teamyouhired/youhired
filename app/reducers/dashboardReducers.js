import { ADD_JOB } from '../actions/dashboard/DashboardActionTypes';

const defaultState = {
  jobs: []
};

// const job = (state = {}, action) => {
//   switch (action.type) {
//     case ADD_JOB:
//       return {
//         id: action.id,
//         companyName: action.companyName,
//         status: action.status
//       }
//     default:
//       return state;
//   }
// }

// const jobs = (state = [], action) => {
//   switch (action.type) {
//     case ADD_JOB:
//       return [
//           ...state,
//           job(undefined, action)
//         ]
//     default:
//       return state;
//   }
// }

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


