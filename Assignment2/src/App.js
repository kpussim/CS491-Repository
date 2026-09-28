import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Users from './components/Users.js';

function App() {
  return (
    <Router>
      <div>
        <h1>Router Demo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;