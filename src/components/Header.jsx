import React, { useState, useEffect } from 'react';
import { Wrench, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Contacto', id: 'contacto' },
];

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detectar sección activa
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      

      {/* Main Header */}
      <header className={`fixed w-full top-0 lg:top-10 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/98 backdrop-blur-xl shadow-2xl shadow-black/50' 
          : 'bg-black/95 backdrop-blur-lg shadow-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            
            {/* Logo Section - Mejorado */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('inicio')}
            >
              <div className={`relative transition-all duration-500 ${
                isScrolled ? 'h-14 w-14 lg:h-16 lg:w-16' : 'h-16 w-16 lg:h-20 lg:w-20'
              }`}>
                {/* Círculo de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fefc09]/20 to-yellow-500/20 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>
                
                {/* Logo */}
                <img
                  src="/logo/Diseño sin título (4).svg"
                  alt="Logo Mecánica Lolo"
                  className="relative h-full w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    filter: 'drop-shadow(0 0 10px rgba(254, 252, 9, 0.5)) brightness(1.4) contrast(1.2)',
                  }}
                  onError={(e) => {
                    // Fallback si no se carga el logo
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback icono */}
                <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-[#fefc09] to-yellow-500 rounded-full">
                  <Wrench className="h-8 w-8 lg:h-10 lg:w-10 text-black transform rotate-45" />
                </div>
              </div>
              
              
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 group ${
                    activeSection === item.id
                      ? 'text-black bg-[#fefc09] shadow-lg shadow-[#fefc09]/50'
                      : 'text-gray-200 hover:text-[#fefc09]'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <span className="relative z-10 flex items-center space-x-1">
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <ChevronDown className="h-4 w-4 animate-bounce" />
                    )}
                  </span>
                  
                  {/* Efecto hover para items no activos */}
                  {activeSection !== item.id && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#fefc09]/0 via-[#fefc09]/10 to-[#fefc09]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#fefc09] to-transparent rounded-full group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
                    </>
                  )}
                </button>
              ))}
              
              {/* CTA Button */}
              <a
                href="tel:+542804123456"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-[#fefc09] to-yellow-400 text-black font-black rounded-xl shadow-lg shadow-[#fefc09]/30 hover:shadow-2xl hover:shadow-[#fefc09]/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
              >
                <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>LLAMAR</span>
              </a>
            </nav>

            {/* Mobile Menu Button - Mejorado */}
            <button
              className="lg:hidden relative p-3 rounded-xl bg-gradient-to-br from-gray-900 to-black border-2 border-[#fefc09]/30 hover:border-[#fefc09] transition-all duration-300 group overflow-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Efecto de fondo */}
              <div className="absolute inset-0 bg-[#fefc09] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-[#fefc09] group-hover:bg-black transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-[#fefc09] group-hover:bg-black transform transition-all duration-300 top-3 ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-[#fefc09] group-hover:bg-black transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Rediseñado */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-[#fefc09]/20">
            {/* Info rápida móvil */}
            <div className="px-4 py-3 border-b border-[#fefc09]/10">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="h-4 w-4 text-[#fefc09]" />
                  <span>Lun-Vie 8-18hs</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-[#fefc09]" />
                  <span>Trelew</span>
                </div>
              </div>
            </div>

            {/* Menu items */}
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => { 
                    scrollToSection(item.id); 
                    setIsMenuOpen(false); 
                  }}
                  className={`block w-full text-left py-4 px-5 rounded-xl font-bold transition-all duration-300 transform hover:translate-x-2 group ${
                    activeSection === item.id
                      ? 'bg-[#fefc09] text-black shadow-lg shadow-[#fefc09]/30'
                      : 'bg-gray-900/50 text-gray-200 hover:bg-gray-800 hover:text-[#fefc09]'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    transition: `all 0.3s ease ${index * 50}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <ChevronDown className={`h-5 w-5 transform transition-transform ${
                      activeSection === item.id ? 'rotate-0' : 'rotate-[-90deg] group-hover:rotate-0'
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* CTA móvil */}
            <div className="px-4 pb-4">
              <a
                href="tel:+542804594131"
                className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-[#fefc09] to-yellow-400 text-black font-black rounded-xl shadow-lg shadow-[#fefc09]/30 hover:shadow-2xl hover:shadow-[#fefc09]/50 transform hover:scale-105 transition-all duration-300 mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>(280) 459-4131</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Espaciador */}
      <div className="h-20 lg:h-36"></div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(254, 252, 9, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(254, 252, 9, 0.6);
          }
        }
      `}</style>
    </>
  );
};

export default Header;