import { motion, useReducedMotion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionWrapper, { childVariants, childNoMotionVariants } from './SectionWrapper';
import { educationData, certificationsData, achievementsData } from '../data/content';
import './Credentials.css';

export default function Credentials() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? childNoMotionVariants : childVariants;

  return (
    <SectionWrapper id="credentials">
      <motion.div variants={variants} className="section-label">
        <Award size={14} />
        Education
      </motion.div>

      <motion.h2 variants={variants} className="section-title">
        Academic <em>Timeline</em>
      </motion.h2>

      <div className="credentials__layout-single">
        {/* Education */}
        <motion.div variants={variants} className="credentials__group">
          <div className="credentials__timeline">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="credentials__timeline-item"
                variants={variants}
              >
                <div className="credentials__timeline-line" />
                <div className="credentials__timeline-content">
                  <span className="credentials__year">{item.year}</span>
                  <h4 className="credentials__degree">{item.degree}</h4>
                  <p className="credentials__institution">{item.institution}</p>
                  <p className="credentials__desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
