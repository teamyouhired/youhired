import React, { createClass } from 'react';
import Activity from './Activity';

const ActivityLog = createClass({
  render() {
    return (
      <div>
        <h2>Activity information goes here</h2>
        {this.props.activities.map((activity, index) =>
          <Activity
            key={index}
            {...activity}
          />
        )}
      </div>
    );
  }
});

export default ActivityLog;
