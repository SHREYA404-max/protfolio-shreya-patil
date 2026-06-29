import { personalInfo, navLinks } from '../data/content';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="divider" />

        <div className="footer__content">
          <p className="footer__copyright">
            © {currentYear} {personalInfo.name}
          </p>

          <nav className="footer__links" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
