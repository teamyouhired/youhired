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
//import Dashboard from '.components/dashboard/Dashboard';
import JobInformation from './components/jobsinformationpage/JobInformation';
import Login from 'login/Login';
import Signup from 'signup/Signup';
import Splash from 'splashpage/splash';
import FooterComponent from 'Footer';
import HeaderComponent from 'Header';
import About from 'about-us/about-us';
import Services from 'services/services';
import routes from './routes';
require('app.scss');
require('styles.css');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
// const rootReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     state = undefined
//   }

//   return appReducer(state, action)
// }
const store = createStore(combineReducers(reducers), enhancer);

ReactDOM.render (
  <Provider store={store}>
    <Router
      history={browserHistory}
      children={routes}
    >
    </Router>
  </Provider>,
    document.getElementById('root')
);
