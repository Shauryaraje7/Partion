import React from 'react';
import './Services.css';
import website from '../../assets/website.svg'


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
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance and seamless user experiences.',
      features: ['iOS & Android', 'React Native', 'Native Performance', 'App Store Ready'],
      delay: '100'
    },
    {
      icon: <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2563eb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ai</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#2563eb" transform="translate(64.000000, 64.000000)"> <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>,
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
      icon: <svg fill="#2563eb" height="175px" width="175px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#2563eb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M393.872,454.517c-2.304,0-4.583-0.804-6.412-2.354l-99.315-84.194H68.115C30.556,367.968,0,337.242,0,299.474V103.977 c0-37.768,30.556-68.494,68.115-68.494h353.77c37.559,0,68.115,30.727,68.115,68.494v195.497 c0,37.768-30.556,68.494-68.115,68.494h-18.071v76.549c0,3.891-2.243,7.428-5.752,9.067 C396.723,454.21,395.293,454.517,393.872,454.517z M68.115,55.483c-26.592,0-48.226,21.754-48.226,48.494v195.497 c0,26.739,21.634,48.494,48.226,48.494h223.662c2.346,0,4.616,0.834,6.411,2.354l85.737,72.685v-65.039c0-5.523,4.453-10,9.945-10 h28.015c26.592,0,48.226-21.755,48.226-48.494V103.977c0-26.74-21.634-48.494-48.226-48.494H68.115z"></path> </g> <g> <g> <path d="M405.168,147.469H84.832c-5.492,0-9.944-4.478-9.944-10c0-5.523,4.452-10,9.944-10h320.335c5.492,0,9.944,4.477,9.944,10 C415.111,142.991,410.66,147.469,405.168,147.469z"></path> </g> <g> <path d="M405.168,211.503H84.832c-5.492,0-9.944-4.478-9.944-10c0-5.523,4.452-10,9.944-10h320.335c5.492,0,9.944,4.477,9.944,10 C415.111,207.025,410.66,211.503,405.168,211.503z"></path> </g> <g> <path d="M405.168,275.538H84.832c-5.492,0-9.944-4.478-9.944-10c0-5.523,4.452-10,9.944-10h320.335c5.492,0,9.944,4.476,9.944,10 C415.111,271.06,410.66,275.538,405.168,275.538z"></path> </g> </g> </g> </g></svg>,
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
                  {/* <div className="service-glow"></div> */}
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