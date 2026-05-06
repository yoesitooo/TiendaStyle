import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Abrigo de Lana Minimalist',
    price: '$289.00',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Camisa de Seda Blanca',
    price: '$145.00',
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Pantalón de Lino Crudo',
    price: '$110.00',
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Bolsito de Cuero Negro',
    price: '$320.00',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    name: 'Botas Chelsea Premium',
    price: '$240.00',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=600'
  }
];

const FeaturedCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    dragFree: true
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Destacados</span>
            <h2 className="text-4xl font-light tracking-tight">Piezas <span className="font-bold">Icónicas.</span></h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product) => (
              <div key={product.id} className="flex-[0_0_85%] md:flex-[0_0_30%] min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-gold transition-colors">
            <Heart size={18} />
          </button>
          <button className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-gold transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-white">
            Limited
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2 block">
          {product.category}
        </span>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <span className="text-zinc-300 font-medium">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
