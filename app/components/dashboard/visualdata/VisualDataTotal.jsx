import React, { createClass, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const VisualDataTotal = createClass({
  displayName: 'VisualDataTotal',
  render() {

    const data1 = [
          {
            name: 'Interested',
            You: this.props.progressVsAverage.INTERESTED.user,
            Users: this.props.progressVsAverage.INTERESTED.averageforothers
          },
          {
            name: 'Applied',
            You: this.props.progressVsAverage.APPLIED.user,
            Users: this.props.progressVsAverage.APPLIED.averageforothers
          },
          {
            name: 'Info',
            You: this.props.progressVsAverage['INFO INTERVIEW'].user,
            Users: this.props.progressVsAverage['INFO INTERVIEW'].averageforothers
          },
          {
            name: 'Interview',
            You: this.props.progressVsAverage.INTERVIEW.user,
            Users: this.props.progressVsAverage.INTERVIEW.averageforothers
          },
          {
            name: 'Job Offer',
            You: this.props.progressVsAverage['OFFER'].user,
            Users: this.props.progressVsAverage['OFFER'].averageforothers
          },
        ];
    //console.log('props in visual data', this.props.currentStatuses);
    return (

        <ResponsiveContainer width="95%" height="100%">
          <BarChart width={450} height={250} data={data1}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 4" />
            <Tooltip />
            <Legend />
            <Bar dataKey="You" fill="#0088FE" />
            <Bar dataKey="Users" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>

    );
  }
});

export default VisualDataTotal;
