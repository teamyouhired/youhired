import React, { createClass } from 'react';


const BasicInformation = createClass({
  render() {
    const { company } = this.props;
    return (
      <div className="top-divs">
        <div className='basic-heading'>
          <div className="company-details">
            <h4>{company.companyname}</h4>
          </div>
          <div className="offer-details" >
            <h4>{company.positionname}</h4>
          </div>
          <div className="creation-date">
            <h4>Creation date</h4>
          </div>
        </div>
        <div className='basic-information'>
          <div className="company-info">
            <p>{company.companyaddress}</p>
            <p>{company.companystate + ', ' + company.companyzip}</p>
          </div>
          <div className="offer-info" >
          </div>
          <div className="creation-info">
            <p>{company.createdat}</p>
          </div>
        </div>

        <div className="details">
          <div className="position-details">
            <h4>Position Details</h4>
          </div>
          <div className="job-url">
            <h4>Description</h4>
          </div>
        </div>
        <div className="details-info">
          <div className="position-details-info">
            <p><b>Salary:</b>  ${company.offersalary}</p>
            <p><b>Offer Options:</b>  {company.offeroptions}</p>
            <p><b>Benefits:</b>  {company.offerbenefits}</p>
          </div>
          <div className="job-url-info">
            <p>{company.jobsposturl}</p>
          </div>
        </div>
      </div>

    );
  }
});

export default BasicInformation;
