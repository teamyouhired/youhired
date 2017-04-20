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
    return (
      <div onClick={this.onJobClick} className='card-horizontal'>
          <div className="card-company">
            <p>{this.props.jobDetails.companyname}</p>
          </div>
          <div className="card-status">
            <p>{this.props.jobDetails.status}</p>
          </div>
          <div className="card-icons">
            <span className='add-task glyphicon glyphicon-plus-sign'></span>
          </div>
      </div>
    );
  }

});

export default JobCard;
