import React, { createClass } from 'react';

const ContactForm = createClass({

  cancelForm() {
    // close modal and clear all fields
    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addContact({
      applicationid: this.props.applicationId,
      contactcompany: this.companyNameInput.value,
      contactpositiontitle:  this.jobPositionInput.value,
      contactfirstname: this.firstName.value,
      contactlastname: this.lastName.value,
      contactphonenumber: this.phoneNumber.value,
      contactemail: this.email.value,
      contactaddress: this.address.value,
      contactcity: this.city.value,
      contactstate: this.state.value,
      contactzip: this.zip.value
    });

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.firstName.value = '';
    this.lastName.value = '';
    this.phoneNumber.value = '';
    this.email.value = '';
    this.address.value = '';
    this.city.value = '';
    this.state.value = '';
    this.zip.value = '';
    // need to close the modal now
    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={firstName => { this.firstName = firstName }}
          placeholder={'First Name'}
        />
        <input
          className='form-control'
          ref={lastName => { this.lastName = lastName }}
          placeholder={'Last Name'}
        />
        <input
          className='form-control'
          ref={nameInput => { this.companyNameInput = nameInput }}
          placeholder={'Company Name'}
        />
        <input
          className='form-control'
          ref={positionInput => { this.jobPositionInput = positionInput }}
          placeholder={'Job Position'}
        />
        <input
          className='form-control'
          ref={phoneNumber => { this.phoneNumber = phoneNumber }}
          placeholder={'Phone Number'}
        />
        <input
          className='form-control'
          ref={email => { this.email = email }}
          placeholder={'Email'}
        />
        <input
          className='form-control'
          ref={address => { this.address = address }}
          placeholder={'Address'}
        />
        <input
          className='form-control'
          ref={city => { this.city = city }}
          placeholder={'City'}
        />
        <input
          className='form-control'
          ref={state => { this.state = state }}
          placeholder={'State'}
          maxLength={2}
        />
        <input
          className='form-control'
          ref={zip => { this.zip = zip }}
          placeholder={'Zip code'}
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

export default ContactForm;
