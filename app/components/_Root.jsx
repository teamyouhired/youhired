import React, { PropTypes } from 'react';
import Dashboard from './dashboard/Dashboard';
import Header from 'header';
import Footer from 'footer';
//may not necessarily be functional based, could be class based

const _Root = (props) => {

  // if (Login is active) {
  //   CurrentPage = Login;
  // }
  return (
    <div>
      <div>
        <h3> Congratulations!!! You are hired!</h3>
      <Dashboard />
      </div>
    </div>
  );
};

export default _Root;
