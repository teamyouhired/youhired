import React, { createClass } from 'react';

const Header = createClass({
  render() {
    return (<nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
    <div>
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">'youHired' LOGO</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
        </ul>
        <div>
        <ul className="nav navbar-nav navbar-left">
          <li><a href="#">MAIN DASHBOARD</a></li>
          <li><a href="#">GOALS</a></li>
          <li><a href="#">CURRENT JOBS</a></li>
          <li><a href="#">JOB HUNT ADVICE</a></li>
          <li><a href="#">JOB SEARCH</a></li>
        </ul>
        </div>
      </div>
    </div>
  </nav>);
  }
});
// className="container-fluid"  className="container"
export default Header;