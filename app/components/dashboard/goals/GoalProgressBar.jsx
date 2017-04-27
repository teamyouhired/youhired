import React, { createClass, PropTypes } from 'react';
import { ProgressBar } from 'react-bootstrap';

const GoalProgressBar = createClass({
  displayName: 'GoalProgressBar',

  proptypes: {
    progress: PropTypes.number.isRequired,
    goal: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  },

  render() {
    const { progress, goal, type } = this.props;
    return (
      <div className="goal-progress-bar-list" >
        <h4>{type}</h4>
        <h4>{goal}</h4>
        <ProgressBar className="progress-bar-custom" striped bsStyle='success' now={(progress / goal) * 100} />
      </div>
    );
  }
});

export default GoalProgressBar;
