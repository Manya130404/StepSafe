import React, { useState } from 'react';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  
  const renderScreen = () => {
    switch(currentScreen) {
      case 'splash':
        return <SplashScreen onProceed={() => setCurrentScreen('onboarding')} />;
      case 'onboarding':
        return <div>Onboarding coming next...</div>;
      default:
        return <div>Screen not found</div>;
    }
  };

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}
