import React, { createClass, Component } from 'react';

const About = createClass({
  render () {
    return (

    <div className="container">

        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">About Us
                    <small>It's Nice to Meet You!</small>
                </h1>
                <p>youHired is a personal job search Organizer. An app where a job seeker can save and track job application status, set reminders, take notes,set search goals, document individual interview restrospectives and save contact info.</p>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <h2 className="page-header">Our Team</h2>
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
                <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="" />
                <h3>Dimitri Timkin
                    <small>Product Owner</small>
                </h3>
                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
                <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="" />
                <h3>Chris Abrami
                    <small>Scrum Master</small>
                </h3>
                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
                <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="" />
                <h3>Ryan Freude
                    <small>Software Engineer</small>
                </h3>
                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
                <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt="" />
                <h3>Jesse Hill
                    <small>Software Engineer</small>
                </h3>
                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
            </div>
        </div>

        <hr />

        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <img src="images/stack-banner.png" alt="" />
                </div>
            </div>
        </footer>

    </div>
    );
  }
});

export default About;