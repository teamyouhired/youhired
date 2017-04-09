import React, { createClass, Component } from 'react';

const Splash = createClass({
  render () {
    return (<div>
      <header className="business-header">
        <div>
          <div className="row">
            <div className="col-lg-12">
                <h1 className="tagline">Business Name or Tagline</h1>
            </div>
          </div>
        </div>
      </header>

      <div>

      <hr/>

      <div className="row">
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                <h2>Marketing Box #1</h2>
                <p>These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold.</p>
        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                <h2>Marketing Box #2</h2>
                <p>The images are set to be circular and responsive. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
            <h2>Marketing Box #3</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
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
