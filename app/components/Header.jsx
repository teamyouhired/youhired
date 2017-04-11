import React, { createClass } from 'react';

const HeaderComponent = createClass({
  render() {
    return (<nav className="navbar navbar-light my-nav" style={{backgroundColor: '#52658F'}}>

      <div className="navbar-header my-nav">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <img src='images/small-logo.png' alt="" />
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" className="nav-names"><span className="glyphicon nav-names glyphicon-log-in"></span>Login</a></li>
        </ul>
        <div>
        <ul className="nav navbar-nav navbar-left">
          <li><a href="#" className="nav-names">MAIN DASHBOARD</a></li>
          <li><a href="#" className="nav-names">GOALS</a></li>
          <li><a href="#" className="nav-names">CURRENT JOBS</a></li>
          <li><a href="#" className="nav-names">JOB HUNT ADVICE</a></li>
          <li><a href="#" className="nav-names" >JOB SEARCH</a></li>
        </ul>
        </div>
      </div>

  </nav>);
  }
});

export default HeaderComponent;