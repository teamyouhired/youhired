import React, { createClass } from 'react';


const BasicInformation = createClass({
  render() {
    const { company } = this.props;
    return (
      <div className="top-divs">
        <div className='basic-information'>
          <div className="status-bar">{status}</div>
          <div className='company-details'>
            <h4>{company.companyname}</h4>
            <p>{company.companyaddress}</p>
            <p>{company.companystate + ', ' + company.companyzip}</p>
          </div>
          <div className='offer-details'>
            <h4>{company.positionname}</h4>
          </div>
          <div className="creation-date">
            <h4>Creation date</h4>
            <p>{company.createdat}</p>
          </div>
        </div>
        <div className="details">
          <div className="position-details">
            <h4>Position Details:</h4>
            <p>{company.offersalary}</p>
            <p>{company.offeroptions}</p>
            <p>{company.offerbenefits}</p>
          </div>
          <div className="job-url">
            <h4>Description:</h4>
            <p>{company.jobsposturl}</p>
          </div>
        </div>
      </div>

    );
  }
});

export default BasicInformation;
