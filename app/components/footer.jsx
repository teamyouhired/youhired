import React, { createClass } from 'react';

const Footer = createClass({
  render() {
    return (<footer class="footer-distributed">
    <div class="footer-left">
      <h3>youHired<span>logo</span></h3>
      <p class="footer-links">
        <a href="#">Main Dashboard</a>
        .
        <a href="#">Goals</a>
        ·
        <a href="#">Current Jobs</a>
        ·
        <a href="#">Job Hunt Advice</a>
        ·
        <a href="#">Job Search</a>
      </p>
      <p class="footer-company-name">youHired &copy; 2017</p>
    </div>
    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>1234 Ryan Ave.</span> Austin, TX</p>
      </div>
      <div>
        <i class="fa fa-phone"></i>
        <p>+1 555 123456</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
      </div>
    </div>
    <div class="footer-right">
      <p class="footer-company-about">
        <span>About the company</span>
        Personal job search Organizer. An app where a job seeker can save and track job application status, set reminders, take notes,set search goals, document individual interview restrospectives and save contact info.
      </p>
      <div class="footer-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
      </div>
    </div>
  </footer>);
  }
});
export default Footer;