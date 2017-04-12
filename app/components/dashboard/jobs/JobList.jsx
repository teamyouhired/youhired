import React, { createClass, PropTypes } from 'react';
import JobCard from './JobCard';
import AddJob from './AddJob';

const JobList = createClass({
    displayName: 'JobList',

    propTypes: {
      jobs: PropTypes.array.isRequired,
      changePage: PropTypes.func.isRequired,
      activeComponent: PropTypes.string.isRequired
    },

    render() {
      return (
        <div className='job-list'>
          <div>
            {this.props.jobs.map((job, index) =>
              <JobCard
                key={index}
                activeComponent={this.props.activeComponent}
                changePage={this.props.changePage}
                {...job}
              />
            )}
          </div>
          <AddJob />
        </div>
      );
    }
});

export default JobList;
