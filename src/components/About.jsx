import React from 'react';
import { Shield, Star, Car, Settings } from 'lucide-react';

const About = () => (
  <section id="nosotros" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sobre <span className="text-yellow-400">Nosotros</span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Con más de 15 años de experiencia en el sector automotriz, Mecánica Lolo se ha convertido en el taller de confianza para miles de familias en la región.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Nuestro compromiso es brindar un servicio de excelencia, utilizando repuestos originales y tecnología de vanguardia. Cada trabajo viene respaldado por nuestra garantía de calidad.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-slate-600">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-slate-600">Clientes satisfechos</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="bg-yellow-400 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-slate-900" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Garantía total</h4>
              <p className="text-slate-600">Todos nuestros trabajos incluyen garantía por escrito</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-slate-600">
              <Shield className="h-20 w-20 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-2">Nuestro Equipo</h3>
              <p className="text-lg">Profesionales experimentados</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-xl shadow-lg">
            <div className="text-center">
              <Star className="h-8 w-8 text-slate-900 mx-auto mb-2" />
              <div className="font-bold text-slate-900">Calidad garantizada</div>
            </div>
          </div>
        </div>
      </div>
      {/* Galería y videos omitidos para simplificar, puedes agregarlos luego */}
    </div>
  </section>
);

export default About;
