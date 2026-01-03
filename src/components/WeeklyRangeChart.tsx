import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { Calendar } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', glucose: 102, inRange: true },
  { day: 'Tue', glucose: 145, inRange: false },
  { day: 'Wed', glucose: 98, inRange: true },
  { day: 'Thu', glucose: 110, inRange: true },
  { day: 'Fri', glucose: 95, inRange: true },
  { day: 'Sat', glucose: 155, inRange: false },
  { day: 'Sun', glucose: 105, inRange: true },
];

export function WeeklyRangeChart() {
  return (
    <div className="bg-[#D4E4F7] rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-[#5B8FD8]" />
        <h3 className="text-gray-900">7-Day Trend</h3>
      </div>

      <div className="bg-white rounded-2xl p-4">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 11, fill: '#6B7280' }}
            />
            <YAxis 
              tick={{ fontSize: 11, fill: '#6B7280' }}
              domain={[60, 180]}
            />
            <ReferenceLine y={140} stroke="#F59E0B" strokeDasharray="3 3" label={{ value: 'Upper Limit', fontSize: 10, fill: '#F59E0B' }} />
            <ReferenceLine y={70} stroke="#F59E0B" strokeDasharray="3 3" label={{ value: 'Lower Limit', fontSize: 10, fill: '#F59E0B' }} />
            <Bar dataKey="glucose" radius={[8, 8, 0, 0]}>
              {weeklyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.inRange ? '#34D399' : '#EF4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="mt-3 flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span className="text-gray-700">In Range</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500"></div>
            <span className="text-gray-700">Out of Range</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="bg-green-50 rounded-lg p-2 text-center">
            <div className="text-gray-600">In Range</div>
            <div className="text-green-600">5 days</div>
          </div>
          <div className="bg-red-50 rounded-lg p-2 text-center">
            <div className="text-gray-600">Out of Range</div>
            <div className="text-red-600">2 days</div>
          </div>
        </div>
      </div>
    </div>
  );
}
