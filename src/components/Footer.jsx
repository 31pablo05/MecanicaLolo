import React from 'react';
import { Wrench, Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const phones = [
    { number: '+542804594131', display: '(280) 459-4131' },
    { number: '+542804712111', display: '(280) 471-2111' }
  ];

  const services = [
    'Mecánica General',
    'Frenos y Embragues',
    'Sistema Eléctrico',
    'Aire Acondicionado',
    'Diagnóstico Computarizado',
    'Cambio de Aceite'
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Columna 1: Información de la empresa */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-2.5 rounded-xl shadow-lg">
                <Wrench className="h-7 w-7 text-slate-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mecánica Lolo</h3>
                <p className="text-yellow-400 text-sm font-semibold">Taller de confianza</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Tu vehículo en las mejores manos. Más de 15 años brindando servicios de calidad con garantía y los mejores precios del mercado.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="bg-slate-700 hover:bg-yellow-400 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-slate-300 group-hover:text-slate-900" />
              </a>
              <a 
                href="#" 
                className="bg-slate-700 hover:bg-yellow-400 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-slate-300 group-hover:text-slate-900" />
              </a>
              <a 
                href={`https://wa.me/${phones[0].number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-green-500 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos y Servicios */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Enlaces Rápidos</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-lg mb-4 mt-8 text-yellow-400">Servicios</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 4).map((service, index) => (
                <li key={index} className="text-slate-300 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Horarios */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Horario de Atención</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-sm text-slate-300">Lunes - Viernes</span>
                </div>
                <div className="text-xl font-bold text-yellow-400">8:00 - 18:00</div>
              </div>
              
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-sm text-slate-300">Sábados</span>
                </div>
                <div className="text-xl font-bold text-yellow-400">8:00 - 13:00</div>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 opacity-60">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-slate-500 mr-2" />
                  <span className="text-sm text-slate-400">Domingos</span>
                </div>
                <div className="text-lg font-bold text-slate-500">Cerrado</div>
              </div>
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Contacto</h4>
            <div className="space-y-4">
              
              {/* Teléfonos */}
              <div className="flex items-start space-x-3">
                <div className="bg-slate-800 p-2 rounded-lg mt-1">
                  <Phone className="h-4 w-4 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 mb-1">Teléfonos</div>
                  {phones.map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone.number}`}
                      className="text-slate-300 hover:text-yellow-400 transition-colors text-sm block"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="bg-slate-800 p-2 rounded-lg mt-1">
                  <Mail className="h-4 w-4 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 mb-1">Email</div>
                  <a 
                    href="mailto:info@mecanicalolo.com"
                    className="text-slate-300 hover:text-yellow-400 transition-colors text-sm break-all"
                  >
                    info@mecanicalolo.com
                  </a>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start space-x-3">
                <div className="bg-slate-800 p-2 rounded-lg mt-1">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 mb-1">Dirección</div>
                  <div className="text-slate-300 text-sm leading-relaxed">
                    Av. Principal 123<br />
                    Ciudad, Provincia
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp destacado */}
              <a
                href={`https://wa.me/${phones[0].number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg mt-4"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © 2025 <span className="text-yellow-400 font-semibold">Mecánica Lolo</span>. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-4 text-slate-400 text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors">Términos y Condiciones</a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">Política de Privacidad</a>
            </div>
          </div>
          
          {/* Desarrollador */}
          <div className="text-center mt-4 pt-4 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              Desarrollado con <span className="text-red-500 animate-pulse">♥</span> por{' '}
              <a 
                href="https://devcraftpablo.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-200 hover:underline"
              >
                Pablo Proboste
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;