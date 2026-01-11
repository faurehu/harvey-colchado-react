import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ApoyanosPage from './pages/ApoyanosPage';
import PropuestasPage from './pages/PropuestasPage';
import VerdadOMitoPage from './pages/VerdadOMitoPage';
import ConocimientoPage from './pages/ConocimientoPage';
import GaleriaPage from './pages/GaleriaPage';
import LeyesProCrimenPage from './pages/LeyesProCrimenPage';
import BiografiaPage from './pages/BiografiaPage';
import TesisMaestriaPage from './pages/TesisMaestriaPage';
import TransparenciaPage from './pages/TransparenciaPage';
import { initGA, logPageView, logClick } from './utils/analytics';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      const clickedElement = target.tagName.toLowerCase();
      const elementText = target.textContent?.trim().substring(0, 50) || '';
      const elementId = target.id || '';

      let elementDescription = clickedElement;
      if (elementId) elementDescription += `#${elementId}`;
      if (elementText) elementDescription += `: ${elementText}`;

      logClick(elementDescription, location.pathname);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [location]);

  return (
    <>
      {!isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apoyanos" element={<ApoyanosPage />} />
        <Route path="/propuestas" element={<PropuestasPage />} />
        <Route path="/verdad-o-mito" element={<VerdadOMitoPage />} />
        <Route path="/conocimiento" element={<ConocimientoPage />} />
        <Route path="/conocimiento/leyes-pro-crimen" element={<LeyesProCrimenPage />} />
        <Route path="/conocimiento/biografia" element={<BiografiaPage />} />
        <Route path="/conocimiento/tesis-maestria" element={<TesisMaestriaPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/transparencia" element={<TransparenciaPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
    initGA('G-XTX7WD3NVC');
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
