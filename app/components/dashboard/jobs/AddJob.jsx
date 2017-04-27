import React, { createClass, PropTypes } from 'react';
import { addJob } from '../../../actions/dashboard/DashboardActions';
import { hideModal } from '../../../actions/modals/ModalActions';

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

    this.props.addJobDescription({jobPostUrl: this.jobUrlInput.value})

    this.props.addJob({
      companyname: this.companyNameInput.value,
      positionname:  this.jobPositionInput.value,
      jobposturl: this.jobUrlInput.value,
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
          required
        />
        <input
          className='form-control'
          ref={positionInput => { this.jobPositionInput = positionInput }}
          placeholder={'Position'}
          required
        />
        <input
          className='form-control'
          ref={urlInput => { this.jobUrlInput = urlInput }}
          placeholder={'Job Post Url'}
          required
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
