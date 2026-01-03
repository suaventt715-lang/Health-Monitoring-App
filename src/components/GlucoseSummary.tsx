import { Activity, TrendingUp, Target, Percent, Calendar, Clock } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const trendData = [
  { value: 102 },
  { value: 145 },
  { value: 98 },
  { value: 110 },
  { value: 95 },
  { value: 155 },
  { value: 105 },
];

interface EventLogEntry {
  time: string;
  type: string;
  glucose: number;
  status: 'normal' | 'high' | 'low';
}

const eventLog: EventLogEntry[] = [
  { time: '8:00 AM', type: 'Pre-Meal', glucose: 95, status: 'normal' },
  { time: '2:00 PM', type: 'Post-Meal', glucose: 142, status: 'high' },
  { time: '9:00 PM', type: 'Post-Meal', glucose: 105, status: 'normal' },
];

const getStatusColor = (status: 'normal' | 'high' | 'low') => {
  switch (status) {
    case 'normal':
      return 'bg-green-100 text-green-700';
    case 'high':
      return 'bg-orange-100 text-orange-700';
    case 'low':
      return 'bg-blue-100 text-blue-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export function GlucoseSummary() {
  return (
    <div className="bg-[#D4E4F7] rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-[#5B8FD8]" />
        <h3 className="text-gray-900">Summary</h3>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Average Glucose */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-[#5B8FD8]" />
            <div className="text-xs text-gray-600">Avg Glucose</div>
          </div>
          <div className="text-2xl text-gray-900">110</div>
          <div className="text-xs text-gray-500">mg/dL</div>
        </div>

        {/* Time in Range */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Percent className="w-4 h-4 text-green-600" />
            <div className="text-xs text-gray-600">Time in Range</div>
          </div>
          <div className="text-2xl text-gray-900">71%</div>
          <div className="text-xs text-gray-500">7 days</div>
        </div>

        {/* Variability */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-orange-600" />
            <div className="text-xs text-gray-600">Variability (CV)</div>
          </div>
          <div className="text-2xl text-gray-900">18%</div>
          <div className="text-xs text-gray-500">Moderate</div>
        </div>

        {/* Trend */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#5B8FD8]" />
            <div className="text-xs text-gray-600">7-Day Trend</div>
          </div>
          <ResponsiveContainer width="100%" height={40}>
            <LineChart data={trendData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#5B8FD8" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Event Log */}
      <div className="bg-white rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-[#5B8FD8]" />
          <div className="text-sm text-gray-900">Today&apos;s Event Log</div>
        </div>

        <div className="space-y-2">
          {eventLog.map((entry, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">{entry.time}</span>
                </div>
                <span className="text-xs text-gray-500">{entry.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl text-gray-900">{entry.glucose}</span>
                  <span className="text-xs text-gray-500 ml-1">mg/dL</span>
                </div>
                <div className={`text-xs rounded-full px-2 py-1 ${getStatusColor(entry.status)}`}>
                  {entry.status === 'normal' ? 'Normal' : entry.status === 'high' ? 'High' : 'Low'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
