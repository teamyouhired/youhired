import React, { createClass } from 'react';

const ContactForm = createClass({

  cancelForm() {
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
    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={firstName => { this.firstName = firstName }}
          placeholder={'First Name'}
          required
        />
        <input
          className='form-control'
          ref={lastName => { this.lastName = lastName }}
          placeholder={'Last Name'}
          required
        />
        <input
          className='form-control'
          ref={nameInput => { this.companyNameInput = nameInput }}
          placeholder={'Company Name'}
          required
        />
        <input
          className='form-control'
          ref={positionInput => { this.jobPositionInput = positionInput }}
          placeholder={'Job Position'}
          required
        />
        <input
          className='form-control'
          ref={phoneNumber => { this.phoneNumber = phoneNumber }}
          placeholder={'Phone Number'}
          required
        />
        <input
          className='form-control'
          ref={email => { this.email = email }}
          placeholder={'Email'}
          required
        />
        <input
          className='form-control'
          ref={address => { this.address = address }}
          placeholder={'Address'}
          required
        />
        <input
          className='form-control'
          ref={city => { this.city = city }}
          placeholder={'City'}
          required
        />
        <input
          className='form-control'
          ref={state => { this.state = state }}
          placeholder={'State'}
          maxLength={2}
          required
        />
        <input
          className='form-control'
          ref={zip => { this.zip = zip }}
          placeholder={'Zip code'}
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

export default ContactForm;
