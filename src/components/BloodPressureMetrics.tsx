import { HourlyTrendChart } from './HourlyTrendChart';

export function BloodPressureMetrics() {
  return (
    <div className="bg-[#D4E4F7] rounded-3xl p-6 space-y-4">
      <h2 className="text-xl text-gray-900">My BP</h2>
      
      {/* Metrics Display */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-3 text-center">
          <div className="text-gray-600 text-xs mb-1">SYS</div>
          <div className="text-3xl text-gray-900">120</div>
          <div className="text-xs text-gray-500">mmHg</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center">
          <div className="text-gray-600 text-xs mb-1">DIA</div>
          <div className="text-3xl text-gray-900">80</div>
          <div className="text-xs text-gray-500">mmHg</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center">
          <div className="text-gray-600 text-xs mb-1">Pulse</div>
          <div className="text-3xl text-gray-900">72</div>
          <div className="text-xs text-gray-500">bpm</div>
        </div>
      </div>

      {/* Hourly Trend Chart */}
      <HourlyTrendChart />

      {/* Track Button */}
      <button className="w-full bg-[#5B8FD8] text-white py-4 rounded-xl hover:bg-[#4A7EC7] transition-colors">
        Track
      </button>
    </div>
  );
}
