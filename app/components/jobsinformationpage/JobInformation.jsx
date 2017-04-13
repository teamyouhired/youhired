import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicInformation from './BasicInformation';
import ActivityLog from './activities/ActivityLog';
import ApplicationContacts from './contacts/ApplicationContacts';
import { getUserData } from '../../api/users';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';
import { Link } from 'react-router-dom';


const JobInformation = createClass({
  displayName: 'JobInformation',
  propTypes: {
    companies: PropTypes.array.isRequired,
    activity: PropTypes.array.isRequired,
    applicationContacts: PropTypes.array.isRequired
  },
  // componentWillMount() {
  //   this.props.getData();
  // },

  render() {
    const {
      companies,
      activity,
      applicationContacts
    } = this.props;
    return (
      <div>
        <div>
          <HeaderComponent />
        </div>
        <div className="main-view">
          <div className="job-area">
            <BasicInformation company={companies[0]}/>
            <ActivityLog activities={activity}/>
          </div>
          <div>
          <ApplicationContacts contacts={applicationContacts}/>
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
    companies: state.jobInformation.companies,
    activity: state.jobInformation.activity,
    applicationContacts: state.jobInformation.applicationContacts
  };
};

// const mapActionsToProps = {
//   getData: getUserData
// };

export default connect(mapStateToProps)(JobInformation);
