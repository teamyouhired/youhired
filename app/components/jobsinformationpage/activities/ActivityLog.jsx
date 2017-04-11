import React, { createClass } from 'react';
import ScrollArea from 'react-scrollbar';
import Activity from './Activity';

const ActivityLog = createClass({
  render() {
    return (
      <div className='activity-log'>
        <h1>Activity Log</h1>
        <ScrollArea
          speed={0.8}
          className='activity-scroll'
          horizontal={false}>
          {this.props.activities.map((activity, index) =>
            <Activity
              key={index}
              {...activity}
            />
          )}
        </ScrollArea>
      </div>
    );
  }
});

export default ActivityLog;
