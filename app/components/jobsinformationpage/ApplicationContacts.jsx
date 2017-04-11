import React, { createClass } from 'react';

const ApplicationContacts = createClass({
  render() {
    return (
      <div>
        <h2>Application contact information goes here</h2>
        {this.props.map((contact, index) =>
          <Contact
            key={index}
            {...contact}
          />
        )}
      </div>
    );
  }
});

const mapStateToProps = {
  return {
    userData.applicationContacts: state.jobinformation.userData.applicationContacts
  };
};

export default ApplicationContacts;
