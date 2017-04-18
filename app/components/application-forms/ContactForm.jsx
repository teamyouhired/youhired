import React, { createClass } from 'react';

const ContactForm = createClass({

  cancelForm() {
    // close modal and clear all fields
    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addContact({
      companyName: this.companyNameInput.value,
      position:  this.jobPositionInput.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phoneNumber: this.phoneNumber.value,
      email: this.email.value,
      address: this.address.value,
      city: this.city.value,
      state: this.state.value,
      zip: this.zip.value
    });

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.statusInput.value = '';
    this.jobUrlInput.value = '';
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
