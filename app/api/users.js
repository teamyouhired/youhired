import { createClient } from './utils';
// api/seed gives back all data
export const addJob = createClient({
  actionTypePrefix: 'user:addJob',
  requestType: 'POST',
  url: 'api/users/jobs'
});

export const addTask = createClient({
  actionTypePrefix: 'user:addTask',
  requestType: 'POST',
  url: 'api/users/tasks'
});

export const getUserData = createClient({
  actionTypePrefix: 'user:getUserData',
  requestType: 'GET',
  url: 'api/seed'
});

export const signUp = createClient({
  actionTypePrefix: 'user:signUp',
  requestType: 'POST',
  url: '/api/signup'
});

export const signIn = createClient({
  actionTypePrefix: 'user:signIn',
  requestType: 'POST',
  url: '/api/signin'
});
/*
  what needs to happen when a login attempt takes place,
  put this in the routing and use onEntry lifecycle hook to check for the token before allowing access to the page
then(function successCallback(response) {
        userData.value = response.data;
        // save JWT token in local sessionStorage
        sessionStorage.setItem('auth', response.data.tokens[0].token)
        window.location.href = '#/tripview';
        // document.location.hash = '/tripview';
      }, function errorCallback(error) {
        console.log('error!', error);
      });


need to add the token to the session storage once a user is successfully added, this will probably be in the authentication reducer; but it may need to be on the sign up page as a function that will be called once the account has been successfully created.
       .then(function successCallback(response) {
        userData.value = response.data;
        // save JWT token in local sessionStorage
        sessionStorage.setItem('auth', response.data.tokens[0].token)
        window.location.href = '#/tripview';
      }, function errorCallback(error) {
        console.log('error!', error);
      });
*/