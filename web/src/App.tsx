import DevRegistrationPage from 'pages/dev/Registration';
import Login from './pages/Login';
import React from 'react';
import Register from 'pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    
      <Router>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>

      </Router>
    
  );
}

export default App;
