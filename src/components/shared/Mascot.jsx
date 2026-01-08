import React, { useState, useEffect, useRef } from 'react';

function Mascot() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [position, setPosition] = useState({ left: null, top: null, right: '20px', bottom: '20px' });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const mascotRef = useRef(null);
  const inactivityTimerRef = useRef(null);
  const messageIntervalRef = useRef(null);
  const returnTimerRef = useRef(null);

  const messages = [
    '¡Hola! Soy Super René. ¿Necesitas ayuda con tu donación?',
    '¡Gracias por apoyar la campaña! Completa el formulario para donar.',
    '¿Tienes dudas sobre el proceso? ¡Estoy aquí para ayudarte!',
    'Tu apoyo es fundamental para el cambio. ¡Gracias por participar!',
    '¿Sabías que puedes unirte como voluntario? ¡Revisa el segundo formulario!'
  ];

  // Show mascot after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setHidden(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Message rotation
  useEffect(() => {
    if (visible && !hidden) {
      messageIntervalRef.current = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 8000);
    } else {
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
      }
    }

    return () => {
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
      }
    };
  }, [visible, hidden]);

  // Inactivity detection
  useEffect(() => {
    const resetInactivityTimer = () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }

      inactivityTimerRef.current = setTimeout(() => {
        if (!visible || hidden) {
          setVisible(true);
          setHidden(false);
          setMessageIndex(0);
        }
      }, 30000);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetInactivityTimer, true);
    });

    resetInactivityTimer();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetInactivityTimer, true);
      });
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [visible, hidden]);

  const handleClose = () => {
    setHidden(true);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  const startDrag = (e) => {
    setIsDragging(true);
    const rect = mascotRef.current.getBoundingClientRect();
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });

    e.preventDefault();
  };

  const drag = (e) => {
    if (!isDragging) return;

    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    const x = clientX - dragOffset.x;
    const y = clientY - dragOffset.y;

    const maxX = window.innerWidth - mascotRef.current.offsetWidth;
    const maxY = window.innerHeight - mascotRef.current.offsetHeight;

    const boundedX = Math.max(0, Math.min(x, maxX));
    const boundedY = Math.max(0, Math.min(y, maxY));

    setPosition({
      left: `${boundedX}px`,
      top: `${boundedY}px`,
      right: 'auto',
      bottom: 'auto'
    });

    e.preventDefault();
  };

  const stopDrag = () => {
    if (isDragging) {
      setIsDragging(false);

      // Return to original position after 5 seconds
      if (returnTimerRef.current) {
        clearTimeout(returnTimerRef.current);
      }

      returnTimerRef.current = setTimeout(() => {
        if (!isDragging) {
          setPosition({ left: null, top: null, right: '20px', bottom: '20px' });
        }
      }, 5000);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchmove', drag, { passive: false });
      document.addEventListener('touchend', stopDrag);
    }

    return () => {
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging, dragOffset]);

  if (!visible) return null;

  return (
    <div
      id="police-mascot"
      ref={mascotRef}
      className={`police-mascot ${hidden ? 'hidden' : ''}`}
      style={{
        left: position.left,
        top: position.top,
        right: position.right,
        bottom: position.bottom,
        transition: isDragging ? 'none' : 'all 0.3s ease'
      }}
    >
      <button
        id="mascot-close"
        className="mascot-close"
        onClick={handleClose}
        aria-label="Cerrar mascota"
      >
        ×
      </button>
      <div
        className="mascot-character"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="mascot-speech-bubble">
          <span id="mascot-message">{messages[messageIndex]}</span>
          <div className="speech-bubble-tail"></div>
        </div>
        <div className="mascot-image">
          <img src="/images/common/super_rana.png" alt="Super René - Mascota" />
        </div>
      </div>
    </div>
  );
}

export default Mascot;
