import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/content';
import './Hero.css';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  const childVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      };

  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p variants={childVariants} className="hero__greeting">
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 variants={childVariants} className="hero__name">
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p variants={childVariants} className="hero__title">
            {personalInfo.title}
          </motion.p>

          {/* Tagline */}
          <motion.p variants={childVariants} className="hero__tagline">
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={childVariants} className="hero__ctas">
            <a
              href={personalInfo.resumeUrl}
              className="btn btn-primary"
              download
              aria-label="Download Resume"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              aria-label="Go to Contact section"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </motion.div>

          {/* Minimal social links */}
          <motion.div variants={childVariants} className="hero__links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__link"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <span className="hero__link-sep">·</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__link"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <span className="hero__link-sep">·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero__link"
              aria-label="Send Email"
            >
              Email
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="hero__image-wrapper"
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero__image">
            {/* Replace src with your profile photo path, e.g. "/profile.jpg" */}
            <img
              src="/profile.jpg"
              alt="Shreya Patil"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <span className="hero__image-fallback" style={{ display: 'none' }}>SP</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
        animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
