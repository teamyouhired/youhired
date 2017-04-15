import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const AuthenticateUser = createClass({
  componentDidMount() {
    const { dispatch, currentURL } = this.props;
    console.log('componentDidMount in authuser',sessionStorage.getItem('auth'));
    if (!sessionStorage.getItem('auth')) {
      browserHistory.replace('/login');
    }
  },

  render() {
    if (sessionStorage.getItem('auth')) {
      return this.props.children;
    } else {
      return null;
    }
  }
});
// const mapStateToProps = (state) => {
//   return {
//     currentURL: ownProps.location.pathname
//   }
// }
// export default connect(mapStateToProps)(AuthenticateUser);
export default AuthenticateUser;
