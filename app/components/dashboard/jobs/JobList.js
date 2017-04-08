import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard';
import AddJob from './AddJob';

const JobList = createClass({
    displayName: 'JobList',

    propTypes: {
      jobs: PropTypes.array.isRequired
    },

    render() {
      console.log(this.props)
      return (
        <div>
          <div>
            {this.props.jobs.map(job =>
              <JobCard
              {...job}
            />
            )}
          </div>
          <AddJob />
        </div>
      );
    }
});

const mapStateToProps = (state) => {
  console.log(state.dashboard);
  console.log(state);
  return {
    jobs: state.dashboard.jobs
  }
}

export default connect(mapStateToProps)(JobList);
