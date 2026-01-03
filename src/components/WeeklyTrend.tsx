import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', systolic: 118, diastolic: 76 },
  { day: 'Tue', systolic: 122, diastolic: 81 },
  { day: 'Wed', systolic: 120, diastolic: 78 },
  { day: 'Thu', systolic: 125, diastolic: 83 },
  { day: 'Fri', systolic: 119, diastolic: 77 },
  { day: 'Sat', systolic: 121, diastolic: 79 },
  { day: 'Sun', systolic: 120, diastolic: 80 },
];

export function WeeklyTrend() {
  return (
    <div className="bg-[#D4E4F7] rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-[#5B8FD8]" />
        <h3 className="text-gray-900">7-Day Trend</h3>
      </div>

      <div className="bg-white rounded-2xl p-4">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 11, fill: '#6B7280' }}
            />
            <YAxis 
              tick={{ fontSize: 11, fill: '#6B7280' }}
              domain={[60, 140]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="systolic" 
              stroke="#5B8FD8" 
              strokeWidth={3}
              name="SYS"
              dot={{ fill: '#5B8FD8', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="diastolic" 
              stroke="#34D399" 
              strokeWidth={3}
              name="DIA"
              dot={{ fill: '#34D399', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="bg-blue-50 rounded-lg p-2 text-center">
            <div className="text-gray-600">Avg SYS</div>
            <div className="text-[#5B8FD8]">121 mmHg</div>
          </div>
          <div className="bg-green-50 rounded-lg p-2 text-center">
            <div className="text-gray-600">Avg DIA</div>
            <div className="text-green-600">79 mmHg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
