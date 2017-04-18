import React, { createClass } from 'react';

const TaskForm = createClass({
  cancelForm() {
      // close modal and clear all fields
    },

    onSubmit(event) {
      event.preventDefault();
      this.props.addGoal({
        ApplicationId: this.ApplicationId.value,
        activityType:  this.activityType.value,
        description:  this.description.value
      });

      this.ApplicationId.value = '';
      this.activityType.value = '';
      this.description.value = '';
      // need to close the modal now
    },

    render() {
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
            ref={activityType => { this.activityType = activityType }}
            placeholder={'Number of applications to fill out'}
          />
          <input
            className='form-control'
            type='number'
            ref={description => { this.description = description }}
            placeholder={'Description'}
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

export default TaskForm;
