// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './HomePage/HomePage';
import ElectronicsPage from './FilteredPages/Electronics';
import GroceryPage from './FilteredPages/Grocery';
import PharmaceuticalsPage from './FilteredPages/PharmaceuticalsPage';
import FashionPage from './FilteredPages/FashionPage'
import BeautyPage from './FilteredPages/Beauty';
import HealthPage from './FilteredPages/Health';
import KidsPage from './FilteredPages/KidsPage'
import React from 'react';
import BooksPage from './FilteredPages/BooksPage';
import SportsPage from './FilteredPages/SportsPage';
import StationaryPage from './FilteredPages/StationaryPage';
import PetsPage from './FilteredPages/PetsPage';

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
        <Route path='/FilteredPages/HomeFurniturePage.tsx' element={<FashionPage />} />
        <Route path='/FilteredPages/Beauty.tsx' element={<BeautyPage />} />
        <Route path='/FilteredPages/Health.tsx' element={<HealthPage />} />
        <Route path='/FilteredPages/KidsPage.tsx' element={<KidsPage />} />
        <Route path='/FilteredPages/BooksPage.tsx' element={<BooksPage />} />
        <Route path='/FilteredPages/SportsPage.tsx' element={<SportsPage />} />
        <Route path='/FilteredPages/Stationary.tsx' element={<StationaryPage />} />
        <Route path='/FilteredPages/PetsPage.tsx' element={<PetsPage />} />
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