import React, { creatClass, PropTypes } from 'react';
import { connect } from 'redux';
import BasicInformation from './BasicInformation';
import ActivityLog from './ActivityLog';
import ApplicationContacts from './ApplicationContacts';

const JobInformation = creatClass({
  displayName: 'JobInformation',
  render() {
    return (
      <div>
        <BasicInformation />
        <ActivityLog />
        <ApplicationContacts />
      </div>
    );
  }
});

export default JobInformation;
