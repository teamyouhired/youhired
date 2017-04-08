import { connect } from 'react-redux';
import { addJob } from '../actions/DashboardActions';
import JobList from '../components/JobList';

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}
// will need for when we filter the jobs
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddJobClick: (job) => {
//       dispatch(addJob)
//     }
//   }
// }
const DisplayedJobs = connect(
  mapStateToProps
)(JobList)
export default DisplayedJobs;