import React, { createClass } from 'react';

const BasicInformation = createClass({
  render() {
    const { company } = this.props;
    return (
      <div>
        <div>
          <h6>{company.createdat}</h6>
          <h6>{company.positionname}</h6>
          <h6>{company.companyname}</h6>
          <h6>{company.jobsposturl}</h6>
          <h6>{company.status}</h6>
        </div>
        <div>
          <h6>{company.companyaddress}</h6>
          <h6>{company.companystate}</h6>
          <h6>{company.companyzip}</h6>
          <h6>{company.offersalary}</h6>
          <h6>{company.offeroptions}</h6>
          <h6>{company.offerbenefits}</h6>
        </div>
      </div>
    );
  }
});

export default BasicInformation;
