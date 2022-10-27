import React from 'react';

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
