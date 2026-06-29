import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
};

const noMotionVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionWrapper({ id, className = '', children }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={prefersReducedMotion ? noMotionVariants : sectionVariants}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
}

// Child animation variant for stagger effect
export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const childNoMotionVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};
