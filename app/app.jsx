import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import rootReducer from './reducers/reducers';
import routes from './routes';
require('app.scss');
require('styles.css');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(rootReducer, enhancer);

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
