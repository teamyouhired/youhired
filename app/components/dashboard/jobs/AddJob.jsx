import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import PDFParser from "pdf2json";

import { addJob } from '../../../actions/dashboard/DashboardActions';
import { hideModal } from '../../../actions/modals/ModalActions';
// import Popup from 'react-popup';

const AddJob = createClass({
  displayName: 'AddJob',

  propTypes: {
    addJob: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  },

  cancelForm(event) {
    event.preventDefault();

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.jobUrlInput.value = '';

    this.props.hideModal();
  },

  onSubmit(event) {
    event.preventDefault();

    let companyName = this.companyNameInput.value;
    let positionName = this.jobPositionInput.value;
    let jobPostUrl = this.jobUrlInput.value;

    const API_KEY = "g8v5kuA8GXNu";
    const jobUrlPdf  = "http://pdfmyurl.com/api?license="+ API_KEY + "&url=" + this.jobUrlInput.value + " &page_size=A4&orientation=portrait";


    // function fetchBlob(uri, callback) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open('GET', uri, true);
    //   xhr.responseType = 'arraybuffer';

    //   xhr.onload = function(e) {
    //     if (this.status == 200) {
    //       var blob = JSON.parse(this.response);
    //       if (callback) {
    //         callback(blob);
    //       }
    //     }
    //   };
    //   xhr.send();
    // };

    // fetchBlob(jobUrlPdf, function(blob) {
    //   var str = String.fromCharCode.apply(null, new Uint8Array(blob));
    //   console.log(str);

    // });


    // $.ajax(fetchBlob(jobPostUrl, function(blob) {
    //                   var str = String.fromCharCode.apply(null, new Uint8Array(blob));
    //                     return str;
    //                 })
    //               )
    //   .done(file => {
    //     let sfile = JSON.stringify(file)
    //     this.props.addJob({
    //       companyname: companyName,
    //       positionname:  positionName,
    //       jobfile: sfile,
    //       jobposturl: jobPostUrl,
    //       status: status
    //     });
    //   });

    $.ajax(jobUrlPdf)
      .done(file => {
        let sfile = JSON.stringify(file)
        this.props.addJob({
          companyname: companyName,
          positionname:  positionName,
          jobfile: sfile,
          jobposturl: jobPostUrl
        });
      });

    // this.props.addJob({
    //   companyname: this.companyNameInput.value,
    //   positionname:  this.jobPositionInput.value,
    //   jobposturl: this.jobUrlInput.value,
    //   status: this.statusInput.value
    // })
    // .then(() => console.log('these are my props after the request without clearing them out', this));
    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.jobUrlInput.value = '';

    this.props.hideModal();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={nameInput => { this.companyNameInput = nameInput }}
          placeholder={'Company Name'}
        />
        <input
          className='form-control'
          ref={positionInput => { this.jobPositionInput = positionInput }}
          placeholder={'Position'}
        />
        <input
          className='form-control'
          ref={urlInput => { this.jobUrlInput = urlInput }}
          placeholder={'Job Post Url'}
        />
        <button className='button' type='submit'>
          Submit
        </button>
        <button className='button' onClick={this.cancelForm}>
          Cancel
        </button>
      </form>
    );
  }
});

export default AddJob;
