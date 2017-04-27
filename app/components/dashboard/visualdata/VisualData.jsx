import React, { createClass, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
      {name: 'Interview', Current: 8, Goal: 30},
      {name: 'Info', Current: 41, Goal: 100},
      {name: 'Applied', Current: 308, Goal: 350},
      {name: 'Interested', Current: 401, Goal: 500},
];

// const data1 = [
//       {name: 'Interview', Total: 8, amt: 4},
//       {name: 'Info', Total: 41, amt: 12},
//       {name: 'Applied', Total: 308, amt: 19},
//       {name: 'Interested', Total: 401, amt: 300},
// ];
  // props
    // progressVsAverage
    // currentStatuses
const VisualData = createClass({
  displayName: 'VisualData',
  render() {
    console.log('props in visual data', this.props);
    return (

        <ResponsiveContainer width="95%" height="100%">
          <BarChart width={450} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 4" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Current" fill="#8884d8" />
            <Bar dataKey="Goal" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>

    );
  }
});

export default VisualData;

