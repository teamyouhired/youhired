import React, { createClass, PropTypes } from 'react';
import Iframe from 'react-iframe';
import ReactPDF from 'react-pdf';

const JobDescription= createClass({
  displayName: 'JobDescription',

  propTypes: {
    //onSubmit: PropTypes.func.isRequired
  },

  render() {
    const {createdat, jobfile } = this.props;
    //let parsejobfile = JSON.parse(jobfile);

//     function b64toBlob(b64Data, contentType, sliceSize) {
//       contentType = contentType || '';
//       sliceSize = sliceSize || 512;

//       var byteCharacters = atob(b64Data);
//       var byteArrays = [];

//       for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//         var slice = byteCharacters.slice(offset, offset + sliceSize);

//         var byteNumbers = new Array(slice.length);
//         for (var i = 0; i < slice.length; i++) {
//           byteNumbers[i] = slice.charCodeAt(i);
//         }

//     var byteArray = new Uint8Array(byteNumbers);


//     function b64toBlob(b64Data, contentType, sliceSize) {
//       contentType = contentType || '';
//       sliceSize = sliceSize || 512;

//       var byteCharacters = atob(b64Data);
//       var byteArrays = [];

//       for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//         var slice = byteCharacters.slice(offset, offset + sliceSize);

//         var byteNumbers = new Array(slice.length);
//         for (var i = 0; i < slice.length; i++) {
//           byteNumbers[i] = slice.charCodeAt(i);
//         }

//     var byteArray = new Uint8Array(byteNumbers);


//     byteArrays.push(byteArray);
//   }

//   var blob = new Blob(byteArrays, {type: contentType});
//   return blob;
// }
// var blob = b64toBlob(jobfile, "text");
// var blobUrl = URL.createObjectURL(blob);

// window.location = blobUrl;


        return (
      <div>
        <div className='jobdesc-heading'>
          <div className="company-details">
            <h4>Job Description</h4>
          </div>
          <div className="jobdesc-scroll-main">


            {/*<ReactPDF file= { blobUrl } />*/}

          </div>
        </div>
      </div>
    );
  }
});

export default JobDescription;



