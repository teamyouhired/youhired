import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
//research browser history, hash history, memory history...which might be more useful
import { Router, browserHistory } from 'react-router';
import path from 'path';

import routes from './routes';
import jobsList from './reducers/reducers';
import _Root from './components/_Root';

// load scss styles
//require('app.scss');

// probably not the best method but works for now
// const allReducers = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(jobsList)}>
    <_Root />
  </Provider>
  , document.getElementById('root'));

//==========================================================

//uncomment below code when we are ready to implement react-router
//can be left commented for now...
/*ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));*/
