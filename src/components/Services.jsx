import React from 'react';
import { Wrench, Shield, Settings, Zap, Car, Gauge, Phone } from 'lucide-react';

const services = [
  { icon: Wrench, title: "Mecánica General", description: "Diagnóstico y reparación completa de motor, transmisión y sistemas mecánicos." },
  { icon: Shield, title: "Frenos", description: "Servicio completo de frenos: pastillas, discos, líquido y sistema ABS." },
  { icon: Settings, title: "Embragues", description: "Reparación y cambio de embrague, disco y prensa para todas las marcas." },
  { icon: Zap, title: "Inyección", description: "Limpieza y reparación de sistemas de inyección electrónica." },
  { icon: Car, title: "Electricidad Automotor", description: "Diagnóstico y reparación de sistemas eléctricos y electrónicos." },
  { icon: Gauge, title: "Mantenimiento Preventivo", description: "Service completo para mantener tu vehículo en óptimas condiciones." }
];

const Services = () => (
  <section id="servicios" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 relative inline-block">
          Nuestros <span className="text-yellow-400 relative inline-block">Servicios
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Ofrecemos soluciones integrales para el cuidado de tu vehículo con tecnología de última generación y personal altamente capacitado
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-white via-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-2 border-slate-100 hover:border-yellow-400/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              <service.icon className="h-8 w-8 text-slate-900 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-yellow-500 transition-colors duration-300">{service.title}</h3>
            <p className="text-slate-600 text-center leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{service.description}</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
    {/* Video de contacto */}
    <div className="mt-20 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 px-4">
      <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="/video/contactar.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">¿Necesitas ayuda con tu vehículo?</h3>
        <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto">Contáctanos ahora y obtén atención inmediata</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:+542804594131" 
            className="group bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 rounded-xl font-bold text-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            (280) 459-4131
          </a>
          <a 
            href="tel:+542804712111" 
            className="group bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 rounded-xl font-bold text-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            (280) 471-2111
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
