import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactList from './ContactList';

const ContactPage = createClass({
  displayName: 'ContactPage',

  propTypes: {
    contacts: PropTypes.array.isRequired
  },

  componentWillMount() {
  },

  render() {
    const {
      contacts
    } = this.props;
    return (
      <div>
        <ContactList
          contacts={contacts}
        />
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    contacts: state.dashboard.contacts
  };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ContactPage);
