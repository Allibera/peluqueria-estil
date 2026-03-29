import React, { useEffect, useRef } from 'react';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Reviews from './components/Reviews';
import HowToBook from './components/HowToBook';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const compRef = useRef(null);

  useEffect(() => {
    // Highly-optimized native CSS IntersectionObserver
    // rootMargin '0px 0px 400px 0px' ensures animations are triggered 400px 
    // BEFORE the user scrolls down, completely eliminating 'late pop-ins' or GSAP layout lag.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Native GPU acceleration via CSS
          entry.target.classList.add('is-visible');
          // Unobserve to free up memory immediately (only animate once)
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px 400px 0px',
      threshold: 0
    });

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={compRef} className="w-full flex flex-col min-h-screen bg-fondo overflow-x-hidden">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Team />
        <Reviews />
        <HowToBook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
