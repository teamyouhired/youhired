import React, { createClass } from 'react';

const FooterComponent = createClass({
  render() {
    return (<footer className="footer-distributed">
    <div className="footer-left">
      <img src='images/logo.png' alt="" />

      <p className="footer-company-name">&copy; 2017 youHired Inc. All rights reserved.</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker"></i>
        <p><span>1234 Ryan Ave.</span> Austin, TX</p>
      </div>
      <div>
        <i className="fa fa-phone"></i>
        <p>+1 (555) 123-4567</p>
      </div>
      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@youhired.com</a></p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        youHired is a personal job search Organizer where a job seeker can save and track job application status, set reminders, take notes, set search goals, document individual interview restrospectives and save contact info.
      </p>
      <div className="footer-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>
      </div>
    </div>
  </footer>);
  }
});
export default FooterComponent;