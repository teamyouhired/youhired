import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import { createHistory } from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import JobInformation from './components/jobsinformationpage/JobInformation';
import Login from 'login/Login';
import Signup from 'signup/Signup';
import Splash from 'splashpage/splash';
import FooterComponent from 'Footer';
import HeaderComponent from 'Header';
import About from 'about-us/about-us';
import Services from 'services/services';
import Dashboard from './components/dashboard/Dashboard';
import AuthenticateUser from './AuthenticateUser';

// const requireAuth = (nextState, replace) => {
//   console.log('requireAuth was invoked', nextState, 'replace', replace);
//   if (!sessionStorage.getItem('auth')) {
//     replace({pathname: '/login'});
//   }
// };

const routes = (
  <div>
    <Route exact path='/' component={Splash}/>
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/services' component={Services} />
    <Route path='/about-us' component={About} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/job-information' component={JobInformation} />
  </div>
);

export default routes;
