import React, { PropTypes } from 'react';
import Dashboard from './Dashboard';
//may not necessarily be functional based, could be class based

const _Root = (props) => {

  // if (Login is active) {
  //   CurrentPage = Login;
  // }
  return (
    <div>
      <h3> Congratulations!!! You are hired??????</h3>
      <Dashboard />
      {
      // <Header />
      // <CurrentPage />
      // <Footer />
      }
    </div>
  );
};

export default _Root;
