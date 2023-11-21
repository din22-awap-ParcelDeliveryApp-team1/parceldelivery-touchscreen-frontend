import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomeView from './views/WelcomeView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeView />} />
      </Routes>
    </div>
  );
}

export default App;
