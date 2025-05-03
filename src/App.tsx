// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './HomePage/HomePage';
import React from 'react';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>


        <Route path="/" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (

    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
    
  );
};

export default App;