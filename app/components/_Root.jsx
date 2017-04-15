import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard/Dashboard';
import JobInformation from './jobsinformationpage/JobInformation';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';

//may not necessarily be functional based, could be class based

const _Root = createClass({
  displayName: 'Root',

  propTypes: {
    activeComponent: PropTypes.string.isRequired
  },

  componentWillMount() {
    const history = this.props.history;
    if (!sessionStorage.getItem('auth')) {
      history.push('/login');
    } else {

      history.push('/dashboard')
    }
  },

  render() {
    const { activeComponent } = this.props;

    // let currentComponent = null;
    // if (activeComponent === 'jobInformation') {
    //   console.log('jobinfo should render');
    //   currentComponent = <JobInformation />;
    // } else if (activeComponent === 'Dashboard') {
    //   console.log('dashboard should render');
    //   currentComponent = <Dashboard />;
    // }
    return (

      <div className="root-view">
        <div>
          <HeaderComponent />
        </div>

          <div className="root-main">
            <div className="root-main-apps">
              <div className="job-app-header">
                <h4 className="job-app-text"> Current Job Applications </h4>
              </div>
              <div className="job-card">
                <Dashboard />
              </div>
            </div>

            <div className="root-main-goals">
              <div className="job-app-header">
                <h4 className="job-app-text"> Goals Monitoring </h4>
              </div>
              <div className="job-card">

              </div>
            </div>

            <div className="root-main-tasks">
              <div className="job-app-header">
                <h4 className="job-app-text"> Current Task List </h4>
              </div>
              <div className="job-card">

              </div>
            </div>
          </div>

        <div>
          <FooterComponent />
        </div>

      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    activeComponent: state.navigation.activeComponent
  };
};

export default connect(mapStateToProps)(_Root);
