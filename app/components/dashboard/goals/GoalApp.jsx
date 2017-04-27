import React, { createClass, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Navbar, Button, ProgressBar } from 'react-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import DatePicker from '../../datepick';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import SmallChart from './SmallChart';
import PieOverall from './PieOverall';
import AppChart from './AppChart';
import GoalProgressBar from './GoalProgressBar';
import map from 'lodash/map';

const spanishDayLabels = ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'];
const spanishMonthLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const wapperDivStyle = { border: '1px solid #ccc' };
const scrollingDivStyle = { padding: '10px', height: '70px', overflow: 'auto' };

const GoalApp = createClass({
  displayName: 'GoalApp',

  onAddGoal(event) {
    this.props.displayGoalForm({
      formType: 'DISPLAY_GOAL_FORM',
      modalProps: {
        addGoal: this.props.addGoal,
        hideModal: this.props.hideModal
      }
    });
  },

  render() {
    const { goals } = this.props;

    return (
      <div className='goal-container'>
        { map(goals, (goal, type) =>
            <GoalProgressBar
              progress={goal.progress}
              goal={goal.goalTotal}
              type={type}
            />
          )}
        <button className='goal-info-button button' onClick={this.onAddGoal} >
            Add Goal
        </button>
      </div>
    );
  }
});

export default GoalApp;
