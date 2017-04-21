import React, { createClass, PropTypes } from 'react';
import JobCard from './JobCard';
import AddJob from './AddJob';
import ScrollArea from 'react-scrollbar';

const JobList = createClass({
    displayName: 'JobList',

    propTypes: {
      jobs: PropTypes.array.isRequired,
      changePage: PropTypes.func.isRequired,
      addJob: PropTypes.func.isRequired,
      selectJob: PropTypes.func.isRequired,
      activeComponent: PropTypes.string.isRequired,
      hideModal: PropTypes.func.isRequired
    },

    onAddJob(event) {
      this.props.displayJobForm({
        formType: 'DISPLAY_JOB_FORM',
        modalProps: {
          addJob: this.props.addJob,
          hideModal: this.props.hideModal
        }
      });
    },

    render() {
      const {
        selectJob,
        changePage,
        activeComponent,
        jobs
      } = this.props;
      return (
        <div className='job-list'>
          <ScrollArea
            speed={0.8}
            className='job-list-scroll'
            horizontal={false}>
            {jobs.map((job, index) =>
              <JobCard
                key={index}
                activeComponent={activeComponent}
                changePage={changePage}
                selectJob={selectJob}
                jobDetails={job.details}
                jobActivities={job.activities}
                jobContacts={job.contacts}
              />
            )}
          </ScrollArea>
          <button className='button' onClick={this.onAddJob}>
            Add Job
          </button>
        </div>
      );
    }
});

export default JobList;
