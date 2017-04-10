import React from 'react';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';


const Dashboard = () => (
  <div>
    <JobList />
    <TaskList />
  </div>
)

export default Dashboard;
