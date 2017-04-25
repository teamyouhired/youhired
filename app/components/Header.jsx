import React, { createClass } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/NavigationActions';

const HeaderComponent = createClass({

  logout() {

    this.props.logout();
    sessionStorage.removeItem('auth');

  },

  render() {
    return (<nav className="navbar navbar-light my-nav">

      <div className="navbar-header my-nav">
        <img src='images/small-logo.png' alt="" />
      </div>

      <div className="main-nav">
      <ul className="nav navbar-nav navbar-left">
        <li>
          <Link to="/dashboard" className="nav-names">MAIN DASHBOARD
        </Link>
        </li>
        <li><a href="#" className="nav-names">GOALS</a></li>
        <li><a href="#" className="nav-names">CURRENT JOBS</a></li>
        <li><a href="#" className="nav-names">JOB HUNT ADVICE</a></li>
        <li><a href="#" className="nav-names">JOB SEARCH</a></li>
        <li>
          <Link to={'/contact-page'} className="nav-names" >CONTACT PAGE</Link>
        </li>
      </ul>
      </div>

      <div className="header-logout">
      <ul className="nav navbar-nav navbar-right">
        <li><span className="glyphicon nav-names glyphicon-log-in"></span>
        <Link onClick={this.logout} to="/" className="logout-link">Logout</Link>
        </li>
      </ul>
      </div>

  </nav>);
  }
});

const mapActionsToProps = {
  logout: logout
}

export default connect(null, mapActionsToProps)(HeaderComponent);