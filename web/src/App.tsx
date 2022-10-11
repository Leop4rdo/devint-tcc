
import Feed from 'pages/private/Feed';
import React from 'react';

import AppRouter from 'routes';
import { AuthProvider } from 'store/context/Auth.context';

function App() {
  return (
    <div className="app">
       {/* <AuthProvider>
        <AppRouter />
      </AuthProvider>  */}
      <Feed />
    </div>    
  );
}

export default App;
