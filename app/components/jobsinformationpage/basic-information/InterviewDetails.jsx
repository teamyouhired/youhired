import React, { createClass } from 'react';

const OfferDetails = createClass({
  displayName: 'OfferDetails',

  render() {

    const {
      address,
      date
    } = this.props;

    return (
      <div className="interview-details">
        <h4 className="header-titles">Interview</h4>
        <div className="company-info">
          <p>{address}</p>
          <p>{date}</p>
        </div>
      </div>
    );
  }
});

export default OfferDetails;
