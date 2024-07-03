import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './Main';
import Mine from './Mine';
import Earn from './Earn';
import Friends from './Friends';
import Settings from './Settings';

function App() {

  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
