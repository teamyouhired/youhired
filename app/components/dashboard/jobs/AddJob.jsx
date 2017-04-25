import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import Base64 from 'base-64'
//import PDFParser from "pdf2json";

import { addJob } from '../../../actions/dashboard/DashboardActions';
import { hideModal } from '../../../actions/modals/ModalActions';
// import Popup from 'react-popup';

const AddJob = createClass({
  displayName: 'AddJob',

  propTypes: {
    addJob: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  },

  cancelForm(event) {
    event.preventDefault();

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.jobUrlInput.value = '';

    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();

    let companyName = this.companyNameInput.value;
    let positionName = this.jobPositionInput.value;
    let jobPostUrl = this.jobUrlInput.value;

    this.props.addJobDescription({jobPostUrl: jobPostUrl})

    this.props.addJob({
      companyname: this.companyNameInput.value,
      positionname:  this.jobPositionInput.value,
      jobposturl: this.jobUrlInput.value,
      //status: this.statusInput.value
    })

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.jobUrlInput.value = '';

    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={nameInput => { this.companyNameInput = nameInput }}
          placeholder={'Company Name'}
        />
        <input
          className='form-control'
          ref={positionInput => { this.jobPositionInput = positionInput }}
          placeholder={'Position'}
        />
        <input
          className='form-control'
          ref={urlInput => { this.jobUrlInput = urlInput }}
          placeholder={'Job Post Url'}
        />
        <button className='button' type='submit'>
          Submit
        </button>
        <button className='button' onClick={this.cancelForm}>
          Cancel
        </button>
      </form>
    );
  }
});

export default AddJob;
