import React from 'react';
import './Footer.css';
import logo from '../../assets/blacklogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="TechDev Pro" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              We build ideas into reality with cutting-edge technology and innovative solutions.
              Your trusted partner for web, app, AI, and IoT development.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-link">
                <span className="social-icon">💼</span>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" aria-label="Email" className="social-link">
                <span className="social-icon">📧</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services#web" className="footer-link">Web Development</a></li>
              <li><a href="/services#mobile" className="footer-link">Mobile Apps</a></li>
              <li><a href="/services#ai" className="footer-link">AI Solutions</a></li>
              <li><a href="/services#iot" className="footer-link">IoT Development</a></li>
              <li><a href="/services#full" className="footer-link">Full Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                <span>service.partion@gmail.com</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91 9822474542</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91 8237536226</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">💬</span>
                <span>WhatsApp Available</span>
              </p>
            </div>
            <a href="/hire-us" className="footer-cta">
              Start Your Project <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2024 TechDev Pro. Crafted with <span className="heart">❤️</span> and Innovation.</p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;