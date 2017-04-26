import React, { createClass } from 'react';

const ActivityForm = createClass({
  cancelForm() {
    this.description.value = '';
    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();

    this.props.addActivity({
      applicationid: this.props.applicationId,
      activitylogcontent:  this.description.value
    });

    this.description.value = '';
    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea
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

export default ActivityForm;
