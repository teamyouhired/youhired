import React, { createClass, Component } from 'react';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';

const About = createClass({
  render () {
    return (

    <div className="main-page">
        <div>
          <HeaderComponent />
        </div>
        <div className="row no-border">
            <div className="col-lg-12 header-display no-border">
                <h1 className="page-header no-border">About Us
                </h1>
                <p className="header-desc no-border"><b>youHired</b> is a personal job search Organizer. An app where a job seeker can save and track job application status, set reminders, take notes,set search goals, document individual interview restrospectives and save contact info.</p>
            </div>
        </div>

        <div className="card-body no-border">
            <div>
                <h2 className="page-header no-border">Our Team</h2>
            </div>

            <div className="card-pic-body no-border">
                    <div className="card-row-top">
                    <div className="team-card">
                        <img className="img-circle img-responsive img-center" src="images/d2 cut.png" alt="" />
                        <h3 className="name">Dimitri Timkin</h3>
                            <h5>Product Owner</h5>

                        <p> Dimitri developed the vision for youHired and guided the directions of the project.</p>
                        <div className="per-linkedin">
                            <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-card">
                        <img className="img-circle img-responsive img-center" src="images/Chris.jpg" alt="" />
                        <h3 className="name">Chris Abrami</h3>
                            <h5>Scrum Master</h5>

                        <p>Dimitri developed the vision for youHired and guided the directions of the project.</p>
                        <div className="per-linkedin">
                            <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    </div>
                <div className="card-row-bottom">
                     <div className="team-card">
                        <img className="img-circle img-responsive img-center" src="images/Ryan.jpg" alt="" />
                        <h3 className="name">Ryan Freude</h3>
                            <h5>Fullstack Engineer</h5>

                        <p>Ryan ran the show on this one...enough said.</p>
                        <div className="per-linkedin">
                            <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                     <div className="team-card">
                        <img className="img-circle img-responsive img-center" src="images/FullSizeRender-4.jpg" alt="" />
                        <h3 className="name">Jesse Hill</h3>
                            <h5>Fullstack Engineer</h5>

                        <p>Jesse llllllll</p>
                        <div className="per-linkedin">
                            <a href="https://www.linkedin.com/in/jesse-hill-89b26b62/"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <div className="img-wrapper no-border">
                <div className="no-border">
                    <img className="bottom-image no-border"src="images/stack-banner.png" alt="" />
                </div>
            </div>
        </footer>

        <div>
          <FooterComponent />
        </div>

    </div>
    );
  }
});

export default About;