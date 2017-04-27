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
        <div className="progress-bar-custom">
          <h4 className="goal-type">{type}</h4>
          <h4 className="goal-goal">{`Goal: ${goal}`}</h4>
        </div>
          <ProgressBar striped bsStyle='success' now={(progress / goal) * 100} />
      </div>
    );
  }
});

export default GoalProgressBar;
