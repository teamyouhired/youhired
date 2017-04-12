import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard/Dashboard';
import JobInformation from './jobsinformationpage/JobInformation';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';

//may not necessarily be functional based, could be class based

const _Root = createClass({
  displayName: 'Root',

  propTypes: {
    activeComponent: PropTypes.string.isRequired
  },

  render() {
    const { activeComponent } = this.props;

    let currentComponent = null;
    if (activeComponent === 'jobInformation') {
      console.log('jobinfo should render');
      currentComponent = <JobInformation />;
    } else if (activeComponent === 'Dashboard') {
      console.log('dashboard should render');
      currentComponent = <Dashboard />;
    }
    return (

      <div className="root-view">
        <div>
        <HeaderComponent />
        </div>

        <div className="root-main">
          <h1> Current Job Applications </h1>
        {currentComponent}
        </div>

        <div className="root-footer">
          <FooterComponent />
        </div>

      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    activeComponent: state.navigation.activeComponent
  };
};

export default connect(mapStateToProps)(_Root);
