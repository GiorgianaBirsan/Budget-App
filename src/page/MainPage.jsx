import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import Navigation from '../components/Navigation/Navigation';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main_container">
      <Navigation />
      <Dashboard />
    </div>
  );
}
