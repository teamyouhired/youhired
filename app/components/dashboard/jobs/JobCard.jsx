import React, { createClass, PropTypes } from 'react';

const JobCard = createClass({
  displayName: 'JobCard',

  render() {
    const { companyName, status } = this.props;
    return (
      <div>
        <div className='card-horizontal'>
          <h5 className='company-name'>{companyName}</h5>
          <h5 className='status'>{status}</h5>
          <span className='add-task glyphicon glyphicon-plus-sign'></span>
        </div>
      </div>
    );
  }

})

export default JobCard;