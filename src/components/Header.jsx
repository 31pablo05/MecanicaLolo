import React, { useState, useEffect } from 'react';
import { Wrench, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Contacto', id: 'contacto' },
];

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-2xl py-3' 
        : 'bg-black/90 backdrop-blur-sm shadow-lg py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section - Profesionalizado */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'h-12 w-12' : 'h-16 w-16'
            }`}>
              <img
                src="/logo/logo2.svg"
                alt="Logo Mecánica Lolo"
                className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 4px 12px #fefc0980) brightness(1.1)',
                  transition: 'all 0.3s ease'
                }}
              />
              {/* Efecto de resplandor */}
              <div className="absolute inset-0 bg-[#fefc09] opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300"></div>
            </div>
            
            {/* Texto del logo */}
            <div className={`transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              <h1 className="font-black text-[#fefc09] tracking-tight">
                MECÁNICA
              </h1>
              <p className="text-white font-bold text-sm -mt-1 tracking-wider">
                LOLO
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-6 py-3 rounded-lg font-semibold text-gray-200 hover:text-[#fefc09] transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fefc09]/0 via-[#fefc09]/10 to-[#fefc09]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Línea inferior animada */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#fefc09] to-yellow-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-3 rounded-lg bg-black/60 hover:bg-black/80 border border-[#fefc09]/20 hover:border-[#fefc09]/40 transition-all duration-300 group text-[#fefc09]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-[#fefc09]/20 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
                className="block w-full text-left py-3 px-4 rounded-lg text-gray-200 hover:text-[#fefc09] hover:bg-black/60 transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
