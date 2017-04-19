import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicInformation from './BasicInformation';
import ActivityLog from './activities/ActivityLog';
import ApplicationContacts from './contacts/ApplicationContacts';
import { getUserData, addContact } from '../../api/users';
// import { addContact } from '../../actions/jobsinformationpage';
import JobDescription from '../job-description/JobDescription';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';
import ContactForm from '../application-forms/ContactForm';
import { Link } from 'react-router-dom';
import { displayContactForm, hideModal } from '../../actions/modals/ModalActions';
import RootModal from '../RootModal';

const JobInformation = createClass({
  displayName: 'JobInformation',
  propTypes: {
    jobApplications: PropTypes.array.isRequired,
    activity: PropTypes.array.isRequired,
    applicationContacts: PropTypes.array.isRequired
  },
  // componentWillMount() {
  //   this.props.getData();
  // },

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
    console.log('job application on info page',jobApplication);
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
    activity: state.jobInformation.jobDetails.activity,
    applicationContacts: state.jobInformation.jobDetails.applicationContacts,
    isModalActive: state.modal.modalType,
    pdfFile: state.jobInformation.jobDetails.jobarchiveurl
  };
};

const mapActionsToProps = {
  addContact: addContact,
  displayContactForm: displayContactForm,
  hideModal: hideModal
};

export default connect(mapStateToProps, mapActionsToProps)(JobInformation);
