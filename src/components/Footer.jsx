
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="top">
      <div className="container footer-inner">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            G<span>tech</span>
          </Link>

          <p>
            Building useful digital experiences through creativity,
            analytical thinking, and continuous learning.
          </p>

          <p className="footer-colors">
            Black <span>·</span> White <span>·</span> Gold
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/cv">My CV</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact and Social Links */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>

          <a href="mailto:edfrikconsult@gmail.com">
            <Mail size={17} />
            <span>Send me an email</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://github.com/amogomoses12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={17} />
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/mosesamogo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={17} />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} />
          </a>

          <Link to="/contact" className="footer-cta">
            Have an idea? Let's talk
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container footer-bottom">
        <p>© {currentYear} Amogo Moses. All rights reserved.</p>

        <p>Built with curiosity and code.</p>

        <a href="#top" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}