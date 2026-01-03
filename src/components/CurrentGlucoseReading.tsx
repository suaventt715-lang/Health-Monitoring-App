import { Droplet } from 'lucide-react';

export function CurrentGlucoseReading() {
  const glucose = 105;
  const mealType = 'post-meal';
  
  // Helper function for color coding
  const getGlucoseStatus = (glucose: number, type: string = 'post-meal') => {
    if (type === 'fasting' || type === 'pre-meal') {
      if (glucose > 180) return { text: 'High', bgColor: 'bg-red-500', textColor: 'text-red-600' };
      if (glucose > 130) return { text: 'Elevated', bgColor: 'bg-yellow-500', textColor: 'text-yellow-600' };
      return { text: 'In Range', bgColor: 'bg-green-500', textColor: 'text-green-600' };
    } else {
      if (glucose > 200) return { text: 'High', bgColor: 'bg-red-500', textColor: 'text-red-600' };
      if (glucose > 180) return { text: 'Elevated', bgColor: 'bg-yellow-500', textColor: 'text-yellow-600' };
      return { text: 'In Range', bgColor: 'bg-green-500', textColor: 'text-green-600' };
    }
  };
  
  const status = getGlucoseStatus(glucose, mealType);
  
  return (
    <div className="bg-[#D4E4F7] rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Droplet className="w-5 h-5 text-[#5B8FD8]" />
        <h3 className="text-gray-900">Current Reading</h3>
      </div>

      <div className="bg-white rounded-2xl p-6">
        <div className="text-center">
          <div className="text-gray-600 text-sm mb-2">Glucose Level</div>
          <div className={`text-6xl mb-2 ${status.textColor}`}>{glucose}</div>
          <div className="text-sm text-gray-500 mb-3">mg/dL</div>
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className={`w-3 h-3 rounded-full ${status.bgColor}`}></div>
            <span className={`text-sm ${status.textColor}`}>{status.text}</span>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-600">
              Measured today at 7:45 PM
            </div>
          </div>
        </div>

        {/* Range Reference */}
        <div className="mt-4 bg-gray-50 rounded-xl p-3">
          <div className="text-xs text-gray-600 mb-2">Target Range</div>
          <div className="text-sm text-gray-800">70 - 140 mg/dL</div>
        </div>
      </div>
    </div>
  );
}