import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-circuit-lines">
          <div className="circuit-line line-1"></div>
          <div className="circuit-line line-2"></div>
          <div className="circuit-line line-3"></div>
        </div>
        <div className="hero-particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              background: `var(--${Math.random() > 0.5 ? 'circuit-blue' : 'circuit-cyan'})`
            }}></div>
          ))}
        </div>
        <div className="circuit-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
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
      </div>
    </section>
  );
};

export default Hero;