import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo2.png'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-circuit"></div>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Partion" className="logo-image" />
            <span className="logo-text"></span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-links">
              <a href="/" className="nav-link" onClick={handleLinkClick}>Home</a>
              <a href="/services" className="nav-link" onClick={handleLinkClick}>Services</a>
              <a href="/portfolio" className="nav-link" onClick={handleLinkClick}>Portfolio</a>
              <a href="/about" className="nav-link" onClick={handleLinkClick}>About</a>
              <a href="/contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
            </div>
            <div className="nav-actions">
              <a href="/hire-us" className="nav-cta" onClick={handleLinkClick}>Hire Us</a>
            </div>
          </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Overlay for mobile menu */}
          {isMenuOpen && (
            <div 
              className="nav-overlay" 
              onClick={toggleMenu}
              aria-hidden="true"
            ></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;