import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'High-performance, SEO-optimized websites built with modern frameworks like React, Next.js, and Vue.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Modern UI/UX'],
      delay: '0'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance and seamless user experiences.',
      features: ['iOS & Android', 'React Native', 'Native Performance', 'App Store Ready'],
      delay: '100'
    },
    {
      icon: '🤖',
      title: 'AI Solutions',
      description: 'Intelligent automation, chatbots, and machine learning solutions to transform your business.',
      features: ['AI Chatbots', 'Machine Learning', 'Process Automation', 'Data Analytics'],
      delay: '200'
    },
    {
      icon: '🌐',
      title: 'IoT Development',
      description: 'Connected device solutions with real-time dashboards and smart system integrations.',
      features: ['Smart Systems', 'Sensor Networks', 'Real-time Data', 'Remote Control'],
      delay: '300'
    },
    {
      icon: '🛠️',
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment with comprehensive project management.',
      features: ['End-to-End Development', 'Project Management', 'Quality Assurance', 'Deployment'],
      delay: '400'
    },
    {
      icon: '⚡',
      title: 'Tech Consulting',
      description: 'Strategic technology guidance to optimize your digital presence and business processes.',
      features: ['Tech Strategy', 'System Architecture', 'Performance Audit', 'Digital Transformation'],
      delay: '500'
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="services-circuit-bg"></div>
      <div className="container">
        <div className="services-header">
          <div className="services-badge">
            <span>What We Offer</span>
          </div>
          <h2 className="services-title">
            Comprehensive <span className="highlight">Digital Solutions</span>
          </h2>
          <p className="services-subtitle">
            From concept to deployment, we deliver cutting-edge digital solutions that drive growth 
            and transform businesses through innovative technology.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className="service-card-inner">
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-glow"></div>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <div className="feature-check">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="service-cta">
                  <a href="/contact" className="service-link">
                    <span>Learn More</span>
                    <div className="link-arrow">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="service-card-bg">
                <div className="card-circuit"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <div className="services-cta">
            <p className="cta-text">Ready to start your project?</p>
            <div className="cta-buttons">
              <a href="/hire-us" className="btn btn-primary">
                Start a Project
                <div className="btn-glow"></div>
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;