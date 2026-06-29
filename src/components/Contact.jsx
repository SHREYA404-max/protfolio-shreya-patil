import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionWrapper, { childVariants, childNoMotionVariants } from './SectionWrapper';
import { personalInfo } from '../data/content';
import './Contact.css';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? childNoMotionVariants : childVariants;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <motion.div variants={variants} className="section-label">
        <Mail size={14} />
        Contact
      </motion.div>

      <motion.h2 variants={variants} className="section-title">
        Let's <em>connect</em>
      </motion.h2>

      <motion.p variants={variants} className="section-subtitle">
        Have a question or want to collaborate? I'd love to hear from you.
      </motion.p>

      <div className="contact__layout">
        {/* Left — Info */}
        <motion.div variants={variants} className="contact__info">
          <div className="contact__info-item">
            <span className="contact__info-label">Email</span>
            <a href={`mailto:${personalInfo.email}`} className="contact__info-value">
              {personalInfo.email}
            </a>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-label">Socials</span>
            <div className="contact__info-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-label">Location</span>
            <span className="contact__info-value contact__info-static">India</span>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          variants={variants}
          className="contact__form"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className="contact__field">
            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary contact__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              'Sending...'
            ) : (
              <>
                <Send size={15} />
                Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="contact__status contact__status--success">
              <CheckCircle size={16} />
              Message sent successfully!
            </div>
          )}

          {status === 'error' && (
            <div className="contact__status contact__status--error">
              <AlertCircle size={16} />
              Something went wrong. Please try again.
            </div>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
