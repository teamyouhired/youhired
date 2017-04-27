import { createClient } from './utils';

export const addJob = createClient({
  actionTypePrefix: 'user:addJob',
  requestType: 'POST',
  url: '/api/addapplication'
});

export const getCurrentStatuses = createClient({
  actionTypePrefix: 'user:getCurrentStatuses',
  requestType: 'GET',
  url: '/api/currentstatuses'
});

export const getProgressVersusAverage = createClient({
  actionTypePrefix: 'user:getProgressVersusAverage',
  requestType: 'GET',
  url: '/api/progressversusaverage'
});

export const addActivity = createClient({
  actionTypePrefix: 'user:addActivity',
  requestType: 'POST',
  url: '/api/addactivity'
});

export const addGoal = createClient({
  actionTypePrefix: 'user:addGoal',
  requestType: 'POST',
  url: '/api/addgoal'
});

export const getGoals = createClient({
  actionTypePrefix: 'user:getGoals',
  requestType: 'GET',
  url: '/api/goalinfo'
});

export const addContactToApplication = createClient({
  actionTypePrefix: 'user:addContact',
  requestType: 'POST',
  url: '/api/addcontactfromapplication'
});

export const getUserData = createClient({
  actionTypePrefix: 'user:getUserData',
  requestType: 'GET',
  url: '/api/getData'
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

export const updateStatus = createClient({
  actionTypePrefix: 'user:updateStatus',
  requestType: 'POST',
  url: '/api/updatestatus'
});

export const addInterview = createClient({
  actionTypePrefix: 'user:addInterview',
  requestType: 'POST',
  url: '/api/addinterview'
});

export const addJobOffer = createClient({
  actionTypePrefix: 'user:addJobOffer',
  requestType: 'POST',
  url: '/api/addjoboffer'
});

export const addJobDescription = createClient({
  actionTypePrefix: 'user:addJobDescription',
  requestType: 'POST',
  url: '/api/jobdescription'
});
