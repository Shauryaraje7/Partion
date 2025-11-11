import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/assets/logo.png" alt="TechDev Pro" />
              <span>TechDev Pro</span>
            </div>
            <p className="footer-description">
              We build ideas into reality with cutting-edge technology and innovative solutions. 
              Your trusted partner for web, app, AI, and IoT development.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Email">📧</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services#web">Web Development</a></li>
              <li><a href="/services#mobile">Mobile Apps</a></li>
              <li><a href="/services#ai">AI Solutions</a></li>
              <li><a href="/services#iot">IoT Development</a></li>
              <li><a href="/services#full">Full Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 contact@techdevpro.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>💬 WhatsApp Available</p>
            </div>
            <a href="/hire-us" className="footer-cta">
              Start Your Project →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 TechDev Pro. Crafted with ❤️ and Innovation.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;