import React, { createClass } from 'react';

const JobOfferForm = createClass({

  cancelForm() {

    this.offerSalary.value = '';
    this.offerOptions.value = '';
    this.offerBenefits.value = '';

    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addJobOffer({
      applicationid: this.props.applicationId,
      offersalary:  this.offerSalary.value,
      offeroptions: this.offerOptions.value,
      offerbenefits: this.offerBenefits.value
    });

    this.offerSalary.value = '';
    this.offerOptions.value = '';
    this.offerBenefits.value = '';

    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={offerSalary => { this.offerSalary = offerSalary }}
          placeholder={'Salary'}
        />
        <input
          className='form-control'
          ref={offerOptions => { this.offerOptions = offerOptions }}
          placeholder={'Options'}
        />
        <textarea
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

export default JobOfferForm;
