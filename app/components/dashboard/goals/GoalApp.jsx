import React, { createClass, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Navbar, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import DatePicker from '../../datepick';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
//import style from "../../../styles";



const spanishDayLabels = ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'];
const spanishMonthLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const wapperDivStyle = { border: '1px solid #ccc' };
const scrollingDivStyle = { padding: '10px', height: '70px', overflow: 'auto' };

const GoalApp = createClass({
  displayName: 'GoalApp',
  getInitialState() {
    return {
      date: new Date().toISOString(),
      previousDate: null,
      minDate: null,
      maxDate: null,
      focused: false
    };
  },
  handleChange(value) {
    this.setState({
      date: value
    });
  },
  handleMinChange(value) {
    this.setState({
      minDate: value
    });
  },
  handleMaxChange(value) {
    this.setState({
      maxDate: value
    });
  },
  handlePlacement() {
    return 'top';
  },
  handleRandomPlacement() {
    const placementKey = Math.floor((Math.random()*4) + 1);
    switch (placementKey) {
      case 1:
        return 'top';
      case 2:
        return 'left';
      case 4:
        return 'right';
      default:
        return 'bottom';
    }
  },
  render() {
    return (
      <div className='goal-card'>
          <div className="goal-title">
            <p className="goal-title"><b>GOAL: </b>Submit Job Applications</p>
          </div>
        <div className="date-container">
          <div className="start-date">
          <FormGroup >
            <ControlLabel>Start Date</ControlLabel>
            <DatePicker placeholder="Placeholder" calendarPlacement="bottom" className="form-custom"/>
          </FormGroup>
          </div>
          <div className="end-date">
          <FormGroup >
            <ControlLabel>End Date</ControlLabel>
            <DatePicker placeholder="Placeholder" calendarPlacement="bottom" className="form-custom"/>
          </FormGroup>
          </div>
        </div>
        <div className="goal-main-input">

          <div className="goal-card-input">
            <div className="goal-label">Current</div>
            <div className="goal-input">10</div>
            <button type="button" className="button-edit">RESET</button>
          </div>

          <div className="goal-card-goal">
            <div className="goal-label">Target</div>
            <div className="goal-input">10</div>
            <button type="button" className="button-edit">EDIT</button>
          </div>

          <div className="goal-card-smlgrph">
            <div className="goal-graph">Graph</div>
          </div>

        </div>
      </div>
    );
  }

});

export default GoalApp;



