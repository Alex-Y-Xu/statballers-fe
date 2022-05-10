import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Leaderboard} from './Pages/Leaderboard';
import Dashboard from './Pages/Dashboard';
import NewMatch from './Pages/NewMatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/leaderboard/:id' element={<Leaderboard/>} />
        <Route path='/newmatch/:id' element={<NewMatch/>} />
      </Routes>
    </div>
  );
}

export default App;
