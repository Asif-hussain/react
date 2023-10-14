// src/App.tsx
import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import PokemonDetails from './components/PokemonDetails';
import History from './components/History';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>

        <hr />

  <Routes>
    <Route path="/history" element={<History />} />
    <Route path="/" element={
       <>
       <SearchBar />
       <PokemonDetails />
       </>
    }
    />
    </Routes>
      </div>
    </Router>
  );
};

export default App;
