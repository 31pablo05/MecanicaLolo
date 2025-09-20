import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    text: "Excelente atención y trabajo impecable. Llevé mi auto con problemas en el motor y quedó como nuevo. Muy recomendable.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    text: "Profesionales de primera. Precios justos y siempre cumplen con los plazos. Ya son varios años que confío en ellos.",
    rating: 5
  },
  {
    name: "Ana Martín",
    text: "Lo que más me gusta es la honestidad. Te explican todo lo que van a hacer y no te cobran de más. Muy confiables.",
    rating: 5
  }
];

const Testimonials = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Lo que dicen nuestros <span className="text-yellow-400">Clientes</span>
        </h2>
        <p className="text-xl text-slate-600">La satisfacción de nuestros clientes es nuestra mejor carta de presentación</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
            <div className="font-bold text-slate-900">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
