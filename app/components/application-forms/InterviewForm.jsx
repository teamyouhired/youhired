import React, { createClass } from 'react';

const InterviewForm = createClass({

  cancelForm() {

    this.companyAddress.value = '';
    this.companyState.value = '';
    this.companyCity.value = '';
    this.companyZip.value = '';

    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addInterview({
      applicationid: this.props.applicationId,
      companyaddress:  this.companyAddress.value,
      companycity: this.companyCity.value,
      companystate: this.companyState.value,
      companyzip: this.companyZip.value
    });

    this.companyAddress.value = '';
    this.companyState.value = '';
    this.companyCity.value = '';
    this.companyZip.value = '';

    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <input
          className='form-control'
          ref={companyAddress => { this.companyAddress = companyAddress }}
          placeholder={'Company Address'}
        />
        <input
          className='form-control'
          ref={companyCity => { this.companyCity = companyCity }}
          placeholder={'City'}
        />
        <input
          className='form-control'
          ref={companyState => { this.companyState = companyState }}
          placeholder={'State'}
          maxLength={2}
        />
        <input
          className='form-control'
          ref={companyZip => { this.companyZip = companyZip }}
          placeholder={'Zip Code'}
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
