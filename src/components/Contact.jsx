import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const phones = [
    { number: '+542804594131', display: '(280) 459-4131' },
    { number: '+542804712111', display: '(280) 471-2111' }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-yellow-400">Contacto</span> y Ubicación
          </h2>
          <p className="text-xl text-slate-600">Estamos aquí para ayudarte cuando lo necesites</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-5">
                {/* Teléfonos con acciones integradas */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-2">Teléfonos</div>
                    <div className="space-y-2">
                      {phones.map((phone, index) => (
                        <div key={index} className="flex items-center gap-3 text-slate-600">
                          <span className="font-medium">{phone.display}</span>
                          <div className="flex gap-2">
                            <a
                              href={`https://wa.me/${phone.number}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 hover:text-green-700 transition-colors"
                              title="Enviar WhatsApp"
                            >
                              <MessageCircle className="h-4 w-4" />
                            </a>
                            <a
                              href={`tel:${phone.number}`}
                              className="text-yellow-500 hover:text-yellow-600 transition-colors"
                              title="Llamar"
                            >
                              <Phone className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Email</div>
                    <a 
                      href="mailto:info@mecanicalolo.com"
                      className="text-slate-600 hover:text-yellow-500 transition-colors"
                    >
                      info@mecanicalolo.com
                    </a>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Dirección</div>
                    <div className="text-slate-600">Trelew, Chubut</div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-2">Horarios</div>
                    <div className="text-slate-600 space-y-1">
                      <div className="flex justify-between">
                        <span className="font-medium">Lunes - Viernes:</span>
                        <span>8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sábado:</span>
                        <span>8:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span className="font-medium">Domingo:</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción rápida */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${phones[0].number}`}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${phones[0].number}`}
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar</span>
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="h-[500px] lg:h-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168571557213!2d-58.38156258477033!3d-34.60373098045814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacfdf4c9db1%3A0x3ed2b5e4a9bdb2e0!2sObelisco!5e0!3m2!1ses!2sar!4v1649876543210!5m2!1ses!2sar"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Mecánica Lolo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;