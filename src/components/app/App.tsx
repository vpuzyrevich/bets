import { AppRoutes } from 'components/routes/AppRoutes';
import React from 'react';
import '../../styles/normalize.scss';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
