import React, { createClass } from 'react';

const JobDescription= createClass({
  render() {
    const { activitylogcontent, createdat } = this.props;
    return (
      <div>
        <div className='basic-heading'>
          <div className="company-details">
            <h4>Job Description</h4>
          </div>
          <div className="jobdesc-scroll-main">
            <img src="/pix/samples/11m.jpg" alt="Sample picture for scroll box" />
          </div>
        </div>
      </div>
    );
  }
});

export default JobDescription;
