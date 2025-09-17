import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileDashboard from './screens/ProfileDashboard';
import SosScreen from './screens/SosScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen
          onLogin={() => setCurrentScreen('splash')}
        />
      )}
      {currentScreen === 'splash' && (
        <SplashScreen
          onProceed={() => setCurrentScreen('home')}
        />
      )}
      {currentScreen === 'home' && (
        <HomeScreen
          onStartQuest={() => alert("Start Quest!")}
          onPlayGames={() => alert("Play Games!")}
          onLearnGrow={() => alert("Learn Hub!")}
          onProfile={() => setCurrentScreen('profile')}
          onSOS={() => setCurrentScreen('sos')}
        />
      )}
      {currentScreen === 'profile' && (
        <ProfileDashboard
          onHome={() => setCurrentScreen('home')}
          onLogout={() => setCurrentScreen('login')}
          onSOS={() => setCurrentScreen('sos')}
        />
      )}
      {currentScreen === 'sos' && (
        <SosScreen
          onHome={() => setCurrentScreen('home')}
          onQuests={() => alert("Quests!")}
          onGames={() => alert("Games!")}
          onLearn={() => alert("Learn!")}
          onProfile={() => setCurrentScreen('profile')}
        />
      )}
    </>
  );
}
