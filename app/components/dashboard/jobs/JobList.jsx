import React, { createClass, PropTypes } from 'react';
import JobCard from './JobCard';
import AddJob from './AddJob';
// import Popup from 'react-popup';

const JobList = createClass({
    displayName: 'JobList',

    propTypes: {
      jobs: PropTypes.array.isRequired,
      changePage: PropTypes.func.isRequired,
      addJob: PropTypes.func.isRequired,
      activeComponent: PropTypes.string.isRequired,
      hideModal: PropTypes.func.isRequired
    },

    onAddJob(event) {
      console.log('add job ran, modal state should be updated');
      this.props.displayJobForm({
        formType: 'DISPLAY_JOB_FORM',
        modalProps: {
          addJob: this.props.addJob,
          hideModal: this.props.hideModal
        }
      });
      // this.props.changePage({
      //   activeComponent: 'AddJob'
      // })
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
          <button className='button' onClick={this.onAddJob}>
            Add Job
          </button>
        </div>
      );
    }
});

export default JobList;
