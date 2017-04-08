import React, { PropTypes } from 'react';

const JobCard = ({ companyName, status }) => {
  return (
    <div>
      <h3>{companyName}</h3>
      <h4>{status}</h4>
    </div>
  );
}
// may need prop types
JobCard.propTypes = {
  companyName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};
export default JobCard;