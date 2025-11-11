import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 12 hours.');
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Ready to Start Your Project?</h2>
            <p className="contact-subtitle">
              Let's discuss your idea and bring it to life. We're here to help you succeed.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>service.partion@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+91 9822474542</p>
                  <p>+91 8237536226</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/company/techdevpro</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <h4>🚀 Fast Response Guarantee</h4>
              <p>We reply within 12 hours to discuss your project requirements and provide initial guidance.</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI Solution</option>
                    <option value="iot">IoT System</option>
                    <option value="full">Full Project</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select Budget</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Description *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>

              <div className="whatsapp-cta">
                <p>Prefer instant communication?</p>
                <a href="https://wa.me/15551234567" className="whatsapp-link">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;