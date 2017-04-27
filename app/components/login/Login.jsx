import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSpinner } from '../../actions/NavigationActions';
import { signIn, getUserData, getProgressVersusAverage, getCurrentStatuses, getGoals } from '../../api/users';

const Login = createClass({
  displayName: 'Login',

  propTypes: {
    onSignIn: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    toggleSpinner: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  },

  onSignIn(event) {
    event.preventDefault();

    this.props.toggleSpinner({
      isLoading: this.props.isLoading
    });

    this.props.onSignIn({
      useremail: this.emailInput.value,
      userpassword: this.passwordInput.value
    })
    .then(() => {
      if (sessionStorage.getItem('auth')) {
        this.props.getData()
          .then(() => {
            this.props.getProgressVersusAverage()
              .then(() => {
                this.props.getCurrentStatuses()
                  .then(() => {
                    this.props.getGoals()
                      .then(() => {
                        this.props.toggleSpinner({
                          isLoading: this.props.isLoading
                        });

                        this.props.history.push('/dashboard');
                      })
                  })
              })
        });
      }
    })
    .catch((err) => {
      this.props.toggleSpinner({
        isLoading: this.props.isLoading
      });
      alert('invalid login attempt')
    });

    this.emailInput.value = '';
    this.passwordInput.value = '';
  },

  render() {
    const { isLoading } = this.props;
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

            <form onSubmit={this.onSignIn} >
              <div className="col-lg-12 col-md-12 col-sm-12">
                <input className="form-control" type="text" ref={email => this.emailInput = email} placeholder="E-mail" />
              </div>
              <div className="col-lg-12  col-md-12 col-sm-12">
                <input className="form-control" type="password" ref={password => this.passwordInput = password} placeholder="Please enter password" />
              </div>
              <div className="col-lg-12  col-md-12 col-sm-12">
                <button onSubmit={this.onSignIn} className="btn  submitButton" type="submit" >
                  Submit
                </button>
                { isLoading ? <span className="fa fa-spinner fa-pulse fa-2x fa-fw"></span>  : null }
              </div>
            </form>

          </div>
          <div className="row forGotPassword">
              <a href="#" >Forgot Username / Password? </a>
              <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.navigation.isLoading,
    authFailed: state.authentication.authFailed
  };
};

const mapActionsToProps = {
  onSignIn: signIn,
  getData: getUserData,
  toggleSpinner: toggleSpinner,
  getProgressVersusAverage: getProgressVersusAverage,
  getCurrentStatuses: getCurrentStatuses,
  getGoals: getGoals
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
