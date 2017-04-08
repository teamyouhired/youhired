import React, { createClass } from 'react';

const Header = createClass({
  render() {
    return (<nav class="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">'youHired' LOGO</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>
        </ul>
        <div class="container">
        <ul class="nav navbar-nav navbar-left">
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

export default Header;