import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileDashboard from './screens/ProfileDashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); // start flow at login

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
          onSOS={() => alert("SOS sent!")}
        />
      )}
      {currentScreen === 'profile' && (
        <ProfileDashboard
          onHome={() => setCurrentScreen('home')}
          onLogout={() => setCurrentScreen('login')}
        />
      )}
    </>
  );
}
