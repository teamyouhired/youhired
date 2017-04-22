import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicInformation from './BasicInformation';
import ActivityLog from './activities/ActivityLog';
import ApplicationContacts from './contacts/ApplicationContacts';
import {
  getUserData,
  addContactToApplication,
  updateStatus,
  addActivity,
  addInterview,
  addJobOffer
  } from '../../api/users';
import JobDescription from '../job-description/JobDescription';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';
import ContactForm from '../application-forms/ContactForm';
import UpdateStatus from '../application-forms/UpdateStatusDropdown';
import {
  displayContactForm,
  hideModal,
  displayActivityForm,
  displayInterviewForm,
  displayOfferForm
  } from '../../actions/modals/ModalActions';
import RootModal from '../RootModal';

const JobInformation = createClass({
  displayName: 'JobInformation',
  propTypes: {
    jobApplication: PropTypes.object.isRequired,
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

  onInterview(event) {
    this.props.displayInterviewForm({
      formType: 'DISPLAY_INTERVIEW_FORM',
      modalProps: {
        addInterview: this.props.addInterview,
        applicationId: this.props.jobApplication.applicationid,
        hideModal: this.props.hideModal
      }
    });
  },

  onJobOffer(event) {
    this.props.displayOfferForm({
      formType: 'DISPLAY_OFFER_FORM',
      modalProps: {
        addJobOffer: this.props.addJobOffer,
        applicationId: this.props.jobApplication.applicationid,
        hideModal: this.props.hideModal
      }
    });
  },

  onUpdateStatus(event) {
    this.props.updateStatus({

    })
  },

  render() {
    const {
      jobfile,
      jobApplication,
      activity,
      applicationContacts,
      displayContactForm,
      hideModal,
      addContactToApplication,
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
              details={ jobApplication } />
              <div className="update-buttons text-center">

                <button id='job-info-button' className='button' onClick={this.onAddActivity} >
                  Add Activity
                </button>

                <button id='job-info-button' className='button' onClick={this.onInterview} >
                  Add Interview
                </button>

                <button id='job-info-button' className='button' onClick={this.onJobOffer} >
                  Add Job Offer
                </button>

                <UpdateStatus />

              </div>
            <ActivityLog
              activities={activity} />
            <div className="jobdesc-main">
              <JobDescription jobfile={jobfile}/>
            </div>
          </div>
          <div>
          <ApplicationContacts
            applicationId={jobApplication.applicationid}
            contacts={applicationContacts}
            addContact={addContactToApplication}
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
    jobfile: state.jobInformation.jobPdf,
    activity: state.jobInformation.jobActivities,
    applicationContacts: state.jobInformation.jobContacts,
    isModalActive: state.modal.modalType
  };
};

const mapActionsToProps = {
  addContactToApplication: addContactToApplication,
  displayContactForm: displayContactForm,
  displayActivityForm: displayActivityForm,
  displayInterviewForm: displayInterviewForm,
  displayOfferForm: displayOfferForm,
  hideModal: hideModal,
  addActivity: addActivity,
  addInterview: addInterview,
  addJobOffer: addJobOffer,
  updateStatus: updateStatus
};

export default connect(mapStateToProps, mapActionsToProps)(JobInformation);
