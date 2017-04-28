import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleSpinner } from '../../actions/NavigationActions';
import { displayErrorMessage } from '../../actions/modals/ModalActions';
import { signUp, getUserData, getProgressVersusAverage, getCurrentStatuses, getGoals } from '../../api/users';
import { Link } from 'react-router-dom';
import RootModal from '../RootModal';

const Signup = createClass({
  displayName: 'Signup',

  propTypes: {
    onSignUp: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    toggleSpinner: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  },

  onSignUp(event) {
    event.preventDefault();

    this.props.toggleSpinner({
      isLoading: this.props.isLoading
    });

    this.props.onSignUp({
      useremail: this.emailInput.value,
      userpassword: this.passwordInput.value
    })
    .then(() => {
      if (sessionStorage.getItem('auth')) {
        this.props.getProgressVersusAverage()
          .then(() => {
            return this.props.getCurrentStatuses();
          })
          .then(() => {
            return this.props.getGoals();
          })
          .then(() => {
            this.props.toggleSpinner({
              isLoading: this.props.isLoading
            });
            this.props.history.push('/dashboard');
          });
      }
    })
    .catch((err) => {
      this.props.toggleSpinner({
        isLoading: this.props.isLoading
      });
    });

    this.emailInput.value = '';
    this.passwordInput.value = '';
  },
  render() {
    const { isLoading, isModalActive, authFailed } = this.props;
    return (
      <div >
      <div className="col-lg-4 col-md-3 col-sm-2"></div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="logo">
            <img src='images/logo.png' alt="" />
          </div>
          <div className="row loginbox">
            <div className="col-lg-12">
              <span className="singtext" >Sign Up Today! </span>
              { authFailed ? <p className="error-message" >Invalid login attempt, please try again.</p> : null }
            </div>

          <form onSubmit={this.onSignUp} >
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input className="form-control" type="text" ref={email => this.emailInput = email} placeholder="E-mail" />
            </div>
            <div className="col-lg-12  col-md-12 col-sm-12">
              <input className="form-control" type="password" ref={password => this.passwordInput = password} placeholder="Please enter password" />
            </div>
            <div className="col-lg-12  col-md-12 col-sm-12">
              <button onSubmit={this.onSignUp} className="btn  submitButton" type="submit" >
                Submit
              </button>
              { isLoading ? <span className="fa fa-spinner fa-pulse fa-2x fa-fw"></span>  : null }
            </div>
          </form>

        </div>
        <div className="row forGotPassword">
            <a href="#" >Forgot Username / Password? </a>
        </div>
      </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.navigation.isLoading,
    authFailed: state.authentication.authFailed,
    isModalActive: state.modal.modalType
  };
};

const mapActionsToProps = {
  onSignUp: signUp,
  getData: getUserData,
  toggleSpinner: toggleSpinner,
  getProgressVersusAverage: getProgressVersusAverage,
  getCurrentStatuses: getCurrentStatuses,
  getGoals: getGoals,
  displayErrorMessage: displayErrorMessage
};

export default connect(mapStateToProps, mapActionsToProps)(Signup);
