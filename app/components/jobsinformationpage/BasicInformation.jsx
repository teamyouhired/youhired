import React, { createClass } from 'react';

const BasicInformation = createClass({
  render() {
    const { company } = this.props;
    return (
      <div className='basic-information'>
        <div className='job-status'>
          <h4>{company.createdat}</h4>
          <h4>{company.status}</h4>
        </div>
        <div className='offer-details'>
          <h4>{company.positionname}</h4>
          <h4>{company.jobsposturl}</h4>
          <h4>{company.offersalary}</h4>
          <h4>{company.offeroptions}</h4>
          <h4>{company.offerbenefits}</h4>
        </div>
        <div className='company-details'>
          <h4>{company.companyname}</h4>
          <h4>{company.companyaddress}</h4>
          <h4>{company.companystate}</h4>
          <h4>{company.companyzip}</h4>
        </div>
      </div>
    );
  }
});

export default BasicInformation;
