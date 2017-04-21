import React, { createClass } from 'react';

const ActivityForm = createClass({
  cancelForm() {
    //this.activityType.value = '';
    this.description.value = '';
    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();
    console.log(this.props.applicationId);
    this.props.addActivity({
      applicationid: this.props.applicationId,
      //activityType:  this.activityType.value,
      activitylogcontent:  this.description.value
    });

    //this.activityType.value = '';
    this.description.value = '';
    this.props.hideModal();
  },
  /*
    Right now only one status, need to revisit later
    make type a dropdown with following options:
    NOTE
  */
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {/*<input
            className='form-control'
            type='number'
            ref={activityType => { this.activityType = activityType }}
            placeholder={'Number of applications to fill out'}
          />*/}
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
