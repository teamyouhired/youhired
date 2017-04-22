import React, { createClass } from 'react';
import 'react-date-picker/index.css';
import { TransitionView, Calendar } from 'react-date-picker';
import moment from 'moment';

const InterviewForm = createClass({
  displayName: 'InterviewForm',

  getInitialState () {
    return {
      startDate: moment(),
      dateString: ''
    }
  },

  cancelForm() {
    this.companyAddress.value = '';
    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addInterview({
      applicationid: this.props.applicationId,
      companyaddress:  this.companyAddress.value,
      datestring: this.state.dateString
    });

    this.companyAddress.value = '';
    this.props.hideModal();
  },

  handleChange(dateString, { dateMoment, timestamp }) {
    this.setState({
      startDate: dateMoment,
      dateString: dateString
    });
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TransitionView>
          <Calendar
            dateFormat="DD/MM/YYYY HH:mm"
            defaultDate={this.state.startDate}
            onChange={this.handleChange}
          />
        </TransitionView>
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
