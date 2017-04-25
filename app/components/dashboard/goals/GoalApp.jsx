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

const spanishDayLabels = ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'];
const spanishMonthLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const wapperDivStyle = { border: '1px solid #ccc' };
const scrollingDivStyle = { padding: '10px', height: '70px', overflow: 'auto' };

const GoalApp = createClass({
  displayName: 'GoalApp',

  onAddGoal(event) {
    console.log('click event triggered');
    this.props.displayGoalForm({
      formType: 'DISPLAY_GOAL_FORM',
      modalProps: {
        addGoal: this.props.addGoal,
        hideModal: this.props.hideModal
      }
    });
  },

  render() {
    //const { goalsDone, totalGoal } = this.props;
    let goalsDone = 40;
    let totalGoal = 100;
    return (
      <div>
        <ProgressBar striped bsStyle='success' now={(goalsDone / totalGoal) * 100} />
        <button id='job-info-button' className='button' onClick={this.onAddGoal} >
            Add Goal
        </button>
      </div>
    );

    // return (
    //   <div className='goal-card'>
    //       <div className="goal-title">
    //         <p className="goal-title"><b>GOAL: </b>Submit Job Applications</p>
    //       </div>
    //     <div className="date-container">
    //       <div className="start-date">
    //       <FormGroup >
    //         <ControlLabel>Start Date</ControlLabel>
    //         <DatePicker placeholder="Placeholder" calendarPlacement="bottom"  className="form-custom"/>
    //       </FormGroup>
    //       </div>
    //       <div className="end-date">
    //       <FormGroup >
    //         <ControlLabel>End Date</ControlLabel>
    //         <DatePicker placeholder="Placeholder" calendarPlacement="bottom" className="form-custom"/>
    //       </FormGroup>
    //       </div>
    //     </div>
    //     <div className="goal-main-input">

    //       <div className="goal-card-input">
    //         <div className="goal-label">Current</div>
    //         <div className="goal-input">10</div>
    //         <button type="button" className="button-edit">RESET</button>
    //       </div>

    //       <div className="goal-card-goal">
    //         <div className="goal-label">Target</div>
    //         <div className="goal-input">10</div>
    //         <button type="button" className="button-edit">EDIT</button>
    //       </div>

    //       <div className="goal-card-smlgrph">
    //         <div className="goal-graph">
    //           <SmallChart />
    //         </div>
    //       </div>

    //       <button id='job-info-button' className='button' onClick={this.onAddGoal} >
    //         Add Goal
    //       </button>

    //     </div>
    //   </div>
    // );
  }

});

export default GoalApp;
