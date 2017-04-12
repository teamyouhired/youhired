import React, { createClass } from 'react';
import ScrollArea from 'react-scrollbar';
import Activity from './Activity';

const ActivityLog = createClass({
  render() {
    return (
      <div className='activity-log'>
        <div className="activity-title">
          <h4 className="act-title-text">Activity Log</h4>
        </div>
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
