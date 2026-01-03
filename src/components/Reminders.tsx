import { ArrowLeft, Bell, Clock, Plus, Repeat } from 'lucide-react';

interface RemindersProps {
  onBack: () => void;
}

export function Reminders({ onBack }: RemindersProps) {
  const reminders = [
    { 
      title: 'Morning Blood Pressure Check',
      time: '8:00 AM',
      frequency: 'Daily',
      active: true
    },
    {
      title: 'Take Blood Pressure Medication',
      subtitle: 'Lisinopril 10mg',
      time: '9:00 AM',
      frequency: 'Daily',
      active: true
    },
    {
      title: 'Evening Blood Pressure Check',
      time: '8:00 PM',
      frequency: 'Daily',
      active: true
    },
    {
      title: 'Check Blood Sugar Level',
      time: '7:00 AM',
      frequency: 'Daily',
      active: false
    },
    {
      title: 'Take Diabetes Medication',
      subtitle: 'Metformin 500mg',
      time: '8:30 AM',
      frequency: 'Daily',
      active: true
    },
    {
      title: 'Post-Meal Glucose Check',
      time: '2:00 PM',
      frequency: 'Daily',
      active: true
    },
    {
      title: 'Evening Blood Sugar Medication',
      subtitle: 'Metformin 500mg',
      time: '8:30 PM',
      frequency: 'Daily',
      active: true
    },
    {
      title: 'Weekly Health Summary',
      time: 'Sunday 10:00 AM',
      frequency: 'Weekly',
      active: true
    },
  ];

  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-white hover:bg-white/10 rounded-full p-1 transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white flex-1">
          <h1 className="text-2xl">Reminders</h1>
          <p className="text-sm opacity-90">Manage Your Notifications</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-[#D4E4F7] rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-4 h-4 text-[#5B8FD8]" />
            <span className="text-xs text-gray-600">Active</span>
          </div>
          <div className="text-2xl text-gray-900">6</div>
          <div className="text-xs text-gray-600">Reminders</div>
        </div>
        <div className="bg-[#D4E4F7] rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-[#5B8FD8]" />
            <span className="text-xs text-gray-600">Next</span>
          </div>
          <div className="text-xl text-gray-900">8:00 AM</div>
          <div className="text-xs text-gray-600">Morning Check</div>
        </div>
      </div>

      {/* Reminders List */}
      <div className="flex-1 overflow-y-auto space-y-3 pb-4">
        <h3 className="text-white text-sm mb-2">All Reminders</h3>
        
        {reminders.map((reminder, index) => (
          <div key={index} className="bg-[#D4E4F7] rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                reminder.active ? 'bg-[#5B8FD8]' : 'bg-gray-300'
              }`}>
                <Bell className={`w-5 h-5 ${reminder.active ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-900 mb-1">{reminder.title}</div>
                {reminder.subtitle && <div className="text-xs text-gray-600 mb-1">{reminder.subtitle}</div>}
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{reminder.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Repeat className="w-3 h-3" />
                    <span>{reminder.frequency}</span>
                  </div>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-all cursor-pointer ${
                reminder.active ? 'bg-[#5B8FD8]' : 'bg-gray-300'
              }`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                  reminder.active ? 'right-1' : 'left-1'
                }`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Reminder Button */}
      <button className="w-full bg-white text-[#5B8FD8] rounded-2xl py-4 px-4 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" />
        <span>Add New Reminder</span>
      </button>
    </div>
  );
}