import { ArrowLeft, TrendingDown, Heart, Moon, Award } from 'lucide-react';

interface InsightsProps {
  onBack: () => void;
}

export function Insights({ onBack }: InsightsProps) {
  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-white hover:bg-white/10 rounded-full p-1 transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white">
          <h1 className="text-2xl">Insights</h1>
          <p className="text-sm opacity-90">Health Recommendations</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        
        {/* Overall Health Score */}
        <div className="bg-[#D4E4F7] rounded-3xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-[#5B8FD8]" />
            <h3 className="text-gray-900">Health Score</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-5xl text-[#5B8FD8] mb-2">85</div>
            <div className="text-sm text-gray-600">Excellent Progress</div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-[#5B8FD8] to-[#7BA5E3]"></div>
            </div>
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="bg-[#D4E4F7] rounded-3xl p-5">
          <h3 className="text-gray-900 mb-4">This Week's Summary</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-900 mb-1">Blood Pressure Improving</div>
                <div className="text-xs text-gray-600">Your average BP has decreased by 5 mmHg this week. Keep it up!</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-900 mb-1">Heart Rate Stable</div>
                <div className="text-xs text-gray-600">Your resting heart rate remains in the healthy range of 60-75 bpm.</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Moon className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-900 mb-1">Consistent Monitoring</div>
                <div className="text-xs text-gray-600">You've logged readings 6 days this week. Great consistency!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-[#D4E4F7] rounded-3xl p-5">
          <h3 className="text-gray-900 mb-4">Personalized Tips</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4">
              <div className="text-sm text-gray-900 mb-2">💧 Stay Hydrated</div>
              <div className="text-xs text-gray-600">Drinking 8 glasses of water daily can help maintain healthy blood pressure levels.</div>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="text-sm text-gray-900 mb-2">🚶 Daily Activity</div>
              <div className="text-xs text-gray-600">Try to walk for 30 minutes each day to improve cardiovascular health.</div>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="text-sm text-gray-900 mb-2">🧘 Reduce Stress</div>
              <div className="text-xs text-gray-600">Practice deep breathing or meditation for 10 minutes daily to lower stress levels.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
