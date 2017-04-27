import React, { createClass } from 'react';
import { connect } from 'react-redux';
import { updateStatus, getData } from '../../api/users';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const UpdateStatus = createClass({
  displayName: 'updateStatusForm',

  selectStatus(event) {
    this.props.updateStatus({
      applicationid: this.props.applicationId,
      status: event
    })
    .then(this.props.getData());
  },

  render() {
    return (
      <DropdownButton className='button' title='Status' onSelect={this.selectStatus} >
        <MenuItem eventKey='OFFER'>Offer</MenuItem>
        <MenuItem eventKey='INTERVIEW'>Interview</MenuItem>
        <MenuItem eventKey='INFO INTERVIEW'>Info Interview</MenuItem>
        <MenuItem eventKey='APPLIED'>Applied</MenuItem>
      </DropdownButton>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    applicationId: state.jobInformation.jobDetails.applicationid
  }
};

const mapActionsToProps = {
  updateStatus: updateStatus,
  getData: getData
};

export default connect(mapStateToProps, mapActionsToProps)(UpdateStatus);
