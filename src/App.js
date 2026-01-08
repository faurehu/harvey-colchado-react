import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ApoyanosPage from './pages/ApoyanosPage';
import PropuestasPage from './pages/PropuestasPage';
import VerdadOMitoPage from './pages/VerdadOMitoPage';
import NoticiasPage from './pages/NoticiasPage';
import ConocimientoPage from './pages/ConocimientoPage';
import GaleriaPage from './pages/GaleriaPage';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apoyanos" element={<ApoyanosPage />} />
        <Route path="/propuestas" element={<PropuestasPage />} />
        <Route path="/verdad-o-mito" element={<VerdadOMitoPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/conocimiento" element={<ConocimientoPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
