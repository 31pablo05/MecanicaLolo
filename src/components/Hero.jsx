import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ChevronLeft, ChevronRight, Pause, Play, Wrench, Star, Shield, Zap } from 'lucide-react';

const images = [
  
  { src: '/imagenes de taller/1.png', title: 'Diagnóstico Avanzado', subtitle: 'Tecnología de última generación' },
  { src: '/imagenes de taller/2.png', title: 'Reparaciones Precisas', subtitle: 'Trabajo especializado certificado' },
  { src: '/imagenes de taller/3.png', title: 'Equipo Profesional', subtitle: 'Experiencia garantizada' },
  { src: '/imagenes de taller/4.png', title: 'Resultados Garantizados', subtitle: 'Calidad certificada' },
  { src: '/images lolowebp/mec7.webp', title: 'Atención Personalizada', subtitle: 'Servicio al cliente excepcional' }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState('next');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setDirection('next');
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    
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

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-black">
      {/* Carrusel de imágenes con efecto Ken Burns */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                current === idx ? 'scale-110' : 'scale-100'
              }`}
              style={{
                filter: 'brightness(0.8) contrast(1.15)',
              }}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3C/svg%3E';
              }}
            />
          </div>
        ))}
        
  {/* Overlay gradiente mejorado */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10 z-20"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-20"></div>
      </div>

      {/* Contenido principal */}
      <div className={`relative z-30 min-h-screen flex items-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna izquierda - Contenido principal (8 columnas) */}
            <div className="lg:col-span-8 text-white space-y-6 md:space-y-8">
              
              {/* Badge animado */}
              <div className={`inline-flex items-center space-x-2 bg-yellow-400/10 backdrop-blur-md border border-yellow-400/30 rounded-full px-4 md:px-6 py-2 md:py-3 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <Wrench className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-xs md:text-sm">15+ Años de Experiencia</span>
              </div>

              {/* Título principal */}
              <div className={`space-y-3 md:space-y-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                  <span className="block text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)] animate-pulse">
                    Mecánica Lolo
                  </span>
                  <span className="block text-white mt-2">
                    Tu Taller de{' '}
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                      Confianza
                    </span>
                  </span>
                </h1>
                <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent rounded-full"></div>
              </div>

              {/* Descripción */}
              <p className={`text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Transformamos problemas en soluciones con{' '}
                <span className="text-yellow-400 font-bold">calidad certificada</span> y{' '}
                <span className="text-yellow-400 font-bold">garantía total</span>.
                Tu vehículo en las mejores manos.
              </p>

              {/* Features rápidas */}
              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-yellow-400/20 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Wrench className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base">Excelencia</p>
                    <p className="text-xs text-gray-400">Servicio 5 estrellas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-yellow-400/20 p-2 rounded-lg">
                    <Shield className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base">Garantía</p>
                    <p className="text-xs text-gray-400">100% asegurado</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-yellow-400/20 p-2 rounded-lg">
                    <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base">Rapidez</p>
                    <p className="text-xs text-gray-400">Servicio eficiente</p>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <a
                  href="https://wa.me/542804594131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center space-x-2 md:space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
                >
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform" />
                  <span>Consultar por WhatsApp</span>
                </a>
                
                <a
                  href="tel:+542804594131"
                  className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg flex items-center justify-center space-x-2 md:space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50"
                >
                  <Phone className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform" />
                  <span>Llamar Ahora</span>
                </a>
              </div>
            </div>

            {/* Columna derecha - Info de imagen actual (4 columnas) */}
            <div className={`lg:col-span-4 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl">
                {/* Miniatura */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl overflow-hidden mb-4 md:mb-6 border-2 border-yellow-400/30 shadow-lg group">
                  <img
                    src={images[current]?.src}
                    alt={images[current]?.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <p className="text-yellow-400 font-bold text-sm md:text-base drop-shadow-lg">{images[current]?.title}</p>
                    <p className="text-white/90 text-xs md:text-sm">{images[current]?.subtitle}</p>
                  </div>
                </div>

                {/* Control de reproducción - Solo Desktop */}
                <div className="hidden lg:flex justify-end mb-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      isPlaying 
                        ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/50' 
                        : 'bg-white/10 text-white border border-white/20'
                    } backdrop-blur-sm`}
                  >
                    {isPlaying ? <Pause className="h-4 w-4 md:h-5 md:w-5" /> : <Play className="h-4 w-4 md:h-5 md:w-5" />}
                  </button>
                </div>

                {/* Indicadores de progreso - Solo Desktop */}
                <div className="hidden lg:flex justify-center items-center space-x-2 mt-4">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`group relative ${
                        current === idx ? 'w-8' : 'w-2'
                      } h-2 rounded-full transition-all duration-300 overflow-hidden ${
                        current === idx
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    >
                      {current === idx && isPlaying && (
                        <div className="absolute inset-0 bg-yellow-300/50 animate-progress"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controles de navegación (móvil en bottom, desktop integrados) */}
          <div className="flex lg:hidden items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    current === idx
                      ? 'w-8 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Controles desktop (ocultos en móvil) */}
          <div className="hidden lg:flex absolute bottom-8 right-8 space-x-3">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-yellow-400/80 hover:text-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-yellow-400"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-yellow-400/80 hover:text-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-yellow-400"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Borde decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-30"></div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;