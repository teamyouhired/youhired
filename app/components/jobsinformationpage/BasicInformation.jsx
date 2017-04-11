import React, { createClass } from 'react';

const BasicInformation = createClass({
  render() {
    const { company } = this.props;
    return (
      <div className='basic-information'>
        <div className='company-details'>
          <h2>{company.companyname}</h2>
          <h5>{company.companyaddress}</h5>
          <h5>{company.companystate} + {','} + {company.companyzip}</h5>
        </div>
        <div className='offer-details'>
          <h2>{company.positionname}</h2>
          <h4>{company.jobsposturl}</h4>
          <h4>{company.offersalary}</h4>
          <h4>{company.offeroptions}</h4>
          <h4>{company.offerbenefits}</h4>
        </div>
        <h2>{company.createdat}</h2>
      </div>
    );
  }
});

export default BasicInformation;
