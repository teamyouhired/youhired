import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicInformation from './BasicInformation';
import ActivityLog from './activities/ActivityLog';
import ApplicationContacts from './contacts/ApplicationContacts';
import { getUserData } from '../../api/users';

const JobInformation = createClass({
  displayName: 'JobInformation',
  propTypes: {
    getData: PropTypes.func.isRequired,
    companies: PropTypes.array.isRequired,
    activity: PropTypes.array.isRequired,
    applicationContacts: PropTypes.array.isRequired
  },
  componentWillMount() {
    this.props.getData();
  },

  render() {
    const {
      companies,
      activity,
      applicationContacts
    } = this.props;
    return (
      <div>
        <BasicInformation company={companies[0]}/>
        <ActivityLog activities={activity}/>
        <ApplicationContacts contacts={applicationContacts}/>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    companies: state.jobInformation.companies,
    activity: state.jobInformation.activity,
    applicationContacts: state.jobInformation.applicationContacts
  };
};

const mapActionsToProps = {
  getData: getUserData
};

export default connect(mapStateToProps, mapActionsToProps)(JobInformation);
