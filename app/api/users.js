import { createClient } from './utils';
// api/seed gives back all data
export const addJob = createClient({
  actionTypePrefix: '',
  requestType: 'POST',
  url: 'api/users/jobs'
});

export const addTask = createClient({
  actionTypePrefix: '',
  requestType: 'POST',
  url: 'api/users/tasks'
});

export const getUserData = createClient({
  actionTypePrefix: 'user:allUserData',
  requestType: 'GET',
  url: 'api/seed'
});