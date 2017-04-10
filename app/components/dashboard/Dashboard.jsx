import React from 'react';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';


const Dashboard = () => (
  <div className='dashboard-container'>
    <JobList />
    <TaskList />
  </div>
)

export default Dashboard;
