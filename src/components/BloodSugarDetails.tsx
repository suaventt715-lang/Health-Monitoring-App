import { ArrowLeft } from 'lucide-react';
import { CurrentGlucoseReading } from './CurrentGlucoseReading';
import { WeeklyRangeChart } from './WeeklyRangeChart';
import { GlucoseSummary } from './GlucoseSummary';

interface BloodSugarDetailsProps {
  onBack: () => void;
}

export function BloodSugarDetails({ onBack }: BloodSugarDetailsProps) {
  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-white hover:bg-white/10 rounded-full p-1 transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white">
          <h1 className="text-2xl">Blood Sugar</h1>
          <p className="text-sm opacity-90">Detailed Analytics</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        <CurrentGlucoseReading />
        <WeeklyRangeChart />
        <GlucoseSummary />
      </div>
    </div>
  );
}