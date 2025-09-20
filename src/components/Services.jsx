import React from 'react';
import { Wrench, Shield, Settings, Zap, Car, Gauge } from 'lucide-react';

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
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Nuestros <span className="text-yellow-400">Servicios</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Ofrecemos soluciones integrales para el cuidado de tu vehículo con tecnología de última generación
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
          >
            <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <service.icon className="h-8 w-8 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{service.title}</h3>
            <p className="text-slate-600 text-center leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
