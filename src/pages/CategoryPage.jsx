import React from 'react';
import { motion } from 'framer-motion';
import FeaturedCarousel from '../components/FeaturedCarousel';

const CategoryPage = ({ title, subtitle, image, description }) => {
  return (
    <div className="pt-32 min-h-screen">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.4em] uppercase mb-4 block">
              {subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              Colección <span className="font-bold">{title}</span>
            </h1>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Catálogo</span>
              <h2 className="text-4xl font-light tracking-tight">Explora la <span className="font-bold">Selección.</span></h2>
            </div>
          </div>
          
          <FeaturedCarousel />
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
