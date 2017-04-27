import { getProgressVersusAverage, getCurrentStatuses } from '../api/users';

const defaultState = {
  progressVsAverage: {},
  currentStatuses: {}
}

const chartReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
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

export default chartReducer;
