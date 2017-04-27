import React, { createClass } from 'react';

const Activity = createClass({
  render() {
    const { activitylogcontent, createdat } = this.props;
    return (
        <div className='activity'>
          <p className='activity-date'><b>Creation Date:</b> {createdat}</p>
          <p className='activity-description'>{activitylogcontent}</p>
        </div>
    );
  }
});

export default Activity;
