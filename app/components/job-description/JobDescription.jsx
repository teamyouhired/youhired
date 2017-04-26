import React, { createClass, PropTypes } from 'react';
import Iframe from 'react-iframe';
import ReactPDF from 'react-pdf';
import Base64 from 'base-64'

const JobDescription= createClass({
  displayName: 'JobDescription',

  render() {
    let {createdat, jobfile } = this.props;
        return (
      <div>
        <div className='jobdesc-heading'>
          <div className="company-details">
            <h4 className="header-titles">Job Description</h4>
          </div>
          <div className="jobdesc-scroll-main">

            <ReactPDF file= { jobfile } />

          </div>
        </div>
      </div>
    );
  }
});

export default JobDescription;
