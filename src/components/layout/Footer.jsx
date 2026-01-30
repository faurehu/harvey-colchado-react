import React from 'react';
import { logClick } from '../../utils/analytics';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/common/logo-footer.png" alt="Harvey Colchado" loading="lazy" />
          </div>
          <div className="footer-contact">
            <p>Contacto de prensa</p>
            <p className="footer-email">
              <a href="mailto:equipoharveycolchado@gmail.com" onClick={() => logClick('Email Contact', 'Footer')}>equipoharveycolchado@gmail.com</a>
            </p>
            <p>Sígueme en mis redes oficiales</p>
            <div className="social-icons">
              <button type="button" className="social-icon" style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }} onClick={() => logClick('Social - Facebook', 'Footer')}>
                <img src="/images/common/redes/icono_facebook.svg" alt="Facebook" loading="lazy" />
              </button>
              <a href="https://www.instagram.com/harveycolchadoficial/" target="_blank" rel="noopener noreferrer" className="social-icon" onClick={() => logClick('Social - Instagram', 'Footer')}>
                <img src="/images/common/redes/icono_instagram.svg" alt="Instagram" loading="lazy" />
              </a>
              <a href="https://www.tiktok.com/@harveycolchadoficial?lang=es" target="_blank" rel="noopener noreferrer" className="social-icon" onClick={() => logClick('Social - TikTok', 'Footer')}>
                <img src="/images/common/redes/icono_tiktok.svg" alt="TikTok" loading="lazy" />
              </a>
              <a href="https://x.com/HarveyColchado" target="_blank" rel="noopener noreferrer" className="social-icon" onClick={() => logClick('Social - X', 'Footer')}>
                <img src="/images/common/redes/icono_x.svg" alt="X (Twitter)" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
