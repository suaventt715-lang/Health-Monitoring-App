import { Home, MapPin, User } from 'lucide-react';
import { BloodPressureMetrics } from './BloodPressureMetrics';
import { MenuSection } from './MenuSection';

export function BloodPressureTracker() {
  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="text-white mb-6">
        <h1 className="text-3xl">Digital Health</h1>
        <h1 className="text-3xl">Tracker</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto space-y-4">
        <BloodPressureMetrics />
        <MenuSection />
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white rounded-2xl p-4 mt-4 flex justify-around items-center">
        <button className="flex flex-col items-center gap-1 text-[#5B8FD8]">
          <Home className="w-6 h-6" fill="#5B8FD8" />
          <span className="text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <MapPin className="w-6 h-6" />
          <span className="text-sm">Track</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <User className="w-6 h-6" />
          <span className="text-sm">Profile</span>
        </button>
      </div>
    </div>
  );
}
