import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ChevronLeft, ChevronRight, Play, Wrench } from 'lucide-react';

const images = [
  { src: '/imagenes MecanicaLolo/banner.jpeg', title: 'Taller Principal', subtitle: 'Instalaciones modernas' },
  { src: '/imagenes de taller/1.png', title: 'Diagnóstico Avanzado', subtitle: 'Tecnología de última generación' },
  { src: '/imagenes de taller/2.png', title: 'Reparaciones Precisas', subtitle: 'Trabajo especializado' },
  { src: '/imagenes de taller/3.png', title: 'Equipo Profesional', subtitle: 'Experiencia garantizada' },
  { src: '/imagenes de taller/4.png', title: 'Resultados Garantizados', subtitle: 'Calidad certificada' },
  { src: '/images lolowebp/mec7.webp', title: 'Atención Personalizada', subtitle: 'Servicio al cliente excepcional' }
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
  <section id="inicio" className="relative min-h-screen overflow-hidden bg-black">
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
        {/* Overlay gradiente negro sutil */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(90deg, #00000099 0%, #00000040 80%, #00000099 100%)'
        }}></div>
        {/* Efecto de partículas animadas */}
  <div className="absolute inset-0 opacity-75 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#fefc09] rounded-full animate-ping"
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
        <div className="inline-flex items-center space-x-2 bg-[#fefc09]/20 backdrop-blur-sm border border-[#fefc09]/30 rounded-full px-6 py-3 animate-bounce">
          <Wrench className="h-5 w-5 text-[#fefc09] animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-[#fefc09] font-bold text-sm">15+ Años de Experiencia</span>
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="block text-[#fefc09] drop-shadow-[0_2px_8px_rgba(254,252,9,0.5)]">Mecánica</span>
                  <span className="block bg-gradient-to-r from-[#fefc09] via-yellow-300 to-[#fefc09] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(254,252,9,0.5)]">
                    Profesional
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#fefc09] via-yellow-300 to-[#fefc09] rounded-full"></div>
              </div>

              {/* Información dinámica de la imagen actual */}
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-[#fefc09]/30 shadow-lg">
                <h3 className="text-2xl font-bold text-[#fefc09] mb-2 drop-shadow-[0_2px_8px_rgba(254,252,9,0.5)]">
                  {images[current]?.title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {images[current]?.subtitle}
                </p>
              </div>

              {/* Descripción */}
              <p className="text-xl text-gray-100 leading-relaxed max-w-lg">
                En Mecánica Lolo transformamos problemas en soluciones. 
                <span className="text-[#fefc09] font-semibold"> Confianza, calidad y garantía</span> en cada servicio.
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/5491234567890"
                  className="group relative bg-[#fefc09] hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-300/25 border border-black/10"
                >
                  <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span>Consultar por WhatsApp</span>
                  <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </a>
                
                <a
                  href="tel:+5491234567890"
                  className="group relative bg-gradient-to-r from-[#fefc09] via-yellow-300 to-[#fefc09] hover:from-yellow-300 hover:to-[#fefc09] text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-300/25 border border-black/10"
                >
                  <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span>Llamar Ahora</span>
                  <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </a>
              </div>
            </div>

            {/* Columna derecha - Controles del carrusel */}
            <div className="lg:flex lg:flex-col lg:items-end hidden">
              {/* Miniatura de la imagen actual */}
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-[#fefc09]/30 shadow-lg">
                <div className="w-64 h-40 rounded-xl overflow-hidden mb-4 border border-[#fefc09]/30">
                  <img
                    src={images[current]?.src}
                    alt={images[current]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[#fefc09] font-semibold drop-shadow-[0_2px_8px_rgba(254,252,9,0.5)]">{images[current]?.title}</p>
                  <p className="text-gray-300 text-sm">{images[current]?.subtitle}</p>
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
                      ? 'w-12 h-3 bg-gradient-to-r from-[#fefc09] via-yellow-300 to-[#fefc09]'
                      : 'w-3 h-3 bg-black/40 hover:bg-[#fefc09]/60'
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
                  ? 'bg-[#fefc09]/20 border-[#fefc09]/50 text-[#fefc09]' 
                  : 'bg-black/60 border-black/50 text-white'
              } backdrop-blur-sm`}
            >
              <Play className={`h-6 w-6 ${isPlaying ? '' : 'fill-current'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Efecto de líneas animadas en los bordes */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fefc09] to-transparent animate-pulse"></div>
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fefc09] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
