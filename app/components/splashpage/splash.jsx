import React, { createClass, Component } from 'react';

const Splash = createClass({
  render () {
    return (<div>
      <header className="business-header">
        <div>
          <div className="row">
            <div className="col-lg-12">
                <h1 className="tagline">youHireLOGO</h1>
            </div>
          </div>
        </div>
      </header>

      <div>

      <hr/>

      <div className="row position-absolute">
        <div className="col-sm-4 ">
          <img className="img-circle img-responsive img-center" src={require("./images/1.jpg")} alt="" />
                <h2 className="text-center">ABOUT US</h2>

        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                <h2 className="text-center">SERVICES</h2>

        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
            <h2 className="text-center">SEARCH NOW</h2>

        </div>
      </div>

      <hr/>

      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright &copy; Your Website 2014</p>
          </div>
        </div>
      </footer>


    </div>
  </div>);
  }
});

export default Splash;
