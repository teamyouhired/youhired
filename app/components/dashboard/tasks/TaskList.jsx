import React, { createClass } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TaskList = createClass({
  displayName: 'TaskList',

  render() {
    return (
      <div>
        {this.props.tasks.map(task =>
          <Task
            {...task}
          />
        )}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    tasks: state.dashboard.tasks
  }
}

export default connect(mapStateToProps)(TaskList);