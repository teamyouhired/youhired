import React, { createClass } from 'react';
import InterviewDetails from './basic-information/InterviewDetails';
import OfferDetails from './basic-information/OfferDetails';
import CompanyInformation from './basic-information/CompanyInformation';

const BasicInformation = createClass({
  render() {
    const { details } = this.props;
    return (
      <div className="top-divs">
        <CompanyInformation
          companyName={details.companyname}
          positionName={details.positionname}
          creationDate={details.createdat}
        />
        {details.offersalary ? <OfferDetails
          offerSalary={details.offersalary}
          offerOptions={details.offeroptions}
          offerBenefits={details.offerbenefits}
          jobPostUrl={details.jobsposturl}
        /> : null}
      </div>

    );
  }
});

export default BasicInformation;
