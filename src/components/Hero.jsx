import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FloatingLogo from './FloatingLogo';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gold font-medium tracking-[0.4em] uppercase mb-4 block">
              Nueva Temporada 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-[1.1]">
              Redefiniendo <br />
              <span className="font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gold/50">el Estilo.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed">
              Curamos las piezas más exclusivas para aquellos que entienden que el estilo es una forma de expresión personal, no una tendencia.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow"
              >
                Comprar Ahora
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
              >
                Ver Lookbook
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full max-w-xl mx-auto flex items-center justify-center"
        >
          <div className="absolute inset-0 border border-gold/20 translate-x-6 translate-y-6 z-0"></div>
          
          {/* Three.js 3D Element */}
          <div className="absolute inset-0 z-10 opacity-60 pointer-events-none">
            <FloatingLogo />
          </div>
          <div className="relative z-0 w-full h-full overflow-hidden">
            <img 
              src="/hero.png" 
              alt="Premium Fashion" 
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass p-6 max-w-[240px] z-20"
          >
            <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Premium Quality</span>
            <p className="text-sm font-medium leading-tight">
              Materiales orgánicos y manufactura artesanal.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-white/10 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
