// import React, { PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import ReduxPromise from 'redux-promise';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore, applyMiddleware } from 'redux';
// //research browser history, hash history, memory history...which might be more useful
// import { Router, browserHistory } from 'react-router';
// import path from 'path';

// import routes from './routes';
// import jobsList from './reducers/reducers';
// import _Root from './components/_Root';

// // load scss styles
// // require('app.scss');

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(jobsList)}>
//     <_Root />
//   </Provider>
//   , document.getElementById('root'));

//==========================================================

//uncomment below code when we are ready to implement react-router
//can be left commented for now...
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(jobsList)}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>
//   , document.querySelector('.container'));

/********** testing routing **********/


import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
//research browser history, hash history, memory history...which might be more useful
import path from 'path';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as reducers from './reducers/reducers';
import _Root from './components/_Root';
import Login from './components/login/Login';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render (
  <Provider store={createStoreWithMiddleware(combineReducers(reducers))}>
    <Router history={browserHistory}>
      <div>
        <Route exact path='/' component={_Root}/>
        <Route path='/login' component={Login} />
      </div>
    </Router>
  </Provider>,
    document.getElementById('root')
);




















