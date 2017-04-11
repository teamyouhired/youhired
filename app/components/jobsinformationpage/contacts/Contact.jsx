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
      <div>
        <h2>{contactfirstname + contactlastname}</h2>
        <h3>{contactemail}</h3>
        <h3>{contactphonenumber}</h3>
        <h6>{contactcompany}</h6>
        <h6>{contactpositiontitle}</h6>
        <br/>
      </div>
    );
  }
});

export default Contact;
