import React from 'react';
import Hero from '../components/Hero';
import BentoCategories from '../components/BentoCategories';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <>
      <Hero />
      
      <div id="colecciones">
        <BentoCategories />
      </div>
      
      <div id="destacados">
        <FeaturedCarousel />
      </div>
      
      <Newsletter />
    </>
  );
}

export default Home;
