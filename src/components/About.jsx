import React, { useState, useEffect } from 'react';
import { Shield, Star, Car, Settings, Users, Award, CheckCircle, Zap, TrendingUp } from 'lucide-react';

const tallerImages = [
  { src: '/images lolowebp/mec1.webp', alt: 'Instalaciones Mecánica Lolo', title: 'Nuestras Instalaciones' },
  { src: '/images lolowebp/mec2.webp', alt: 'Equipo profesional trabajando', title: 'Equipo Profesional' },
  { src: '/images lolowebp/mec3.webp', alt: 'Herramientas especializadas', title: 'Tecnología Avanzada' },
  { src: '/images lolowebp/mec4.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec5.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec6.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec7.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec8.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec9.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec10.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' }
];

const About = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0 });

  // Animación de entrada
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Loop automático de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % tallerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animación de contadores
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const yearIncrement = 15 / steps;
    const clientIncrement = 5000 / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        years: Math.min(Math.floor(yearIncrement * currentStep), 15),
        clients: Math.min(Math.floor(clientIncrement * currentStep), 5000)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="nosotros" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fefc09] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fefc09] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section con animación */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Sobre{' '}
            <span className="text-[#fefc09]">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformando vehículos y superando expectativas en Trelew, Chubut
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Texto principal con efecto de highlight */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                En{' '}
                <span className="font-bold text-[#fefc09]">
                  Mecánica Lolo
                </span>{' '}
                nos enorgullecemos de ser el taller de confianza para miles de familias en Trelew y toda la región de Chubut.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nuestro compromiso inquebrantable es brindar un servicio de <span className="text-[#fefc09] font-semibold">excelencia</span>, utilizando repuestos originales y tecnología de vanguardia.
              </p>
            </div>

            {/* Stats Grid con animación de contadores */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-[#fefc09]/30 text-center transform transition-all duration-300 hover:scale-105 hover:border-[#fefc09] overflow-hidden">
                <div className="absolute inset-0 bg-[#fefc09] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl font-black text-[#fefc09] mb-2 tabular-nums">
                    {counters.years}+
                  </div>
                  <div className="text-gray-300 font-semibold">Años de Experiencia</div>
                  <TrendingUp className="h-6 w-6 text-[#fefc09] mx-auto mt-2 animate-bounce" />
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-[#fefc09]/30 text-center transform transition-all duration-300 hover:scale-105 hover:border-[#fefc09] overflow-hidden">
                <div className="absolute inset-0 bg-[#fefc09] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl font-black text-[#fefc09] mb-2 tabular-nums">
                    {counters.clients}+
                  </div>
                  <div className="text-gray-300 font-semibold">Clientes Satisfechos</div>
                  <Users className="h-6 w-6 text-[#fefc09] mx-auto mt-2 animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>

            {/* Features con hover effects */}
            <div className="space-y-4">
              <div className="group bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border border-[#fefc09]/20 transition-all duration-300 hover:border-[#fefc09] hover:shadow-xl hover:shadow-[#fefc09]/20 hover:translate-x-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#fefc09] p-3 rounded-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Award className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      Calidad Certificada
                      <Zap className="h-4 w-4 text-[#fefc09] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Tecnología de diagnóstico avanzada y repuestos originales en cada reparación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images Gallery */}
          <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Main Image Display con efectos mejorados */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fefc09]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src={tallerImages[selectedImage].src}
                alt={tallerImages[selectedImage].alt}
                className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-110"
                onError={(e) => {
                  console.warn(`Error loading image: ${tallerImages[selectedImage].src}`);
                  e.target.style.display = 'none';
                }}
              />
              {/* Overlay con gradiente animado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              {/* Título con animación */}
              <div className="absolute bottom-6 left-6 right-6 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {tallerImages[selectedImage].title}
                </h3>
                <div className="w-20 h-1 bg-[#fefc09] mt-2 transform origin-left transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              {/* Badge animado */}
              <div className="absolute top-4 right-4 bg-[#fefc09] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                Mecánica Lolo
              </div>

              {/* Indicador de progreso */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div 
                  className="h-full bg-[#fefc09] transition-all duration-300"
                  style={{ width: `${((selectedImage + 1) / tallerImages.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Thumbnail Navigation mejorado */}
            <div className="grid grid-cols-5 gap-2">
              {tallerImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-[#fefc09] scale-110 shadow-lg shadow-[#fefc09]/50' 
                      : 'hover:scale-105 opacity-60 hover:opacity-100 hover:ring-2 hover:ring-[#fefc09]/50'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-16 object-cover"
                    onError={(e) => {
                      console.warn(`Error loading thumbnail: ${image.src}`);
                      e.target.style.display = 'none';
                    }}
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-[#fefc09]/20"></div>
                  )}
                </button>
              ))}
            </div>


          </div>
        </div>

        {/* Bottom Section mejorado */}
        <div className={`bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-[#fefc09]/20 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-3">
            ¿Por Qué Elegir{' '}
            <span className="text-[#fefc09] inline-block animate-pulse">Mecánica Lolo</span>?
          </h3>
          <div className="w-32 h-1 bg-[#fefc09] mx-auto mb-10 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105">
              <div className="relative inline-block">
                <Users className="h-14 w-14 text-[#fefc09] mx-auto transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-[#fefc09] rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <h4 className="text-2xl font-bold text-white">Equipo Experto</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Mecánicos certificados con años de experiencia en todo tipo de vehículos
              </p>
            </div>
            
            <div className="group space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105" style={{ transitionDelay: '0.1s' }}>
              <div className="relative inline-block">
                <Settings className="h-14 w-14 text-[#fefc09] mx-auto transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-180" />
                <div className="absolute inset-0 bg-[#fefc09] rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <h4 className="text-2xl font-bold text-white">Tecnología Avanzada</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Equipos de diagnóstico de última generación para precisión garantizada
              </p>
            </div>
            
            <div className="group space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105" style={{ transitionDelay: '0.2s' }}>
              <div className="relative inline-block">
                <CheckCircle className="h-14 w-14 text-[#fefc09] mx-auto transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-[#fefc09] rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <h4 className="text-2xl font-bold text-white">Satisfacción Total</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Compromiso con la excelencia y el 100% de satisfacción del cliente
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default About;