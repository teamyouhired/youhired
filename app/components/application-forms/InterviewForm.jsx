import React, { createClass } from 'react';
import { connect } from 'react-redux';
import 'react-date-picker/index.css';
import { TransitionView, Calendar } from 'react-date-picker';
import { changeDate } from '../../actions/jobsinformationpage/JobInformationActions';
import moment from 'moment';

const InterviewForm = createClass({
  displayName: 'InterviewForm',

  cancelForm() {
    this.companyAddress.value = '';
    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addInterview({
      applicationid: this.props.applicationId,
      companyaddress:  this.companyAddress.value,
      interviewdatetime: this.props.currentDate
    })
    .then(() => {
      this.props.changeDate({
        startDate: moment()
      });
    });

    this.companyAddress.value = '';
    this.props.hideModal();
  },

  changeDate(dateString, { dateMoment, timestamp }) {

    let newDate = new Date();
    let timezone = newDate.getTimezoneOffset() / 60;

    this.props.changeDate({
      currentDate: dateString + ' - ' + timezone
    });
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TransitionView>
          <Calendar
            dateFormat="DD/MM/YYYY HH:mm"
            defaultDate={this.props.startDate}
            onChange={this.changeDate}
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

const mapStateToProps = (state) => {
  return {
    startDate: state.datePicker.startDate,
    currentDate: state.datePicker.currentDate
  };
};

const mapActionsToProps = {
  changeDate: changeDate
};

export default connect(mapStateToProps, mapActionsToProps)(InterviewForm);
