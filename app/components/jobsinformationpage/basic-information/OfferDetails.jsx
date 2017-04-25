import React, { createClass } from 'react';

const OfferDetails = createClass({
  displayName: 'OfferDetails',

  render() {

    const {
      offerSalary,
      offerOptions,
      offerBenefits,
      jobPostUrl
    } = this.props;

    return (
      <div>
        <div className="details">
          <div className="position-details">
            <h4 className="header-titles">Position Details</h4>
          </div>
          <div className="job-url">
            <h4 className="header-titles">Description</h4>
          </div>
        </div>
        <div className="details-info">
          <div className="position-details-info">
            <p><b>Salary:</b>  ${offerSalary}</p>
            <p><b>Offer Options:</b>  {offerOptions}</p>
            <p><b>Benefits:</b>  {offerBenefits}</p>
          </div>
          <div className="job-url-info">
            <p>{jobPostUrl}</p>
          </div>
        </div>
      </div>
    );
  }
});

export default OfferDetails;
