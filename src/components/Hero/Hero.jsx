import React from 'react';
import './Hero.css';
import hero from '../../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-grid">
            {/* Left Section - Text Content */}
            <div className="hero-left">
              <div className="hero-badge">
                <span>🚀 Future-Ready Development</span>
              </div>
              
              <h1 className="hero-title">
                We Build Ideas into <span className="highlight-gradient">Reality</span>
              </h1>
              
              <p className="hero-subtitle">
                Your one-stop destination for tech-driven project development and business transformation. 
                From websites and apps to AI solutions and complete product building.
              </p>
              
              <div className="hero-buttons">
                <a href="/hire-us" className="btn btn-gradient">Start a Project</a>
                <a href="/contact" className="btn btn-secondary">Get a Free Quote</a>
              </div>
              
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            
            {/* Right Section - Image */}
            <div className="hero-right">
              <div className="hero-image-container">
                <img src={hero} alt="Hero Illustration" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;