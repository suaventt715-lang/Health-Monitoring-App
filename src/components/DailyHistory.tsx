import { Clock } from 'lucide-react';

type Status = 'normal' | 'high' | 'very-high' | 'low' | 'very-low';

interface Reading {
  time: string;
  systolic: number;
  diastolic: number;
  sysStatus: Status;
  diaStatus: Status;
}

const getStatusColor = (status: Status) => {
  switch (status) {
    case 'normal':
      return 'bg-green-100 text-green-700';
    case 'high':
      return 'bg-orange-100 text-orange-700';
    case 'very-high':
      return 'bg-red-100 text-red-700';
    case 'low':
      return 'bg-blue-100 text-blue-700';
    case 'very-low':
      return 'bg-purple-100 text-purple-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getStatusLabel = (status: Status) => {
  switch (status) {
    case 'normal':
      return 'Normal';
    case 'high':
      return 'High';
    case 'very-high':
      return 'Very High';
    case 'low':
      return 'Low';
    case 'very-low':
      return 'Very Low';
    default:
      return status;
  }
};

const todayReadings: Reading[] = [
  {
    time: '9:00 AM',
    systolic: 118,
    diastolic: 76,
    sysStatus: 'normal',
    diaStatus: 'normal',
  },
  {
    time: '8:00 PM',
    systolic: 125,
    diastolic: 85,
    sysStatus: 'high',
    diaStatus: 'high',
  },
];

export function DailyHistory() {
  return (
    <div className="bg-[#D4E4F7] rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-[#5B8FD8]" />
        <h3 className="text-gray-900">Today&apos;s History</h3>
      </div>

      <div className="space-y-3">
        {todayReadings.map((reading, index) => (
          <div key={index} className="bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">{reading.time}</div>
              <div className="text-xs text-gray-500">Dec 10, 2025</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Systolic */}
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-600 mb-1">SYS</div>
                <div className="text-2xl text-gray-900 mb-2">
                  {reading.systolic}
                  <span className="text-xs text-gray-500 ml-1">mmHg</span>
                </div>
                <div className={`text-xs rounded-full px-2 py-1 inline-block ${getStatusColor(reading.sysStatus)}`}>
                  {getStatusLabel(reading.sysStatus)}
                </div>
              </div>

              {/* Diastolic */}
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-600 mb-1">DIA</div>
                <div className="text-2xl text-gray-900 mb-2">
                  {reading.diastolic}
                  <span className="text-xs text-gray-500 ml-1">mmHg</span>
                </div>
                <div className={`text-xs rounded-full px-2 py-1 inline-block ${getStatusColor(reading.diaStatus)}`}>
                  {getStatusLabel(reading.diaStatus)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 bg-white rounded-2xl p-3">
        <div className="text-xs text-gray-600 mb-2">Status Reference:</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Normal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Very High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Low</span>
          </div>
        </div>
      </div>
    </div>
  );
}
