import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 -z-10"></div>
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-gold font-medium tracking-[0.4em] uppercase mb-6 block">Únete al Círculo</span>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Mantente al tanto de <br />
            <span className="font-bold">lanzamientos exclusivos.</span>
          </h2>
          <p className="text-zinc-500 mb-12 text-lg">
            Recibe curadurías semanales, acceso anticipado a colecciones y beneficios para miembros de Tienda Style.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 focus:outline-none focus:border-gold transition-colors text-white"
            />
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors">
              Suscribirse
            </button>
          </form>
          
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Al suscribirte, aceptas nuestra política de privacidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
