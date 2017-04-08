import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
//research browser history, hash history, memory history...which might be more useful
import path from 'path';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as reducers from './reducers/reducers';
import _Root from '_Root';
import Login from 'login/Login';
import Signup from 'signup/Signup';
import Splash from 'splashpage/Splash';
import Footer from 'Footer';
import Header from 'Header';
require('app.scss');

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render (
  <Provider store={createStoreWithMiddleware(combineReducers(reducers))}>
    <Router history={browserHistory}>
      <div>
        <nav>
          <Link to="/">Root</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/splash">Splash</Link>
        </nav>
        <Header />
        <hr/>
        <Route exact path='/' component={_Root}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/splash' component={Splash} />
        <Footer />
      </div>
    </Router>
  </Provider>,
    document.getElementById('root')
);




















