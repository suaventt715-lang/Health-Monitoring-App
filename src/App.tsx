import { useState } from 'react';
import { Home } from './components/Home';
import { BloodPressureDetails } from './components/BloodPressureDetails';
import { BloodSugarDetails } from './components/BloodSugarDetails';
import { Logs } from './components/Logs';
import { Insights } from './components/Insights';
import { Reports } from './components/Reports';
import { Share } from './components/Share';
import { Reminders } from './components/Reminders';

type Screen = 'home' | 'blood-pressure' | 'blood-sugar' | 'logs' | 'insights' | 'reports' | 'share' | 'reminders';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {currentScreen === 'home' && (
        <Home 
          onNavigateToBloodPressure={() => setCurrentScreen('blood-pressure')} 
          onNavigateToBloodSugar={() => setCurrentScreen('blood-sugar')}
          onNavigateToLogs={() => setCurrentScreen('logs')}
          onNavigateToInsights={() => setCurrentScreen('insights')}
          onNavigateToReports={() => setCurrentScreen('reports')}
          onNavigateToShare={() => setCurrentScreen('share')}
          onNavigateToReminders={() => setCurrentScreen('reminders')}
        />
      )}
      {currentScreen === 'blood-pressure' && <BloodPressureDetails onBack={() => setCurrentScreen('home')} />}
      {currentScreen === 'blood-sugar' && <BloodSugarDetails onBack={() => setCurrentScreen('home')} />}
      {currentScreen === 'logs' && <Logs onBack={() => setCurrentScreen('home')} />}
      {currentScreen === 'insights' && <Insights onBack={() => setCurrentScreen('home')} />}
      {currentScreen === 'reports' && <Reports onBack={() => setCurrentScreen('home')} />}
      {currentScreen === 'share' && <Share onBack={() => setCurrentScreen('home')} />}
      {currentScreen === 'reminders' && <Reminders onBack={() => setCurrentScreen('home')} />}
    </div>
  );
}