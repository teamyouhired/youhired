import React, { createClass, Component } from 'react';

const Login = createClass({

  render() {
    return (
      <div>
        <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="logo">
              <img src='images/logo.png' alt="" />
            </div>
            <div className="row loginbox">
              <div className="col-lg-12">
                <span className="singtext" >Login</span>
              </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input className="form-control" type="text" ref={email => this.email = email} placeholder="E-mail" />
            </div>
            <div className="col-lg-12  col-md-12 col-sm-12">
              <input className="form-control" type="password" ref={password => this.password = password} placeholder="Please enter password" />
            </div>
            <div className="col-lg-12  col-md-12 col-sm-12">
              <a href="#" className="btn  submitButton">Submit </a>
            </div>
          </div>
          <div className="row forGotPassword">
              <a href="#" >Forgot Username / Password? </a>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;