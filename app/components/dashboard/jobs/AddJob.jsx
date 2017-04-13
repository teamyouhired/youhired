import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addJob } from '../../../actions/dashboard/DashboardActions';
// import Popup from 'react-popup';

const AddJob = createClass({
  displayName: 'AddJob',

  propTypes: {
    addJob: PropTypes.func.isRequired
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
    })
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
      </form>
    );
  }
});

export default AddJob;
