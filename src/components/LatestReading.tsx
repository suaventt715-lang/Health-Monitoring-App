import { Activity } from 'lucide-react';

export function LatestReading() {
  const systolic = 120;
  const diastolic = 80;
  const pulse = 72;
  
  // Helper function for color coding
  const getBPStatus = (sys: number, dia: number) => {
    if (sys >= 140 || dia >= 90) return { text: 'High', bgColor: 'bg-red-100', textColor: 'text-red-600' };
    if (sys >= 120 || dia >= 80) return { text: 'Elevated', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' };
    return { text: 'Normal', bgColor: 'bg-green-100', textColor: 'text-green-600' };
  };
  
  const status = getBPStatus(systolic, diastolic);
  
  return (
    <div className="bg-[#D4E4F7] rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-[#5B8FD8]" />
        <h3 className="text-gray-900">Latest Reading</h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl p-4 text-center">
          <div className="text-gray-600 text-xs mb-2">SYS</div>
          <div className={`text-4xl mb-1 ${status.textColor}`}>{systolic}</div>
          <div className="text-xs text-gray-500">mmHg</div>
          <div className={`mt-2 text-xs ${status.textColor} ${status.bgColor} rounded-full px-2 py-1`}>
            {status.text}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 text-center">
          <div className="text-gray-600 text-xs mb-2">DIA</div>
          <div className={`text-4xl mb-1 ${status.textColor}`}>{diastolic}</div>
          <div className="text-xs text-gray-500">mmHg</div>
          <div className={`mt-2 text-xs ${status.textColor} ${status.bgColor} rounded-full px-2 py-1`}>
            {status.text}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 text-center">
          <div className="text-gray-600 text-xs mb-2">Pulse</div>
          <div className="text-4xl text-gray-900 mb-1">{pulse}</div>
          <div className="text-xs text-gray-500">bpm</div>
          <div className="mt-2 text-xs text-blue-600 bg-blue-50 rounded-full px-2 py-1">
            Regular
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-gray-600 text-center">
        Measured today at 7:45 PM
      </div>
    </div>
  );
}