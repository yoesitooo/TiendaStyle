import React from 'react';
import { Camera, Send, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-8">
              <span className="text-xl font-bold tracking-[0.3em] uppercase">
                TIENDA<span className="text-gold">STYLE</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
              Elevando lo cotidiano a través del diseño minimalista y la manufactura artesanal desde 2026.
            </p>
            <div className="flex gap-4">
              {[Camera, Send, Globe].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-gold hover:text-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navegación</h4>
            <ul className="flex flex-col gap-4">
              {['Colecciones', 'Hombres', 'Mujeres', 'Accesorios', 'Lookbook'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Soporte</h4>
            <ul className="flex flex-col gap-4">
              {['Envío & Devoluciones', 'Guía de Tallas', 'Cuidado de Prendas', 'Preguntas Frecuentes', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Sede Central</h4>
            <address className="not-italic text-zinc-500 text-sm leading-relaxed flex flex-col gap-4">
              <p>Calle Estilo 123, <br />Distrito de la Moda, NYC</p>
              <p>+1 234 567 890</p>
              <p>hola@tiendastyle.com</p>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 TIENDA STYLE. Todos los derechos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Volver arriba</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
