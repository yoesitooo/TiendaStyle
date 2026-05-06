import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoCategories from './components/BentoCategories';
import FeaturedCarousel from './components/FeaturedCarousel';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-gold/30 selection:text-gold">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="colecciones">
          <BentoCategories />
        </div>
        
        <div id="destacados">
          <FeaturedCarousel />
        </div>
        
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
