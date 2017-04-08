import React, { createClass } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addJob } from '../../../actions/dashboard/DashboardActions';


const AddJob = createClass({
  displayName: 'AddJob',

  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addJob({
      companyName: this.companyNameInput.value,
      status: this.jobStatusInput.value
    }));
    this.companyNameInput.value = '';
    this.jobStatusInput.value = '';
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          ref={nameInput => { this.companyNameInput = nameInput }}
          placeholder={'Company Name'}
        />
        <input
          ref={statusInput => { this.jobStatusInput = statusInput }}
          placeholder={'Status'}
        />
        <button type="submit">
          Add Job
        </button>
      </form>
    );
  }
});


// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({

//   })
// }

export default connect()(AddJob)
