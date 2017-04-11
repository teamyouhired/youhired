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