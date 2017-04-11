import React, { createClass } from 'react';

const Activity = createClass({
  render() {
    const { activitylogcontent, createdat } = this.props;
    return (
      <div>
        <div className='activity'>
          <h4 className='activity-date'>{createdat}</h4>
          <h5 className='activity-description'>{activitylogcontent}</h5>
        </div>
      </div>
    );
  }
});

export default Activity;
