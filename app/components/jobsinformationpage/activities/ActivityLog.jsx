import React, { createClass } from 'react';
import ScrollArea from 'react-scrollbar';
import Activity from './Activity';

const ActivityLog = createClass({
  render() {
    return (
        <ScrollArea
          speed={0.8}
          className='activity-log'
          horizontal={false}>
          {this.props.activities.map((activity, index) =>
            <Activity
              key={index}
              {...activity}
            />
          )}
        </ScrollArea>
    );
  }
});

export default ActivityLog;
