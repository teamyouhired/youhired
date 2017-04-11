import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';
import { getUserData } from '../../api/users';

const Dashboard = createClass({
  displayName: 'Dashboard',

  propTypes: {
    getData: PropTypes.func.isRequired
  },

  componentWillMount() {
    this.props.getData();
  },

  render() {
    return (
      <div className='dashboard-container'>
        <JobList jobs={this.props.jobs}/>
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
      applicationContacts: state.dashboard.applicationContacts
  };
};

const mapActionsToProps = {
  getData: getUserData
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
