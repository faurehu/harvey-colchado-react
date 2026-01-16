import React, { lazy, Suspense } from 'react';

// Lazy load framer-motion only when X mark is shown
const MotionPath = lazy(() =>
  import('framer-motion').then((mod) => ({
    default: ({ d, delay = 0, ...props }) => {
      const { motion } = mod;
      return (
        <motion.path
          d={d}
          stroke="black"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: delay > 0 ? 0 : 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.5, ease: "easeInOut", delay },
            opacity: { duration: 0, delay }
          }}
          {...props}
        />
      );
    }
  }))
);

function AnimatedXMark({ className = "x-mark" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <Suspense fallback={null}>
        <MotionPath d="M 15,12 Q 20,18 30,30 Q 50,52 70,72 Q 80,83 88,90" />
        <MotionPath d="M 88,12 Q 80,20 70,30 Q 50,50 30,70 Q 20,81 12,88" delay={0.5} />
      </Suspense>
    </svg>
  );
}

export default AnimatedXMark;
