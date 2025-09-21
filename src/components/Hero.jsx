import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ChevronLeft, ChevronRight, Play, Wrench } from 'lucide-react';

const images = [
  { src: '/imagenes MecanicaLolo/banner.jpeg', title: 'Taller Principal', subtitle: 'Instalaciones modernas' },
  { src: '/imagenes de taller/1.png', title: 'Diagnóstico Avanzado', subtitle: 'Tecnología de última generación' },
  { src: '/imagenes de taller/2.png', title: 'Reparaciones Precisas', subtitle: 'Trabajo especializado' },
  { src: '/imagenes de taller/3.png', title: 'Equipo Profesional', subtitle: 'Experiencia garantizada' },
  { src: '/imagenes de taller/4.png', title: 'Resultados Garantizados', subtitle: 'Calidad certificada' }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setDirection('next');
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setDirection(index > current ? 'next' : 'prev');
    setCurrent(index);
  };

  const nextSlide = () => {
    setDirection('next');
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageLoad = (index) => {
    // Función para manejar la carga de imágenes (opcional)
    console.log(`Image ${index} loaded successfully`);
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={image.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              current === idx 
                ? 'opacity-100 scale-100 z-0' 
                : direction === 'next' 
                  ? 'opacity-0 scale-105 translate-x-8 z-0' 
                  : 'opacity-0 scale-105 -translate-x-8 z-0'
            }`}
            style={{
              filter: 'brightness(0.7) contrast(1.15) saturate(1.1)',
              transition: 'filter 0.5s',
            }}
            onLoad={() => handleImageLoad(idx)}
            onError={(e) => {
              console.warn(`Error loading image: ${image.src}`);
              e.target.style.display = 'none';
            }}
          />
        ))}
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/60 pointer-events-none"></div>
        {/* Efecto de partículas animadas */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400 rounded-full animate-ping"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna izquierda - Contenido */}
            <div className="text-white space-y-8">
              {/* Badge animado */}
              <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 animate-bounce">
                <Wrench className="h-5 w-5 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-yellow-400 font-bold text-sm">15+ Años de Experiencia</span>
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="block text-white">Mecánica</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                    Profesional
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>

              {/* Información dinámica de la imagen actual */}
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  {images[current]?.title}
                </h3>
                <p className="text-slate-300 text-lg">
                  {images[current]?.subtitle}
                </p>
              </div>

              {/* Descripción */}
              <p className="text-xl text-slate-200 leading-relaxed max-w-lg">
                En Mecánica Lolo transformamos problemas en soluciones. 
                <span className="text-yellow-400 font-semibold"> Confianza, calidad y garantía</span> en cada servicio.
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/5491234567890"
                  className="group relative bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25"
                >
                  <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span>Consultar por WhatsApp</span>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </a>
                
                <a
                  href="tel:+5491234567890"
                  className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-500/25"
                >
                  <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span>Llamar Ahora</span>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </a>
              </div>
            </div>

            {/* Columna derecha - Controles del carrusel */}
            <div className="lg:flex lg:flex-col lg:items-end hidden">
              {/* Miniatura de la imagen actual */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-slate-700/50">
                <div className="w-64 h-40 rounded-xl overflow-hidden mb-4">
                  <img
                    src={images[current]?.src}
                    alt={images[current]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-yellow-400 font-semibold">{images[current]?.title}</p>
                  <p className="text-slate-400 text-sm">{images[current]?.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
            
            {/* Botón anterior */}
            <button
              onClick={prevSlide}
              className="bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    current === idx
                      ? 'w-12 h-3 bg-gradient-to-r from-yellow-400 to-orange-500'
                      : 'w-3 h-3 bg-slate-500 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextSlide}
              className="bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Botón play/pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 border ${
                isPlaying 
                  ? 'bg-yellow-400/20 border-yellow-400/50 text-yellow-400' 
                  : 'bg-slate-800/60 border-slate-600/50 text-white'
              } backdrop-blur-sm`}
            >
              <Play className={`h-6 w-6 ${isPlaying ? '' : 'fill-current'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Efecto de líneas animadas en los bordes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
