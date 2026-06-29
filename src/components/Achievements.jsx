import { motion, useReducedMotion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import SectionWrapper, { childVariants, childNoMotionVariants } from './SectionWrapper';
import { certificationsData } from '../data/content';
import './Achievements.css';

export default function Achievements() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? childNoMotionVariants : childVariants;

  return (
    <SectionWrapper id="achievements">
      <motion.div variants={variants} className="section-label">
        <Award size={14} />
        Achievements
      </motion.div>

      <motion.h2 variants={variants} className="section-title">
        Certificates & <em>Achievements</em>
      </motion.h2>

      <motion.p variants={variants} className="section-subtitle">
        A gallery of my professional certifications, courses, and honors.
      </motion.p>

      <div className="achievements__grid">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className="achievements__card card"
            variants={variants}
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
          >
            {cert.image && (
              <div className="achievements__card-image">
                <img src={cert.image} alt={cert.name} />
              </div>
            )}

            <div className="achievements__card-content">
              <div className="achievements__card-header">
                <div className="achievements__icon-wrapper">
                  <Award size={18} />
                </div>
                {cert.verifyLink && cert.verifyLink !== '#' && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievements__link"
                    aria-label={`Verify ${cert.name}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div className="achievements__card-body">
                <h4 className="achievements__cert-name">{cert.name}</h4>
                <p className="achievements__cert-issuer">{cert.issuer}</p>
              </div>

              <div className="achievements__card-footer">
                <span className="achievements__cert-year">
                  <Calendar size={12} />
                  {cert.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
