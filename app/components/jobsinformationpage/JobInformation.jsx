import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicInformation from './BasicInformation';
import ActivityLog from './activities/ActivityLog';
import ApplicationContacts from './contacts/ApplicationContacts';
import { getUserData, addContact, updateStatus, addGoal, addActivity } from '../../api/users';
// import { addContact } from '../../actions/jobsinformationpage';
import JobDescription from '../job-description/JobDescription';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';
import ContactForm from '../application-forms/ContactForm';
import { Link } from 'react-router-dom';
import {
  displayContactForm,
  hideModal,
  displayActivityForm,
  displayGoalForm
  } from '../../actions/modals/ModalActions';
import RootModal from '../RootModal';

const JobInformation = createClass({
  displayName: 'JobInformation',
  propTypes: {
    jobApplication: PropTypes.array.isRequired,
    activity: PropTypes.array.isRequired,
    applicationContacts: PropTypes.array.isRequired
  },
  // componentWillMount() {
  //   this.props.getData();
  // },

  onAddActivity(event) {
    this.props.displayActivityForm({
      formType: 'DISPLAY_ACTIVITY_FORM',
      modalProps: {
        addActivity: this.props.addActivity,
        applicationId: this.props.jobApplication.applicationid,
        hideModal: this.props.hideModal
      }
    });
  },

  onAddGoal(event) {
    this.props.displayGoalForm({
      formType: 'DISPLAY_GOAL_FORM',
      modalProps: {
        addGoal: this.props.addGoal,
        hideModal: this.props.hideModal
      }
    });
  },

  onUpdateStatus(event) {
    // dispatch action to update status in server
  },

  render() {
    const {
      pdfFile,
      jobApplication,
      activity,
      applicationContacts,
      displayContactForm,
      hideModal,
      addContact,
      isModalActive
    } = this.props;
    return (
      <div>
        <div>
          <HeaderComponent />
        </div>
        { isModalActive ? (
            <div className="main-view overlay">
              <div className="add-job-modal">
                <RootModal />
              </div>
            </div>
            ) : null }
        <div className="main-view">
          <div className="job-area">
            <BasicInformation
              details={jobApplication} />
              <div className="update-buttons text-center">
                <button id='job-info-button' className='button' onClick={this.onAddActivity} >
                  Add Activity
                </button>
                <button id='job-info-button' className='button' onClick={this.onAddGoal} >
                  Add Goal
                </button>
                <button id='job-info-button' className='button' onClick={this.onUpdateStatus} >
                  Update Status
                </button>
              </div>
            <ActivityLog
              activities={activity} />
            <div className="jobdesc-main">
              <JobDescription pdfFile={pdfFile}/>
            </div>
          </div>
          <div>
          <ApplicationContacts
            contacts={applicationContacts}
            addContact={addContact}
            displayContactForm={displayContactForm}
            hideModal={hideModal} />
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
    jobApplication: state.jobInformation.jobDetails,
    isModalActive: state.modal.modalType,
    pdfFile: state.jobInformation.jobDetails.jobarchiveurl,
    activity: state.jobInformation.jobActivities,
    applicationContacts: state.jobInformation.jobContacts,
    isModalActive: state.modal.modalType
  };
};

const mapActionsToProps = {
  addContact: addContact,
  displayContactForm: displayContactForm,
  displayGoalForm: displayGoalForm,
  displayActivityForm: displayActivityForm,
  hideModal: hideModal,
  addGoal: addGoal,
  addActivity: addActivity,
  updateStatus: updateStatus
};

export default connect(mapStateToProps, mapActionsToProps)(JobInformation);
