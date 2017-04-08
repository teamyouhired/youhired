import React, { createClass, Component } from 'react';

const Login = createClass({

  signUserIn(email, password) {
    dispatch({
      type: 'SIGN_IN',
      email,
      password
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={signUserIn(this.email, this.password)}>
          <input
            ref={email => this.email = email}
            placeholder="Email"
          />
          <input
            ref={password => this.password = password}
            placeholder="Password"
          />
        </form>
      </div>
    );
  }
});