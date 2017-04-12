import React, { createClass, PropTypes } from 'react';
import { changePage } from '../../../actions/NavigationActions';

const JobCard = createClass({
  displayName: 'JobCard',

  propTypes: {
    changePage: PropTypes.func.isRequired,
    activeComponent: PropTypes.string.isRequired
  },

  onJobClick(event) {

    this.props.changePage({
      activeComponent: 'jobInformation'
    });

  },

  render() {
    const { companyname, status } = this.props;
    return (
      <div onClick={this.onJobClick}>
        <div className='card-horizontal'>
          <h5 className='company-name'>{companyname}</h5>
          <h5 className='status'>{status}</h5>
          <span className='add-task glyphicon glyphicon-plus-sign'></span>
        </div>
      </div>
    );
  }

});

export default JobCard;
