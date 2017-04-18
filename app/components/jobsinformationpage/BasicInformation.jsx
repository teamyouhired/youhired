import React, { createClass } from 'react';


const BasicInformation = createClass({
  render() {
    const { details } = this.props;
    return (
      <div className="top-divs">
        <div className='basic-heading'>
          <div className="company-details">
            <h4>{details.companyname}</h4>
          </div>
          <div className="offer-details" >
            <h4>{details.positionname}</h4>
          </div>
          <div className="creation-date">
            <h4>Creation Date</h4>
          </div>
        </div>
        <div className='basic-information'>
          <div className="company-info">
            <p>{details.companyaddress}</p>
            <p>{details.companystate + ', ' + details.companyzip}</p>
          </div>
          <div className="offer-info" >
          </div>
          <div className="creation-info">
            <p>{details.createdat}</p>
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
            <p><b>Salary:</b>  ${details.offersalary}</p>
            <p><b>Offer Options:</b>  {details.offeroptions}</p>
            <p><b>Benefits:</b>  {details.offerbenefits}</p>
          </div>
          <div className="job-url-info">
            <p>{details.jobsposturl}</p>
          </div>
        </div>
      </div>

    );
  }
});

export default BasicInformation;
