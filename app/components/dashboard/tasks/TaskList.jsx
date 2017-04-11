import React, { createClass } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TaskList = createClass({
  displayName: 'TaskList',

  render() {
    return (
      <div className='task-list'>
        {this.props.activity.map((task, index) =>
          <Task
            key={index}
            {...task}
          />
        )}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    activity: state.dashboard.activity
  }
}

export default connect(mapStateToProps)(TaskList);