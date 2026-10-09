import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProximamentePage from './pages/ProximamentePage';
import { initGA, logPageView } from './utils/analytics';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  // El sitio anterior está retirado: cualquier ruta muestra el letrero
  return (
    <Routes>
      <Route path="*" element={<ProximamentePage />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
    initGA('G-XTX7WD3NVC');
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
