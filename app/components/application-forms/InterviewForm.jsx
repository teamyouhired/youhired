import React, { createClass } from 'react';

const InterviewForm = createClass({

  cancelForm() {

    this.companyAddress.value = '';

    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addInterview({
      applicationid: this.props.applicationId,
      companyaddress:  this.companyAddress.value,
    });

    this.companyAddress.value = '';

    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <textarea
          className='form-control'
          ref={companyAddress => { this.companyAddress = companyAddress }}
          placeholder={'Company Address'}
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
