import React, { createClass, PropTypes } from 'react';
import { changePage } from '../../../actions/NavigationActions';
import { browserHistory } from 'react-router';

const JobCard = createClass({
  displayName: 'JobCard',

  propTypes: {
    changePage: PropTypes.func.isRequired,
    activeComponent: PropTypes.string.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  onJobClick(event) {
    // may make this path dynamic based on which job was selected - Note for future development
    //const path = '/job-information/:' + this.props.applicationid;
    const path = '/job-information';

    this.props.selectJob({
      jobDetails: this.props.jobDetails,
      jobActivities: this.props.jobActivities,
      jobContacts: this.props.jobContacts
    });

    this.context.router.history.push(path)
  },

  render() {
    const { jobDetails } = this.props;
    return (
      <div onClick={this.onJobClick} className='card-horizontal'>
          <div className="card-company">
            <p>{jobDetails.companyname}</p>
          </div>
          <div className="card-status">
            <p>{jobDetails.status}</p>
          </div>
          <div className="card-icons">
            <p>{jobDetails.createdat}</p>
          </div>
      </div>
    );
  }

});

export default JobCard;
