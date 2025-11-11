import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with AI-powered recommendations and real-time analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      demoLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      description: 'Patient management and telemedicine application with secure video consultations.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'WebRTC'],
      demoLink: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Home IoT System',
      description: 'Complete home automation with sensor networks and intelligent energy management.',
      image: '/api/placeholder/400/300',
      technologies: ['IoT', 'React', 'Node.js', 'WebSockets'],
      demoLink: '#'
    },
    {
      id: 4,
      title: 'AI Chatbot Solution',
      description: 'Customer service automation with natural language processing and sentiment analysis.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'React', 'API'],
      demoLink: '#'
    },
    {
      id: 5,
      title: 'Business Dashboard',
      description: 'Real-time analytics and business intelligence platform with interactive data visualization.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      demoLink: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Cross-platform fitness and health monitoring with AI-powered workout recommendations.',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'Firebase', 'Health APIs'],
      demoLink: '#'
    }
  ];

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  const toggleShowMore = () => {
    if (hasMoreProjects) {
      setVisibleCount(projects.length);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <section className="portfolio section" id="portfolio">
      <div className="portfolio-circuit-bg"></div>
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-badge">
            <span>Featured Work</span>
          </div>
          <h2 className="portfolio-title">
            Innovative Digital  <span className="highlight">Solutions</span>
          </h2>
          <p className="portfolio-subtitle">
            Discover how we transform ideas into powerful digital experiences that drive results and exceed expectations.
          </p>
        </div>

        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => (
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
                        <span>Live Demo</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
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
                      View Project
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

        {projects.length > 3 && (
          <div className="portfolio-show-more">
            <button 
              className="show-more-btn"
              onClick={toggleShowMore}
            >
              <span>{hasMoreProjects ? 'Show More Projects' : 'Show Less'}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
                className={hasMoreProjects ? '' : 'rotated'}
              >
                <path 
                  d="M5 7.5L10 12.5L15 7.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="portfolio-cta">
          <div className="cta-content">
            <h3 className="cta-title">Have a project in mind?</h3>
            <p className="cta-description">
              Let's collaborate to bring your ideas to life with innovative solutions.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Start a Project
                <div className="btn-glow"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;