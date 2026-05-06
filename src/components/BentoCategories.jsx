import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Nueva Colección',
    subtitle: 'Invierno 2026',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    size: 'lg',
    link: '/mujeres'
  },
  {
    title: 'Hombres',
    subtitle: 'Esenciales',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800',
    size: 'sm',
    link: '/hombres'
  },
  {
    title: 'Mujeres',
    subtitle: 'Elegancia',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    size: 'sm',
    link: '/mujeres'
  },
  {
    title: 'Accesorios',
    subtitle: 'El detalle final',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    size: 'md',
    link: '/accesorios'
  },
  {
    title: 'Lookbook',
    subtitle: 'Explora nuestra visión',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    size: 'md',
    link: '/lookbook'
  }
];

const BentoCategories = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Categorías</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Curaduría por <span className="font-bold">Esencia.</span></h2>
          </div>
          <p className="text-zinc-500 max-w-sm">
            Diseñamos cada colección pensando en la versatilidad y la longevidad de cada pieza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[1200px] md:h-[800px]">
          {/* Large Item */}
          <CategoryCard category={categories[0]} className="md:col-span-2 md:row-span-2" />
          
          {/* Small Items */}
          <CategoryCard category={categories[1]} className="md:col-span-1 md:row-span-1" />
          <CategoryCard category={categories[2]} className="md:col-span-1 md:row-span-1" />
          
          {/* Medium Items */}
          <CategoryCard category={categories[3]} className="md:col-span-1 md:row-span-1" />
          <CategoryCard category={categories[4]} className="md:col-span-1 md:row-span-1" />
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category, className }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative group overflow-hidden rounded-3xl ${className}`}
    >
      <Link to={category.link} className="block w-full h-full">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
        <img 
          src={category.image} 
          alt={category.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-xs uppercase tracking-[0.3em] text-gold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">
            {category.subtitle}
          </span>
          <h3 className="text-2xl font-medium tracking-tight text-white mb-2">
            {category.title}
          </h3>
          <div className="w-0 h-px bg-white group-hover:w-12 transition-all duration-500"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BentoCategories;
