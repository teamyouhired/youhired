import React, { createClass, Component } from 'react';

const Login = createClass({

  signUserIn(email, password) {
    dispatch({
      type: 'SIGN_IN',
      email,
      password
    });
  },
  render() {
    return (
      <div class="container">
        <div class="col-lg-4 col-md-3 col-sm-2"></div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="logo">
              <h2>youHiredLOGO</h2>
            </div>
            <div class="row loginbox">
              <div class="col-lg-12">
                <span class="singtext" >Sign in </span>
              </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <input class="form-control" type="text" ref={email => this.email = email} placeholder="E-mail" />
            </div>
            <div class="col-lg-12  col-md-12 col-sm-12">
              <input class="form-control" type="password" ref={password => this.password = password} placeholder="Please enter password" />
            </div>
            <div class="col-lg-12  col-md-12 col-sm-12">
              <a href="#" class="btn  submitButton" onSubmit={signUserIn(this.email, this.password)}>Submit </a>
            </div>
          </div>
          <div class="row forGotPassword">
              <a href="#" >Forgot Username / Password? </a>
          </div>
        </div>
      </div>
    );
  }
});

