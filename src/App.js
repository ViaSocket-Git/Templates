import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ServicesPage from './Components/template.js';
import Search2 from './Components/search.js';
function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<ServicesPage />} />
        <Route path="/search" element={<Search2/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
