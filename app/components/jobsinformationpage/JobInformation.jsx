import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicInformation from './BasicInformation';
import ActivityLog from './activities/ActivityLog';
import ApplicationContacts from './contacts/ApplicationContacts';
import { getUserData, addContact } from '../../api/users';
// import { addContact } from '../../actions/jobsinformationpage';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';
import ContactForm from '../application-forms/ContactForm';
import { Link } from 'react-router-dom';
import { displayContactForm, hideModal } from '../../actions/modals/ModalActions';
import RootModal from '../RootModal';


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
              company={companies[0]} />
            <ActivityLog
              activities={activity} />
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
    companies: state.jobInformation.companies,
    activity: state.jobInformation.activity,
    applicationContacts: state.jobInformation.applicationContacts,
    isModalActive: state.modal.modalType
  };
};

const mapActionsToProps = {
  addContact: addContact,
  displayContactForm: displayContactForm,
  hideModal: hideModal
};

export default connect(mapStateToProps, mapActionsToProps)(JobInformation);
