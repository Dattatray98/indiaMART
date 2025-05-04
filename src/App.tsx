// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './HomePage/HomePage';
import ElectronicsPage from './FilteredPages/Electronics';
import GroceryPage from './FilteredPages/Grocery';
import PharmaceuticalsPage from './FilteredPages/PharmaceuticalsPage';
import FashionPage from './FilteredPages/FashionPage'
import React from 'react';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>


        <Route path="/" element={<HomePage />} />
        <Route path="/FilteredPages/Electronics.tsx"  element={<ElectronicsPage />} />
        <Route path="/FilteredPages/Grocery.tsx" element={<GroceryPage />} />
        <Route path='/FilteredPages/PharmaceuticalsPage.tsx' element={<PharmaceuticalsPage />} />
        <Route path='/FilteredPages/FashionPage.tsx' element={<FashionPage />} />
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