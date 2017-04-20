import React, { createClass, PropTypes } from 'react';
import Iframe from 'react-iframe';
import ReactPDF from 'react-pdf';

const API_KEY = "g8v5kuA8GXNu";
//url is from user input
//http://pdfmyurl.com/api?license=yourlicensekey&url=http://www.example.com&page_size=A4&orientation=portrait

const JobDescription= createClass({
  displayName: 'JobDescription',

  propTypes: {
    //onSubmit: PropTypes.func.isRequired
  },


  onSubmit(event) {
    event.preventDefault();


    this.props.onSubmit({
      urlPdf: this.jobUrlInput.value
    })
    .then(() => {
      //display pdf through
      }
    );

    this.jobUrlInput.value = '';

  },
  render() {
    const {createdat, pdfFile } = this.props;
    return (
      <div>
        <div className='jobdesc-heading'>
          <div className="jobdesc-buttons">
            <input className="input-job-url" type="text" name="user" ref={jobUrl => this.jobUrlInput = jobUrl} placeholder="Enter Job Description URL"/>
            <button className="job-button-url" onClick={this.onSubmit} type="button">Submit URL</button>
          </div>
          <div className="company-details">
            <h4>Job Description</h4>
          </div>
          <div className="jobdesc-scroll-main">
            <ReactPDF file="job_openings_monster_com_v2_job_View_JobID_182346627_MESCOID.pdf" />
          </div>
        </div>
      </div>
    );
  }
});

// const mapActionsToProps = {
//   onSubmit: onSubmit

// };

// export default connect(null, mapActionsToProps)(JobDescription);

export default JobDescription;