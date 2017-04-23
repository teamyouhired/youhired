import React, { createClass } from 'react';

const CompanyInformation = createClass({
  displayName: 'CompanyInformation',

  render() {
    const {
      companyName,
      positionName,
      createdAt
    } = this.props;

    return (
      <div>
        <div className='basic-heading'>
          <div className="company-details">
            <h4>{companyName}</h4>
          </div>
          <div className="offer-details" >
            <h4>{positionName}</h4>
          </div>
          <div className="creation-info">
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    );
  }
});

export default CompanyInformation;
