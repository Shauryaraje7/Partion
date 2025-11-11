import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/15551234567" 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

export default App;