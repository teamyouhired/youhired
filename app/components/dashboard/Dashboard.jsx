import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';
import { getUserData } from '../../api/users';
import { changePage } from '../../actions/NavigationActions';
import { addJob } from '../../api/users';
import AddJob from './jobs/AddJob';

const Dashboard = createClass({
  displayName: 'Dashboard',

  propTypes: {
    getData: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    addJob: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired
  },

  componentWillMount() {
    this.props.getData();
  },

  render() {
    const {
      addJob,
      changePage,
      activeComponent,
      jobs
    } = this.props;

    let currentComponent = null;

    if (activeComponent === 'AddJob') {
      console.log('jobinfo should render');
      currentComponent = <AddJob addJob={addJob} changePage={changePage} />;
    } else if (activeComponent === 'JobList') {
      console.log('dashboard should render');
      currentComponent = <JobList jobs={jobs} changePage={changePage} activeComponent={activeComponent} addJob={addJob}/>
    }

    return (
      <div className='dashboard-container'>
        {currentComponent}
        {/*<TaskList activity={this.props.activity}/>*/}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
      jobs: state.dashboard.jobs,
      companies: state.dashboard.companies,
      activity: state.dashboard.activity,
      applicationContacts: state.dashboard.applicationContacts,
      activeComponent: state.navigation.activeComponent
  };
};

const mapActionsToProps = {
  getData: getUserData,
  changePage: changePage,
  addJob: addJob
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
