import { ArrowLeft, Activity, Droplet, List } from 'lucide-react';
import { useState } from 'react';

type FilterType = 'all' | 'bloodPressure' | 'glucose';

interface BloodPressureEntry {
  type: 'bloodPressure';
  time: string;
  systolic: number;
  diastolic: number;
  pulse: number;
}

interface GlucoseEntry {
  type: 'glucose';
  time: string;
  glucose: number;
  mealType: string;
}

type LogEntry = BloodPressureEntry | GlucoseEntry;

const allEntries: LogEntry[] = [
  { type: 'bloodPressure', time: '9:00 AM', systolic: 120, diastolic: 80, pulse: 72 },
  { type: 'glucose', time: '8:00 AM', glucose: 95, mealType: 'Pre-Meal' },
  { type: 'bloodPressure', time: '1:30 PM', systolic: 118, diastolic: 78, pulse: 68 },
  { type: 'glucose', time: '2:00 PM', glucose: 142, mealType: 'Post-Meal' },
  { type: 'bloodPressure', time: '6:45 PM', systolic: 122, diastolic: 82, pulse: 75 },
  { type: 'glucose', time: '9:00 PM', glucose: 105, mealType: 'Post-Meal' },
  { type: 'bloodPressure', time: '10:30 PM', systolic: 115, diastolic: 76, pulse: 70 },
  { type: 'glucose', time: '7:15 AM', glucose: 88, mealType: 'Fasting' },
  { type: 'bloodPressure', time: '7:00 AM', systolic: 125, diastolic: 85, pulse: 74 },
  { type: 'glucose', time: '12:30 PM', glucose: 118, mealType: 'Post-Meal' },
];

interface LogsProps {
  onBack: () => void;
}

export function Logs({ onBack }: LogsProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [showAll, setShowAll] = useState(false);
  
  // Helper functions for color coding
  const getBPStatus = (sys: number, dia: number) => {
    if (sys >= 140 || dia >= 90) return { text: 'High', bgColor: 'bg-red-100', textColor: 'text-red-600' };
    if (sys >= 120 || dia >= 80) return { text: 'Elevated', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' };
    return { text: 'Normal', bgColor: 'bg-green-100', textColor: 'text-green-600' };
  };
  
  const getGlucoseStatus = (glucose: number, mealType: string) => {
    if (mealType === 'Fasting' || mealType === 'Pre-Meal') {
      if (glucose > 180) return { text: 'High', bgColor: 'bg-red-100', textColor: 'text-red-600' };
      if (glucose > 130) return { text: 'Elevated', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' };
      return { text: 'In Range', bgColor: 'bg-green-100', textColor: 'text-green-600' };
    } else {
      if (glucose > 200) return { text: 'High', bgColor: 'bg-red-100', textColor: 'text-red-600' };
      if (glucose > 180) return { text: 'Elevated', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' };
      return { text: 'In Range', bgColor: 'bg-green-100', textColor: 'text-green-600' };
    }
  };

  const filteredEntries = allEntries.filter(entry => {
    if (selectedFilter === 'all') return true;
    return entry.type === selectedFilter;
  });

  const displayedEntries = showAll ? filteredEntries : filteredEntries.slice(0, 5);

  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-white hover:bg-white/10 rounded-full p-1 transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white">
          <h1 className="text-2xl">Logs</h1>
          <p className="text-sm opacity-90">Daily Health Records</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`flex-1 rounded-2xl py-3 px-4 flex items-center justify-center gap-2 transition-all ${
            selectedFilter === 'all'
              ? 'bg-white text-[#5B8FD8]'
              : 'bg-[#7BA5E3] text-white'
          }`}
        >
          <List className="w-4 h-4" />
          <span className="text-sm">All</span>
        </button>
        <button
          onClick={() => setSelectedFilter('bloodPressure')}
          className={`flex-1 rounded-2xl py-3 px-4 flex items-center justify-center gap-2 transition-all ${
            selectedFilter === 'bloodPressure'
              ? 'bg-white text-[#5B8FD8]'
              : 'bg-[#7BA5E3] text-white'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span className="text-sm">Blood Pressure</span>
        </button>
        <button
          onClick={() => setSelectedFilter('glucose')}
          className={`flex-1 rounded-2xl py-3 px-4 flex items-center justify-center gap-2 transition-all ${
            selectedFilter === 'glucose'
              ? 'bg-white text-[#5B8FD8]'
              : 'bg-[#7BA5E3] text-white'
          }`}
        >
          <Droplet className="w-4 h-4" />
          <span className="text-sm">Glucose</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-3 pb-4">
        {displayedEntries.map((entry, index) => (
          <div key={index} className="bg-[#D4E4F7] rounded-2xl p-4">
            {entry.type === 'bloodPressure' ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#5B8FD8]" />
                  <span className="text-sm text-gray-700">Blood Pressure</span>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">SYS/DIA</div>
                      <div className="text-xl text-gray-900">
                        {entry.systolic}/{entry.diastolic}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Pulse</div>
                      <div className="text-xl text-gray-900">{entry.pulse}</div>
                    </div>
                    <div className="text-sm text-gray-500">{entry.time}</div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={getBPStatus(entry.systolic, entry.diastolic).bgColor + ' ' + getBPStatus(entry.systolic, entry.diastolic).textColor + ' px-2 py-1 rounded-full text-sm'}>
                    {getBPStatus(entry.systolic, entry.diastolic).text}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Droplet className="w-4 h-4 text-[#5B8FD8]" />
                  <span className="text-sm text-gray-700">Glucose</span>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Level</div>
                      <div className="text-xl text-gray-900">{entry.glucose} mg/dL</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Type</div>
                      <div className="text-sm text-gray-900">{entry.mealType}</div>
                    </div>
                    <div className="text-sm text-gray-500">{entry.time}</div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={getGlucoseStatus(entry.glucose, entry.mealType).bgColor + ' ' + getGlucoseStatus(entry.glucose, entry.mealType).textColor + ' px-2 py-1 rounded-full text-sm'}>
                    {getGlucoseStatus(entry.glucose, entry.mealType).text}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Show More Button */}
        {filteredEntries.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full bg-white text-[#5B8FD8] rounded-2xl py-3 px-4 transition-all hover:bg-[#D4E4F7]"
          >
            {showAll ? 'Show Less' : `Show More (${filteredEntries.length - 5} more)`}
          </button>
        )}

        {filteredEntries.length === 0 && (
          <div className="text-center text-white py-8">
            <p>No entries found</p>
          </div>
        )}
      </div>
    </div>
  );
}