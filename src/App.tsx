// App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomeView from './views/WelcomeView';
import VerificationView from './views/VerificationView';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/verification" element={<VerificationView />} />
      </Routes>
    </div>
  );
};

export default App;
