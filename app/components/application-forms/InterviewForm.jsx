import React, { createClass } from 'react';

const InterviewForm = createClass({

  cancelForm() {
    // close modal and clear all fields
    this.props.hideModal();
  },
   // companyCity
  // companyState
  // companyZip
  // Date and Time
  onSubmit(event) {
    event.preventDefault();
    this.props.addInterview({
      applicationID: this.applicationID.value,
      offerSalary:  this.companyAddress.value,
      offerOptions: this.offerOptions.value,
      offerBenefits: this.offerBenefits.value
    });

    this.applicationID.value = '';
    this.companyAddress.value = '';
    this.offerOptions.value = '';
    this.offerBenefits.value = '';
    // need to close the modal now
    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={idInput => { this.applicationID = idInput }}
          placeholder={'Application ID'}
        />
        <input
          className='form-control'
          ref={companyAddress => { this.companyAddress = companyAddress }}
          placeholder={'Company Address'}
        />
        <input
          className='form-control'
          ref={offerOptions => { this.offerOptions = offerOptions }}
          placeholder={'Options'}
        />
        <input
          className='form-control'
          ref={offerBenefits => { this.offerBenefits = offerBenefits }}
          placeholder={'Benefits'}
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

export default InterviewForm;
