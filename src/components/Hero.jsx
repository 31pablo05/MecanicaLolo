
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const images = [
  
  '/imagenes MecanicaLolo/banner.jpeg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Banner ${idx + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-90' : 'opacity-0'} absolute inset-0`}
            style={{ filter: 'blur(2px) brightness(0.85)' }}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1974&q=80";
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold inline-block animate-pulse">
              ✨ Más de 15 años de experiencia
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-xl">
            <span className="text-yellow-400">Confianza</span> y experiencia<br />en cada reparación
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed drop-shadow-lg">
            En Mecánica Lolo cuidamos tu vehículo con la dedicación que merece. Servicio profesional, precios justos y garantía en todos nuestros trabajos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5491234567890"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+5491234567890"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
