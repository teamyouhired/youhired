import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../actions/DashboardActions';

let AddJob = ({ dispatch }) => {
  let companyNameInput
  let jobStatusInput
  return (
    <form onSubmit={e => {
        e.preventDefault();
        dispatch(addJob({
          companyName: companyNameInput.value,
          status: jobStatusInput.value
        }));

        companyNameInput.value = '';
        jobStatusInput.value = '';

      }}>
      <input
        ref={nameInput => { companyNameInput = nameInput }}
        placeholder={'Company Name'}
      />
      <input
        ref={statusInput => { jobStatusInput = statusInput }}
        placeholder={'Status'}
      />
      <button type="submit">
        Add Job
      </button>
    </form>
  );
}
AddJob = connect()(AddJob)
export default AddJob