import React, { createClass } from 'react';

const Activity = createClass({
  render() {
    const { activitylogcontent, createdat } = this.props;
    return (
      <div>
        <div className='activity'>
          <div className="action-head">
          <p className="activity-action"><b>Action:</b> Applied</p>
          <p className='activity-date'><b>Creation Date:</b> {createdat}</p>
          </div>
          <p className='activity-description'>{activitylogcontent}</p>
        </div>
      </div>
    );
  }
});

export default Activity;
