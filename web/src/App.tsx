import DevRegistrationPage from 'pages/dev/Registration';
import Login from './pages/Login';
import React from 'react';
import Register from 'pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CompanyRegistrationPage from 'pages/company/Registration';
import AppRouter from 'routes';
import { AuthProvider } from 'store/context/Auth.context';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>    
  );
}

export default App;
