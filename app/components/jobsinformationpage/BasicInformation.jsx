import React, { createClass } from 'react';

// var pdf = require('../lib/pdfcrowd');
// var assert = require('assert');

// credentials = require('./config').Credentials;
// credentials.username = "rfreude"
// credentials.apikey = "897e863f45bef4b9c0e81856b9803284"


// myPdfcrowd = new pdf.Pdfcrowd(credentials.username,
//                               credentials.apikey,
//                               credentials.host);

// var apiOptions =  {
//     width: "11in",
//     height: "8.5in",
//     vmargin: ".4in",
//     footer_html: '<div style=text-align:center;font-size:smaller;color:maroon;">\
//                               Page %p out of %n\
//                           </div>'
// };

// assert.throws(function() { myPdfcrowd.convertHtml(""); });
// assert.throws(function() { myPdfcrowd.convertURI(null); });

// function out_stream(name) {
//     return pdf.saveToFile("../test_files/out/node_client_" + name);
// }

// myPdfcrowd.convertFile("sample.html.zip", out_stream("zfile.pdf"), apiOptions);
// myPdfcrowd.convertHtml("raw code", out_stream("html.pdf"));
// myPdfcrowd.convertURI("http://example.com", out_stream("url.pdf"));
// myPdfcrowd.convertFile("sample.html", out_stream("file.pdf"));
// myPdfcrowd.convertHtml('footer example', out_stream("footer.pdf"), apiOptions);



const BasicInformation = createClass({
  render() {
    const { details } = this.props;
    return (
      <div className="top-divs">
        <div className='basic-heading'>
          <div className="company-details">
            <h4>{details.companyname}</h4>
          </div>
          <div className="offer-details" >
            <h4>{details.positionname}</h4>
          </div>
          <div className="creation-date">
            <h4>Creation Date</h4>
          </div>
        </div>
        <div className='basic-information'>
          <div className="company-info">
            <p>{details.companyaddress}</p>
            <p>{details.companystate + ', ' + details.companyzip}</p>
          </div>
          <div className="offer-info" >
          </div>
          <div className="creation-info">
            <p>{details.createdat}</p>
          </div>
        </div>

        <div className="details">
          <div className="position-details">
            <h4>Position Details</h4>
          </div>
          <div className="job-url">
            <h4>Description</h4>
          </div>
        </div>
        <div className="details-info">
          <div className="position-details-info">
            <p><b>Salary:</b>  ${details.offersalary}</p>
            <p><b>Offer Options:</b>  {details.offeroptions}</p>
            <p><b>Benefits:</b>  {details.offerbenefits}</p>
          </div>
          <div className="job-url-info">
            <p>{details.jobsposturl}</p>
          </div>
        </div>
      </div>

    );
  }
});

export default BasicInformation;





