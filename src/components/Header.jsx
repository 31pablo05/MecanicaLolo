import React, { useState } from 'react';
import { Wrench, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Contacto', id: 'contacto' },
];

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white fixed w-full top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12">
              <img 
                src="/assets/logo-mecanica-lolo.png" 
                alt="Logo Mecánica Lolo" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="bg-yellow-400 p-2 rounded-lg hidden">
                <Wrench className="h-8 w-8 text-slate-900" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mecánica Lolo</h1>
              <p className="text-slate-300 text-sm">Taller de confianza</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
