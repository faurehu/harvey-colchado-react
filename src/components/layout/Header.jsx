import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useScrollEffect } from '../../hooks/useScrollEffect';
import { logClick } from '../../utils/analytics';

function Header() {
  const scrolled = useScrollEffect(50);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <NavLink to="/" className="logo">
          <img src="/images/common/LOGO-HORIZONTAL.png" alt="Harvey Colchado" />
          {isHomePage && <img src="/images/inicio/logo-diputado.png" alt="Diputado" className="logo-diputado" />}
        </NavLink>
        <nav className="nav">
          <NavLink
            to="/propuestas"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
            onClick={() => logClick('Nav - Propuestas', 'Header')}
          >
            Propuestas
          </NavLink>
          <NavLink
            to="/verdad-o-mito"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
            onClick={() => logClick('Nav - Verdad o mito', 'Header')}
          >
            Verdad o mito
          </NavLink>
          <NavLink
            to="/transparencia"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
            onClick={() => logClick('Nav - Transparencia', 'Header')}
          >
            Transparencia
          </NavLink>
          <NavLink
            to="/conocimiento"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
            onClick={() => logClick('Nav - Conocimiento', 'Header')}
          >
            Conocimiento
          </NavLink>
          <NavLink
            to="/notas-de-prensa"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
            onClick={() => logClick('Nav - Notas de prensa', 'Header')}
          >
            Notas de prensa
          </NavLink>
          <NavLink
            to="/galeria"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
            onClick={() => logClick('Nav - Galería', 'Header')}
          >
            Galería
          </NavLink>
          <NavLink
            to="/apoyanos"
            className={({ isActive }) => `apoyanos-btn ${isActive ? 'nav-active' : ''}`}
            onClick={() => logClick('Nav - Apóyanos', 'Header')}
          >
            Apóyanos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
