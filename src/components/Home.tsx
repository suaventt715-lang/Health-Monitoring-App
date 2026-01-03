import { User, Bell, Activity, Droplet, TrendingUp, TrendingDown, FileText, Lightbulb, BarChart3, Share2 } from 'lucide-react';

interface HomeProps {
  onNavigateToBloodPressure: () => void;
  onNavigateToBloodSugar: () => void;
  onNavigateToLogs: () => void;
  onNavigateToInsights: () => void;
  onNavigateToReports: () => void;
  onNavigateToShare: () => void;
  onNavigateToReminders: () => void;
}

export function Home({ onNavigateToBloodPressure, onNavigateToBloodSugar, onNavigateToLogs, onNavigateToInsights, onNavigateToReports, onNavigateToShare, onNavigateToReminders }: HomeProps) {
  // Blood Pressure values
  const systolic = 120;
  const diastolic = 80;
  const pulse = 72;
  
  // Blood Sugar value
  const glucose = 105;
  
  // Helper functions for color coding
  const getBPStatus = (sys: number, dia: number) => {
    if (sys >= 140 || dia >= 90) return { color: 'red', text: 'High', bgColor: 'bg-red-100', textColor: 'text-red-600' };
    if (sys >= 120 || dia >= 80) return { color: 'yellow', text: 'Elevated', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' };
    return { color: 'green', text: 'Normal', bgColor: 'bg-green-100', textColor: 'text-green-600' };
  };
  
  const getGlucoseStatus = (glucose: number, type: string = 'post-meal') => {
    if (type === 'fasting' || type === 'pre-meal') {
      if (glucose > 180) return { color: 'red', text: 'High', bgColor: 'bg-red-100', textColor: 'text-red-600' };
      if (glucose > 130) return { color: 'yellow', text: 'Elevated', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' };
      return { color: 'green', text: 'In Range', bgColor: 'bg-green-100', textColor: 'text-green-600' };
    } else {
      if (glucose > 200) return { color: 'red', text: 'High', bgColor: 'bg-red-100', textColor: 'text-red-600' };
      if (glucose > 180) return { color: 'yellow', text: 'Elevated', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' };
      return { color: 'green', text: 'In Range', bgColor: 'bg-green-100', textColor: 'text-green-600' };
    }
  };
  
  const bpStatus = getBPStatus(systolic, diastolic);
  const glucoseStatus = getGlucoseStatus(glucose, 'post-meal');
  
  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-white">
          <h1 className="text-2xl">Health Monitor</h1>
          <p className="text-sm opacity-90">Welcome back!</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onNavigateToReminders} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5B8FD8] hover:bg-white/90 transition-all">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        
        {/* Daily Blood Pressure Card */}
        <button 
          onClick={onNavigateToBloodPressure}
          className="bg-[#D4E4F7] rounded-3xl p-5 w-full text-left hover:bg-[#C4D4E7] transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#5B8FD8]" />
              <h3 className="text-gray-900">Blood Pressure</h3>
            </div>
            <span className="text-xs text-gray-600">Today</span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-2xl p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">SYS</div>
              <div className={`text-2xl ${bpStatus.textColor}`}>{systolic}</div>
              <div className="text-xs text-gray-500">mmHg</div>
            </div>
            <div className="bg-white rounded-2xl p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">DIA</div>
              <div className={`text-2xl ${bpStatus.textColor}`}>{diastolic}</div>
              <div className="text-xs text-gray-500">mmHg</div>
            </div>
            <div className="bg-white rounded-2xl p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">Pulse</div>
              <div className="text-2xl text-gray-900">{pulse}</div>
              <div className="text-xs text-gray-500">bpm</div>
            </div>
          </div>

          {/* Trend */}
          <div className="bg-white rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingDown className={`w-4 h-4 ${bpStatus.textColor}`} />
              <span className="text-sm text-gray-900">Trending down</span>
            </div>
            <span className={`text-xs ${bpStatus.textColor} ${bpStatus.bgColor} px-2 py-1 rounded-full`}>{bpStatus.text}</span>
          </div>
        </button>

        {/* Daily Blood Sugar Card */}
        <button 
          onClick={onNavigateToBloodSugar}
          className="bg-[#D4E4F7] rounded-3xl p-5 w-full text-left hover:bg-[#C4D4E7] transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Droplet className="w-5 h-5 text-[#5B8FD8]" />
              <h3 className="text-gray-900">Blood Sugar</h3>
            </div>
            <span className="text-xs text-gray-600">Today</span>
          </div>

          {/* Current Reading */}
          <div className="bg-white rounded-2xl p-4 mb-3">
            <div className="text-center mb-3">
              <div className="text-xs text-gray-600 mb-1">Current Glucose</div>
              <div className={`text-3xl ${glucoseStatus.textColor}`}>{glucose}</div>
              <div className="text-xs text-gray-500">mg/dL</div>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <TrendingUp className={`w-3 h-3 ${glucoseStatus.textColor}`} />
                <span className="text-gray-600">Stable trend</span>
              </div>
              <span className={`${glucoseStatus.textColor} ${glucoseStatus.bgColor} px-2 py-1 rounded-full`}>{glucoseStatus.text}</span>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-2xl p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Post-Meal Status</span>
              <span className="text-sm text-gray-900">Good</span>
            </div>
          </div>
        </button>

        {/* Navigation Buttons Grid */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-[#D4E4F7] transition-all" onClick={onNavigateToLogs}>
            <FileText className="w-6 h-6 text-[#5B8FD8]" />
            <span className="text-sm text-gray-900">Logs</span>
          </button>
          
          <button className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-[#D4E4F7] transition-all" onClick={onNavigateToInsights}>
            <Lightbulb className="w-6 h-6 text-[#5B8FD8]" />
            <span className="text-sm text-gray-900">Insights</span>
          </button>
          
          <button className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-[#D4E4F7] transition-all" onClick={onNavigateToReports}>
            <BarChart3 className="w-6 h-6 text-[#5B8FD8]" />
            <span className="text-sm text-gray-900">Reports</span>
          </button>
          
          <button className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-[#D4E4F7] transition-all" onClick={onNavigateToShare}>
            <Share2 className="w-6 h-6 text-[#5B8FD8]" />
            <span className="text-sm text-gray-900">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}