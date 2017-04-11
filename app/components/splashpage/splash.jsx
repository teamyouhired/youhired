import React, { createClass, Component } from 'react';

const Splash = createClass({
  render () {
    return (<div style={{backgroundColor: '#F7F5E6'}}>
      <header className="business-header">

        <div className="my-logo"></div>

        <div className="button-container">
          <button type="button" className="button">Login</button>
          <button type="button" className="button bottom-button">Sign up</button>
        </div>
      </header>

      <div className='splash-bottom'>

      <div className="row position-absolute">
        <div className="col-sm-4 ">
          <img className="img-circle img-responsive img-center" src='images/business-team.jpg' alt="" />
                <h2 className="text-center">ABOUT US</h2>

        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="images/1.jpg" alt="" />
                <h2 className="text-center">SERVICES</h2>

        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="images/download.jpeg" alt="" />
            <h2 className="text-center">SEARCH NOW</h2>

        </div>
      </div>

      <hr/>

      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright &copy; youHired 2017</p>
          </div>
        </div>
      </footer>


    </div>
  </div>);
  }
});

export default Splash;
