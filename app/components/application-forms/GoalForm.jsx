import React, { createClass } from 'react';

const GoalForm = createClass({

  cancelForm() {
    // close modal and clear all fields
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addGoal({
      ApplicationId: this.ApplicationId.value,
      goal:  this.goal.value
    });

    this.ApplicationId.value = '';
    this.goal.value = '';
    // need to close the modal now
  },

  render() {
    // goal number
    // type drop down of selectable statuses
    // date completed by
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={ApplicationId => { this.ApplicationId = ApplicationId }}
          placeholder={'Application ID'}
        />
        <input
          className='form-control'
          type='number'
          ref={goal => { this.goal = goal }}
          placeholder={'Number of applications to fill out'}
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

export default GoalForm;
