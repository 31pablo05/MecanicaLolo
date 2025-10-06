import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Wrench, Zap, Settings } from 'lucide-react';

const Landing = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Efecto de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Pantalla de carga premium
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          {/* Logo animado */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#fefc09] blur-3xl opacity-30 animate-pulse"></div>
            <Wrench className="relative h-24 w-24 text-[#fefc09] mx-auto animate-spin-slow" />
          </div>
          
          {/* Texto */}
          <h2 className="text-4xl font-black text-white mb-4">
            MECÁNICA <span className="text-[#fefc09]">LOLO</span>
          </h2>
          
          {/* Barra de progreso */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-[#fefc09] to-yellow-400 animate-loading"></div>
          </div>
          
          <p className="mt-4 text-gray-400 text-sm">Cargando experiencia premium...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Contenido principal */}
      <div className="relative z-10">
        <Header scrollToSection={scrollToSection} />
        
        {/* Hero con animación de entrada */}
        <div className="animate-fadeIn">
          <Hero />
        </div>

        {/* Separador decorativo entre Hero y Services */}
        <div className="relative py-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fefc09]/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#fefc09]"></div>
              <Settings className="h-6 w-6 text-[#fefc09] animate-spin-slow" />
              <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#fefc09]"></div>
            </div>
          </div>
        </div>

        {/* Services con animación de entrada progresiva */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <Services />
        </div>

        {/* Separador con CTA */}
        <div className="relative py-16 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #fefc09 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <Zap className="h-12 w-12 text-[#fefc09] mx-auto mb-4 animate-bounce" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              ¿Listo para darle vida a tu vehículo?
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Más de 15 años transformando autos en Trelew
            </p>
            <button
              onClick={() => scrollToSection('contacto')}
              className="group relative px-8 py-4 bg-[#fefc09] text-black font-black rounded-full text-lg shadow-lg shadow-[#fefc09]/30 hover:shadow-2xl hover:shadow-[#fefc09]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>SOLICITAR TURNO</span>
                <Wrench className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-[#fefc09] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

        {/* About con animación */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <About />
        </div>

        {/* Separador minimalista */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#fefc09]/30 to-transparent"></div>
          </div>
        </div>

        

        {/* Contact con animación */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Botón scroll to top mejorado */}
      <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />

      {/* Indicador de progreso de scroll */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-[#fefc09] to-yellow-400 transition-all duration-300"
          style={{
            width: `${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-loading {
          animation: loading 1.5s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        /* Smooth scroll para toda la página */
        html {
          scroll-behavior: smooth;
        }

        /* Ocultar scrollbar pero mantener funcionalidad */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #fefc09;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #f0e808;
        }
      `}</style>
    </div>
  );
};

export default Landing;