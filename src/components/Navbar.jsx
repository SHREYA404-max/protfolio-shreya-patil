import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../data/content';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={prefersReducedMotion ? {} : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          Shreya Patil
        </a>

        {/* Desktop Nav */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href.substring(1) ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <a
          href={personalInfo.resumeUrl}
          className="btn btn-primary navbar__cta"
          download
          aria-label="Download Resume"
        >
          <Download size={14} />
          <span>Resume</span>
        </a>

        <div className="navbar__actions">
          <ThemeToggle />

          {/* Mobile Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__mobile-link ${activeSection === link.href.substring(1) ? 'navbar__mobile-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="btn btn-primary navbar__mobile-cta"
              download
              aria-label="Download Resume"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
