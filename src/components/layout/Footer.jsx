import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/common/logo-footer.png" alt="Harvey Colchado" />
          </div>
          <div className="footer-contact">
            <p>Contacto de prensa</p>
            <p className="footer-email">
              <a href="mailto:equipoharveycolchado@gmail.com">equipoharveycolchado@gmail.com</a>
            </p>
            <p>Sígueme en mis redes oficiales</p>
            <div className="social-icons">
              <button type="button" className="social-icon" style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
                <img src="/images/common/redes/icono_facebook.svg" alt="Facebook" />
              </button>
              <a href="https://www.instagram.com/harveycolchadoficial/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/images/common/redes/icono_instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/@harveycolchadoficial?lang=es" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/images/common/redes/icono_tiktok.svg" alt="TikTok" />
              </a>
              <a href="https://x.com/HarveyColchado" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/images/common/redes/icono_x.svg" alt="X" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
