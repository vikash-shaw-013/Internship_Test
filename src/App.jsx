import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import './App.css';

function App() {
  const isAuthenticated = () => !!localStorage.getItem('user');

  return (
    <div className="app-container"> 
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route 
          path="/account" 
          element={isAuthenticated() ? <AccountSettingsPage /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
