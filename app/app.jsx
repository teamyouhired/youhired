import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
//research browser history, hash history, memory history...which might be more useful
import path from 'path';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as reducers from './reducers/reducers';
import _Root from '_Root';
import JobInformation from './components/jobsinformationpage/JobInformation';
import Login from 'login/Login';
import Signup from 'signup/Signup';
import Splash from 'splashpage/splash';
import FooterComponent from 'Footer';
import HeaderComponent from 'Header';
import About from 'about-us/about-us';
import Services from 'services/services';
require('app.scss');
require('styles.css');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(combineReducers(reducers), enhancer);

ReactDOM.render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <div className="container-fluid root-background">
        <nav>
          <Link to="/">Root</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/splash">Splash</Link>
          <Link to="/job-information">JobInformation</Link>
          <Link to='/about-us'>About Us</Link>
          <Link to='/services'>Services</Link>
        </nav>
        <hr/>
        <Route exact path='/' component={_Root}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/splash' component={Splash} />
        <Route path='/job-information' component={JobInformation} />
        <Route path='/services' component={Services} />
        <Route path='/about-us' component={About} />
      </div>
    </Router>
  </Provider>,
    document.getElementById('root')
);
