import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';
import { getUserData } from '../../api/users';
import { changePage } from '../../actions/NavigationActions';

const Dashboard = createClass({
  displayName: 'Dashboard',

  propTypes: {
    getData: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired
  },

  componentWillMount() {
    this.props.getData();
  },

  render() {
    return (
      <div className='dashboard-container'>
        <JobList
          jobs={this.props.jobs}
          changePage={this.props.changePage}
          activeComponent={this.props.activeComponent}
        />
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
  changePage: changePage
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
