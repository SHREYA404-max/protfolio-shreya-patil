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
        Credentials
      </motion.div>

      <motion.h2 variants={variants} className="section-title">
        Education & <em>Achievements</em>
      </motion.h2>

      <div className="credentials__layout">
        {/* Education */}
        <motion.div variants={variants} className="credentials__group">
          <h3 className="credentials__group-title">Education</h3>

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

        {/* Certifications */}
        <motion.div variants={variants} className="credentials__group">
          <h3 className="credentials__group-title">Certifications</h3>

          <div className="credentials__certs">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="credentials__cert"
                variants={variants}
              >
                <div className="credentials__cert-info">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer} · {cert.year}</p>
                </div>
                {cert.verifyLink && cert.verifyLink !== '#' && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credentials__cert-link"
                    aria-label={`Verify ${cert.name}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div variants={variants} className="credentials__achievements">
        <h3 className="credentials__group-title">Achievements</h3>
        <div className="credentials__achievements-list">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              className="credentials__achievement"
              variants={variants}
            >
              <span className="credentials__achievement-bullet" />
              <span>{achievement.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
