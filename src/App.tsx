import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import { BottomDock, ScrollToTop } from './components';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <BottomDock />
        <ScrollToTop />
    </BrowserRouter>
  );
}
export default App;