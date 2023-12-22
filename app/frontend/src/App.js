import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import './App.css'
import Leaderboard from './pages/Leaderboard/Leaderboard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/" element={ <Navigate to="/leaderboard" /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;