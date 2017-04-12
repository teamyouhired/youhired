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
        <h4>{contactfirstname + ' ' + contactlastname}</h4>
        <p>{contactemail}</p>
        <p>{contactphonenumber}</p>
        <p>{contactcompany}</p>
        <p>{contactpositiontitle}</p>
        <hr/>
      </div>
    );
  }
});

export default Contact;
