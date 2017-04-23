import React, { createClass } from 'react';

const OfferDetails = createClass({
  displayName: 'OfferDetails',

  render() {

    const {
      address,
      date
    } = this.props;

    return (
      <div>
        <h2>Interview</h2>
        <div className="company-info">
          <p>{address}</p>
        </div>
        <div>
          <p>{date}</p>
        </div>
      </div>
    );
  }
});

export default OfferDetails;
