import React from 'react';
import './Footer.css';
import logo from '../../assets/blacklogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="TechDev Pro" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              We build ideas into reality with cutting-edge technology and innovative solutions.
              Your trusted partner for web, app, AI, and IoT development.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/techdev-pro" aria-label="LinkedIn" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <svg className="footer-social-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path>
                </svg>
              </a>
              <a href="mailto:service.partion@gmail.com?subject=Inquiry%20from%20TechDev%20Pro%20Website&body=Hello%20TechDev%20Pro%20Team%2C%0A%0AI%27m%20reaching%20out%20via%20your%20website.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services%20in%20web%2C%20app%2C%20AI%2C%20or%20IoT%20development.%20Could%20you%20please%20share%20details%20on%20how%20we%20can%20get%20started%3F%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D" aria-label="Email" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <svg className="footer-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                  <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path>
                  <path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"></path>
                  <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path>
                  <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"></path>
                  <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"></path>
                </svg>
              </a>
              <a href="https://wa.me/919822474542?text=Hello%20TechDev%20Pro%20Team%2C%0A%0AI%27m%20reaching%20out%20via%20your%20website.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services%20in%20web%2C%20app%2C%20AI%2C%20or%20IoT%20development.%20Could%20you%20please%20share%20details%20on%20how%20we%20can%20get%20started%3F%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D" aria-label="WhatsApp" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <svg className="footer-social-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path>
                  <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path>
                  <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path>
                  <defs>
                    <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5BD066"></stop>
                      <stop offset="1" stopColor="#27B43E"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="/services#web" className="footer-link">Web Development</a></li>
              <li><a href="/services#mobile" className="footer-link">Mobile Apps</a></li>
              <li><a href="/services#ai" className="footer-link">AI Solutions</a></li>
              <li><a href="/services#iot" className="footer-link">IoT Development</a></li>
              <li><a href="/services#full" className="footer-link">Full Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="footer-contact-info">
              <p className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg className="footer-contact-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                    <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path>
                    <path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"></path>
                    <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path>
                    <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"></path>
                    <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"></path>
                  </svg>
                </span>
                <a href="mailto:service.partion@gmail.com?subject=Inquiry%20from%20TechDev%20Pro%20Website&body=Hello%20TechDev%20Pro%20Team%2C%0A%0AI%27m%20reaching%20out%20via%20your%20website.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services%20in%20web%2C%20app%2C%20AI%2C%20or%20IoT%20development.%20Could%20you%20please%20share%20details%20on%20how%20we%20can%20get%20started%3F%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D" className="footer-contact-link">service.partion@gmail.com</a>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg className="footer-contact-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path>
                    <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path>
                    <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path>
                    <defs>
                      <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BD066"></stop>
                        <stop offset="1" stopColor="#27B43E"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <a href="https://wa.me/919822474542?text=Hello%20TechDev%20Pro%20Team%2C%0A%0AI%27m%20reaching%20out%20via%20your%20website.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services%20in%20web%2C%20app%2C%20AI%2C%20or%20IoT%20development.%20Could%20you%20please%20share%20details%20on%20how%20we%20can%20get%20started%3F%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D" className="footer-contact-link">+91 9822474542</a>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg className="footer-contact-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path>
                    <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path>
                    <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path>
                    <defs>
                      <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BD066"></stop>
                        <stop offset="1" stopColor="#27B43E"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <a href="https://wa.me/918237536226?text=Hello%20TechDev%20Pro%20Team%2C%0A%0AI%27m%20reaching%20out%20via%20your%20website.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services%20in%20web%2C%20app%2C%20AI%2C%20or%20IoT%20development.%20Could%20you%20please%20share%20details%20on%20how%20we%20can%20get%20started%3F%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D" className="footer-contact-link">+91 8237536226</a>
              </p>
            </div>
            <a href="/hire-us" className="footer-cta">
              Start Your Project <span className="footer-cta-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2024 TechDev Pro. Crafted with <span className="footer-heart">❤️</span> and Innovation.</p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;