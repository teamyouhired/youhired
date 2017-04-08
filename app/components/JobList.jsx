import React, { Component, PropTypes } from 'react';
import JobCard from './JobCard';
import AddJob from '../containers/AddJob'

const JobList = ({ jobs }) => (
  <div>
    <div>
      {jobs.map(job =>
        <JobCard
        {...job}
      />
      )}
    </div>
    <AddJob />
  </div>
);
JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default JobList;