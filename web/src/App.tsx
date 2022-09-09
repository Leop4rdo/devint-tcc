import DevRegistrationPage from 'pages/dev/Registration';
import Login from './pages/Login';
import React from 'react';
import Register from 'pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CompanyRegistrationPage from 'pages/company/Registration';
import AppRouter from 'routes';

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>    
  );
}

export default App;
