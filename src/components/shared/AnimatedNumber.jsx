import React, { lazy, Suspense } from 'react';

// Lazy load framer-motion only when number animation is triggered
const MotionPaths = lazy(() =>
  import('framer-motion').then((mod) => ({
    default: ({ numberKey }) => {
      const { motion } = mod;
      const baseDelay = numberKey === 0 ? 1.2 : 0;

      return (
        <>
          {/* Diagonal top stroke */}
          <motion.path
            d="M 30,30 L 50,15"
            stroke="var(--gris-oscuro)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.3, ease: "easeInOut", delay: baseDelay },
              opacity: { duration: 0, delay: baseDelay }
            }}
          />
          {/* Vertical main line */}
          <motion.path
            d="M 50,15 L 50,105"
            stroke="var(--gris-oscuro)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.5, ease: "easeInOut", delay: baseDelay + 0.3 },
              opacity: { duration: 0, delay: baseDelay + 0.3 }
            }}
          />
          {/* Horizontal base line */}
          <motion.path
            d="M 20,105 L 80,105"
            stroke="var(--gris-oscuro)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.4, ease: "easeInOut", delay: baseDelay + 0.8 },
              opacity: { duration: 0, delay: baseDelay + 0.8 }
            }}
          />
        </>
      );
    }
  }))
);

function AnimatedNumber({ numberKey }) {
  return (
    <svg key={numberKey} className="voting-number-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <Suspense fallback={null}>
        <MotionPaths numberKey={numberKey} />
      </Suspense>
    </svg>
  );
}

export default AnimatedNumber;
