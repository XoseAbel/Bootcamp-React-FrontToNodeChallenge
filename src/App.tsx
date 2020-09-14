import React from 'react';
import { Routes } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
