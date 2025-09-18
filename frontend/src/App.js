import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileDashboard from './screens/ProfileDashboard';
import SosScreen from './screens/SosScreen';
import EditProfile from "./screens/EditProfile";
import LearnScreen from './screens/LearnScreen';
import QuestsScreen from './screens/QuestsScreen';
import GamesScreen from './screens/GamesScreen';
import PersonalSafetyPage from './screens/LearnPages/PersonalSafetyPage';

import Assistant from "./screens/Assistant";



// Example: Passing navigation through props
function LoginWrapper() {
  const navigate = useNavigate();
  return <LoginScreen onLogin={() => navigate('/splash')} />;
}

function SplashWrapper() {
  const navigate = useNavigate();
  return <SplashScreen onProceed={() => navigate('/home')} />;
}

function HomeWrapper() {
  const navigate = useNavigate();
  return (
    <HomeScreen
      onHome={() => navigate('/home')}
      onQuests={() => navigate('/quests')}
      onGames={() => navigate('/games')}
      onLearn={() => navigate('/learn')}
      onProfile={() => navigate('/profile')}
      onSOS={() => navigate('/sos')}
    />
  );
}


function ProfileDashboardWrapper() {
  const navigate = useNavigate();
  return (
    <ProfileDashboard
      onHome={() => navigate('/home')}
      onLogout={() => navigate('/')}
      onSOS={() => navigate('/sos')}
      onEditProfile={() => navigate('/edit-profile')}
    />
  );
}

function SosWrapper() {
  const navigate = useNavigate();
  return (
    <SosScreen
      onHome={() => navigate('/home')}
      onQuests={() => navigate('/quests')}
      onGames={() => navigate('/games')}
      onLearn={() => navigate('/learn')}
    
     
      onProfile={() => navigate('/profile')}
    />
  );
}
// eslint-disable-next-line no-unused-vars


function GamesWrapper() {
  const navigate = useNavigate();
  
  return <GamesScreen  onSOS={() => navigate('/sos')} />;
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/splash" element={<SplashWrapper />} />
        <Route path="/home" element={<HomeWrapper />} />
        <Route path="/profile" element={<ProfileDashboardWrapper />} />
        <Route path="/sos" element={<SosWrapper />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/learn" element={<LearnScreen />} />
<Route path="/quests" element={<QuestsScreen />} />
<Route path="/games" element={<GamesWrapper />} />
        <Route path="/learn/personal-safety" element={<PersonalSafetyPage />} />
<Route path="/assistant" element={<Assistant />} />

      </Routes>
    </BrowserRouter>
  );
}
