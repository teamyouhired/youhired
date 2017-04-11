import React, { createClass, PropTypes } from 'react';

const Task = createClass({
  displayName: 'Task',

  render() {
    const {
      createdat,
      activitylogcontent
    } = this.props;
    return (
      <div>
        <div className='card-horizontal'>
          <h5 className='description'>{activitylogcontent}</h5>
          <br/>
          <h6 className='date-due'>{createdat}</h6>
        </div>
      </div>
    );
  }
});

export default Task;