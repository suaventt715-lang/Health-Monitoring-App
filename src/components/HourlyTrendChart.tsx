import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

// Mock hourly data for the past 12 hours
const hourlyData = [
  { hour: '8am', systolic: 118, diastolic: 78 },
  { hour: '9am', systolic: 122, diastolic: 81 },
  { hour: '10am', systolic: 120, diastolic: 79 },
  { hour: '11am', systolic: 125, diastolic: 83 },
  { hour: '12pm', systolic: 123, diastolic: 82 },
  { hour: '1pm', systolic: 121, diastolic: 80 },
  { hour: '2pm', systolic: 119, diastolic: 79 },
  { hour: '3pm', systolic: 124, diastolic: 84 },
  { hour: '4pm', systolic: 122, diastolic: 81 },
  { hour: '5pm', systolic: 120, diastolic: 80 },
  { hour: '6pm', systolic: 118, diastolic: 77 },
  { hour: '7pm', systolic: 120, diastolic: 80 },
];

export function HourlyTrendChart() {
  return (
    <div className="bg-white rounded-xl p-4">
      <h3 className="text-sm text-gray-700 mb-3">Hourly Trend</h3>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={hourlyData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="hour" 
            tick={{ fontSize: 10, fill: '#6B7280' }}
            interval={2}
          />
          <YAxis 
            tick={{ fontSize: 10, fill: '#6B7280' }}
            domain={[60, 140]}
          />
          <Legend 
            wrapperStyle={{ fontSize: '11px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="systolic" 
            stroke="#5B8FD8" 
            strokeWidth={2}
            name="SYS"
            dot={{ fill: '#5B8FD8', r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="diastolic" 
            stroke="#34D399" 
            strokeWidth={2}
            name="DIA"
            dot={{ fill: '#34D399', r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
