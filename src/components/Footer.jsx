import React from 'react';
import { Wrench } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-8 w-8">
              <img 
                src="/assets/logo-mecanica-lolo-white.png" 
                alt="Logo Mecánica Lolo" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.src = "/assets/logo-mecanica-lolo.png";
                  e.target.onerror = (e2) => {
                    e2.target.style.display = 'none';
                    e2.target.nextSibling.style.display = 'flex';
                  };
                }}
              />
              <div className="bg-yellow-400 p-2 rounded-lg hidden">
                <Wrench className="h-4 w-4 text-slate-900" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mecánica Lolo</h3>
              <p className="text-slate-400 text-sm">Taller de confianza</p>
            </div>
          </div>
          <p className="text-slate-400 mb-4 leading-relaxed">
            Tu vehículo en las mejores manos. Más de 15 años brindando servicios de calidad con garantía y los mejores precios del mercado.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Servicios</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Mecánica General</li>
            <li>Frenos y Embragues</li>
            <li>Sistema Eléctrico</li>
            <li>Mantenimiento</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Horarios</h4>
          <div className="text-slate-400 space-y-2">
            <div>Lunes - Viernes</div>
            <div className="font-semibold text-yellow-400">8:00 - 18:00</div>
            <div>Sábados</div>
            <div className="font-semibold text-yellow-400">8:00 - 13:00</div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-slate-400 text-sm">
          © 2025 Mecánica Lolo. Todos los derechos reservados.
        </div>
        <div className="text-slate-400 text-sm mt-4 md:mt-0">
          Desarrollado con ❤️ para nuestros clientes
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
