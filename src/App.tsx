import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import CVPage from './pages/CV/index';
import { BottomDock, ScrollToTop } from './components';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
        <BottomDock />
        <ScrollToTop />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
