import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'They built our startup platform from idea to launch — highly recommend. The team delivered beyond our expectations with their technical expertise.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'HealthCare Plus',
      role: 'CTO',
      content: 'Delivered a full web app and AI chatbot faster than any other team! Their attention to detail and project management was impressive.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'SmartHome Solutions',
      role: 'Product Manager',
      content: 'The IoT system they developed transformed our business operations. Professional, reliable, and incredibly skilled team.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from businesses we've helped transform
        </p>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;