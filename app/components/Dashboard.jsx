import React from 'react';
import { addJob } from '../actions/DashboardActions';
import JobList from './JobList';
import DisplayedJobs from '../containers/DisplayedJobs';

const Dashboard = () => (
  <div>
    <DisplayedJobs />
  </div>
)

export default Dashboard;
