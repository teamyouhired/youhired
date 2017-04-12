import React, { createClass } from 'react';

const Contact = createClass({
  render() {
    const {
      contactfirstname,
      contactlastname,
      contactcompany,
      contactpositiontitle,
      contactphonenumber,
      contactemail
    } = this.props;
    return (
      <div className="app-contacts">
        <div id="contact-name-box">
          <h4 id="contact-name-txt">{contactfirstname + ' ' + contactlastname}</h4>
        </div>
        <div className="contact-text">
          <p>{contactemail}</p>
          <p>{contactphonenumber}</p>
          <p>{contactcompany}</p>
          <p>{contactpositiontitle}</p>
        </div>
      </div>
    );
  }
});

export default Contact;
