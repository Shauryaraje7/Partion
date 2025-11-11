import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with AI-powered recommendations and real-time analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      demoLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Patient management and telemedicine application with secure video consultations.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'WebRTC'],
      demoLink: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Home IoT System',
      category: 'iot',
      description: 'Complete home automation with sensor networks and intelligent energy management.',
      image: '/api/placeholder/400/300',
      technologies: ['IoT', 'React', 'Node.js', 'WebSockets'],
      demoLink: '#'
    },
    {
      id: 4,
      title: 'AI Chatbot Solution',
      category: 'ai',
      description: 'Customer service automation with natural language processing and sentiment analysis.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'React', 'API'],
      demoLink: '#'
    },
    {
      id: 5,
      title: 'Business Dashboard',
      category: 'web',
      description: 'Real-time analytics and business intelligence platform with interactive data visualization.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      demoLink: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform fitness and health monitoring with AI-powered workout recommendations.',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'Firebase', 'Health APIs'],
      demoLink: '#'
    },
    {
      id: 7,
      title: 'Blockchain Wallet',
      category: 'web',
      description: 'Secure cryptocurrency wallet with multi-chain support and real-time market data.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Web3.js', 'Node.js', 'Blockchain'],
      demoLink: '#'
    },
    {
      id: 8,
      title: 'AR Shopping Experience',
      category: 'mobile',
      description: 'Augmented reality shopping app with virtual try-on and 3D product visualization.',
      image: '/api/placeholder/400/300',
      technologies: ['Unity', 'ARKit', 'React Native', '3D Modeling'],
      demoLink: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'ai', label: 'AI Solutions', count: projects.filter(p => p.category === 'ai').length },
    { key: 'iot', label: 'IoT Systems', count: projects.filter(p => p.category === 'iot').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="portfolio-circuit-bg"></div>
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-badge">
            <span>Our Work</span>
          </div>
          <h2 className="portfolio-title">
            Innovative <span className="highlight">Digital Solutions</span>
          </h2>
          <p className="portfolio-subtitle">
            Discover how we transform ideas into powerful digital experiences 
            that drive results and exceed expectations.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <span className="filter-text">{filter.label}</span>
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-card-inner">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a href={project.demoLink} className="project-demo">
                        <span>View Live</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <button className="project-details">
                        <span>Details</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <a href={project.demoLink} className="project-link">
                      Explore Project
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="project-glow"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <div className="cta-buttons">
              <a href="/hire-us" className="btn btn-primary">
                Start a Project
                <div className="btn-glow"></div>
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                View All Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;