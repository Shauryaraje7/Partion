import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/blacklogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
              <a 
                href="#services" 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => handleLinkClick('services')}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleLinkClick('portfolio')}
              >
                Portfolio
              </a>
              <a 
                href="#testimonials" 
                className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
                onClick={() => handleLinkClick('testimonials')}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </a>
            </div>
            <div className="nav-actions">
              <a 
                href="#contact" 
                className="nav-cta"
                onClick={() => handleLinkClick('contact')}
              >
                Hire Us
              </a>
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