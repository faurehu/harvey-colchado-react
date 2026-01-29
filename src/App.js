import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import { initGA, logPageView, logClick } from './utils/analytics';

// Code splitting: lazy load pages that aren't needed immediately
const ApoyanosPage = lazy(() => import('./pages/ApoyanosPage'));
const PropuestasPage = lazy(() => import('./pages/PropuestasPage'));
const VerdadOMitoPage = lazy(() => import('./pages/VerdadOMitoPage'));
const ConocimientoPage = lazy(() => import('./pages/ConocimientoPage'));
const GaleriaPage = lazy(() => import('./pages/GaleriaPage'));
const LeyesProCrimenPage = lazy(() => import('./pages/LeyesProCrimenPage'));
const BiografiaPage = lazy(() => import('./pages/BiografiaPage'));
const TesisMaestriaPage = lazy(() => import('./pages/TesisMaestriaPage'));
const MonitoreoDepincriPage = lazy(() => import('./pages/MonitoreoDepincriPage'));
const TransparenciaPage = lazy(() => import('./pages/TransparenciaPage'));
const NotasDePrensaPage = lazy(() => import('./pages/NotasDePrensaPage'));
const NotaDePrensaDetailPage = lazy(() => import('./pages/NotaDePrensaDetailPage'));

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

      // Read pathname at click time instead of capturing from closure
      logClick(elementDescription, window.location.pathname);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []); // No dependencies - listener is stable, reads pathname on demand

  return (
    <>
      {!isHomePage && <Header />}
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apoyanos" element={<ApoyanosPage />} />
          <Route path="/propuestas" element={<PropuestasPage />} />
          <Route path="/verdad-o-mito" element={<VerdadOMitoPage />} />
          <Route path="/conocimiento" element={<ConocimientoPage />} />
          <Route path="/conocimiento/leyes-pro-crimen" element={<LeyesProCrimenPage />} />
          <Route path="/conocimiento/biografia" element={<BiografiaPage />} />
          <Route path="/conocimiento/tesis-maestria" element={<TesisMaestriaPage />} />
          <Route path="/conocimiento/monitoreo-depincri" element={<MonitoreoDepincriPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/transparencia" element={<TransparenciaPage />} />
          <Route path="/notas-de-prensa" element={<NotasDePrensaPage />} />
          <Route path="/notas-de-prensa/:slug" element={<NotaDePrensaDetailPage />} />
        </Routes>
      </Suspense>
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
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
