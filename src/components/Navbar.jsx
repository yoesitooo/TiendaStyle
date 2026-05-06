import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {['Colecciones', 'Hombres', 'Mujeres', 'Accesorios'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Logo */}
        <a href="/" className="flex flex-col items-center group">
          <span className="text-2xl font-bold tracking-[0.3em] uppercase transition-all duration-300 group-hover:tracking-[0.4em]">
            TIENDA<span className="text-gold">STYLE</span>
          </span>
          <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 group-hover:text-gold transition-colors">
            Luxury Minimal
          </span>
        </a>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-gold text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[60] lg:hidden p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-bold tracking-widest uppercase">TIENDASTYLE</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-400">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {['Colecciones', 'Hombres', 'Mujeres', 'Accesorios', 'Soporte'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-light tracking-wider hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-white/10 text-zinc-500 text-sm tracking-widest">
              © 2026 TIENDA STYLE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
