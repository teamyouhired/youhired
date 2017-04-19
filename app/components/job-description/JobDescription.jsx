import React, { createClass, PropTypes } from 'react';
import Iframe from 'react-iframe';


const API_KEY = "g8v5kuA8GXNu";
//url is from user input
//http://pdfmyurl.com/api?license=yourlicensekey&url=http://www.example.com&page_size=A4&orientation=portrait

const JobDescription= createClass({
  displayName: 'JobDescription',

  propTypes: {
    //onSignIn: PropTypes.func.isRequired, //need to figure this out
    //getData: PropTypes.func.isRequired
  },


  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit({
      urlPdf: this.jobUrlInput.value
    })
    .then(() => {
      const jobUrlPdf  = "http://pdfmyurl.com/api?license="+ API_KEY + "&url=" + this.jobUrlInput.value + "&page_size=A4&orientation=portrait"
      }
    );

    this.jobUrlInput.value = '';

  },
  render() {
    const { activitylogcontent, createdat } = this.props;
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
            <Iframe url="http://www.snagajob.com/job-seeker/jobs/job-details.aspx?postingid=40763730&oq=sr+software+engineer&item=1&searchid=70a3ed46-13bc-9661-466b-0fa9aa33afa8&ui=true&src=title"
              width="600px"
              height="800px"
              display="initial"
              position="relative"
              allowFullScreen/>
          </div>
        </div>
      </div>
    );
  }
});

export default JobDescription;
