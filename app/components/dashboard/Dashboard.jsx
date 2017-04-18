import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';
import { getUserData } from '../../api/users';
import { changePage } from '../../actions/NavigationActions';
import Redirect from 'react-router-dom';
import { addJob } from '../../api/users';
import AddJob from './jobs/AddJob';
import GoalApp from './goals/GoalApp';
import VisualData from './visualdata/VisualData';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';
import { displayJobForm, hideModal } from '../../actions/modals/ModalActions';
import { selectJob } from '../../actions/dashboard/DashboardActions';
import RootModal from '../RootModal';

const Dashboard = createClass({
  displayName: 'Dashboard',

  propTypes: {
    getData: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    addJob: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired,
    selectJob: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  },

  componentWillMount() {
    const history = this.props.history;

    if (!sessionStorage.getItem('auth')) {
      history.push('/signup');
    }
  },

  render() {
    const {
      addJob,
      changePage,
      activeComponent,
      jobs,
      displayJobForm,
      hideModal,
      selectJob,
      isModalActive
    } = this.props;
    console.log('jobs in dashboard', jobs)
    return (
      <div className="root-view">
        <div>
          <HeaderComponent />
        </div>
          { isModalActive ? (
            <div className="root-main overlay">
              <div className="add-job-modal">
                <RootModal />
              </div>
            </div>
            ) : null }
            <div className="root-main">

              <div className="root-main-apps">
                <div className="job-app-header">
                  <h4 className="job-app-text"> Current Job Applications </h4>
                </div>
                <div className="job-card">
                  <JobList
                    jobs={jobs}
                    changePage={changePage}
                    activeComponent={activeComponent}
                    addJob={addJob}
                    displayJobForm={displayJobForm}
                    hideModal={hideModal}
                    selectJob={selectJob} />
                </div>
              </div>
              <div className="root-main-tasks">
                <div className="job-app-header">
                  <h4 className="job-app-text"> Data Visualization </h4>
                </div>
                <div className="job-card">
                  <VisualData />
                </div>
              </div>

              <div className="root-main-goals">
                <div className="job-app-header">
                  <h4 className="job-app-text"> Goals Monitoring </h4>
                </div>
                <div className="job-card">
                  <GoalApp />
                </div>
              </div>

            </div>

        <div>
          <FooterComponent />
        </div>

      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
      jobs: state.dashboard.jobs,
      companies: state.dashboard.companies,
      activity: state.dashboard.activity,
      applicationContacts: state.dashboard.applicationContacts,
      activeComponent: state.navigation.activeComponent,
      isAuthenticated: state.authentication.isAuthenticated,
      isModalActive: state.modal.modalType
  };
};

const mapActionsToProps = {
  getData: getUserData,
  changePage: changePage,
  addJob: addJob,
  displayJobForm: displayJobForm,
  hideModal: hideModal,
  selectJob: selectJob
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
