import React, { PropTypes } from 'react';
import Dashboard from './dashboard/Dashboard';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';

//may not necessarily be functional based, could be class based

const _Root = (props) => {

  // if (Login is active) {
  //   CurrentPage = Login;
  // }
  return (
    <div className="root-view">
      <div>
      <HeaderComponent />
      </div>

      <div className="root-main">
        <h3> Congratulations!!! You are hired!</h3>
      <Dashboard />
      </div>

      <div className="root-footer">
        <FooterComponent />
      </div>

    </div>
  );
};

export default _Root;
