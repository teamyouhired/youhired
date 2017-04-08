import React, { createClass, PropTypes } from 'react';

const JobCard = createClass({
  displayName: 'JobCard',

  render() {
    const { companyName, status } = this.props;
    return (
      <div>
        <h3>{companyName}</h3>
        <h4>{status}</h4>
      </div>
    );
  }

})

export default JobCard;