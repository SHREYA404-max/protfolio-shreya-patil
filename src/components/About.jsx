import { motion, useReducedMotion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionWrapper, { childVariants, childNoMotionVariants } from './SectionWrapper';
import { aboutData } from '../data/content';
import './About.css';

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? childNoMotionVariants : childVariants;

  return (
    <SectionWrapper id="about">
      <motion.div variants={variants} className="section-label">
        <User size={14} />
        About
      </motion.div>

      <motion.h2 variants={variants} className="section-title">
        A bit about <em>myself</em>
      </motion.h2>

      <motion.p variants={variants} className="about__bio">
        {aboutData.bio}
      </motion.p>
    </SectionWrapper>
  );
}
