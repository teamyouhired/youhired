// This file is here for if we take the time to abstract the AddJob component into its own form so that our code can be more modular
// import React, { createClient, PropTypes } from 'react';

const JobApplicationForm = createClass({
  displayName: 'JobApplicationForm',

  propTypes: {
    addJob: PropTypes.func.isRequired
  },

  cancelForm(event) {
    event.preventDefault();

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.jobUrlInput.value = '';

    this.props.changePage({
      activeComponent: 'JobList'
    });
  },

  onSubmit(event) {
    event.preventDefault();

    this.props.addJob({
      companyName: this.companyNameInput.value,
      position:  this.jobPositionInput.value,
      jobPostUrl: this.jobUrlInput.value
    });

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.jobUrlInput.value = '';

    this.props.changePage({
      activeComponent: 'JobList'
    });
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

// export default JobApplicationForm;
