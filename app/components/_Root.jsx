import React, { PropTypes } from 'react';
import Dashboard from './Dashboard';
//may not necessarily be functional based, could be class based

const _Root = (props) => {

  // if (Login is active) {
  //   CurrentPage = Login;
  // }
  return (
    <div>
      <header />
      <div>
        <h3> Congratulations!!! You are hired!</h3>
      <Dashboard />
      </div>
      <footer />
    </div>
  );
};

export default _Root;
