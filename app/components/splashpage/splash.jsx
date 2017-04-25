import React, { createClass, Component } from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from 'Footer';

const Splash = createClass({
  displayName: 'Splash',

  onLogin() {
    this.props.history.push('/login');
  },

  onSignup() {
    this.props.history.push('/signup');
  },

  render () {
    return (<div className="main-splash" style={{backgroundColor: '#F7F5E6'}}>
      <header className="business-header">

        <div className="my-logo"></div>

        <div className="button-container">
          <button type="button" className="button" onClick={this.onLogin} >
            Login
          </button>
          <button type="button" className="button bottom-button" onClick={this.onSignup} >
            Sign up
          </button>
        </div>
      </header>

      <div className='splash-bottom'>

      <div className="row position-absolute">
        <div className="col-sm-4 ">
          <img className="img-circle img-responsive img-center" src='images/about-us.png' alt="" />
              <Link to='/about-us'>
                <h2 className="text-center">ABOUT US</h2>
              </Link>

        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="images/1.jpg" alt="" />
              <Link to='/services'>
                <h2 className="text-center">SERVICES</h2>
              </Link>

        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="images/download.jpeg" alt="" />
            <a href='https://www.monster.com/?disGeo=true'>
              <h2 className="text-center">SEARCH NOW</h2>
            </a>
        </div>
      </div>
    </div>
    <div>
    <FooterComponent />
    </div>
  </div>);
  }
});

export default Splash;
