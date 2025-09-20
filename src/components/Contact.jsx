import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => (
  <section id="contacto" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          <span className="text-yellow-400">Contacto</span> y Ubicación
        </h2>
        <p className="text-xl text-slate-600">Estamos aquí para ayudarte cuando lo necesites</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="bg-slate-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Teléfono</div>
                  <div className="text-slate-600">+54 9 123 456 7890</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">WhatsApp</div>
                  <div className="text-slate-600">+54 9 123 456 7890</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Email</div>
                  <div className="text-slate-600">info@mecanicalolo.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dirección</div>
                  <div className="text-slate-600">Av. Principal 123, Ciudad, Provincia</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Horarios</div>
                  <div className="text-slate-600">Lun - Vie: 8:00 - 18:00<br />Sáb: 8:00 - 13:00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/5491234567890"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+5491234567890"
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>Llamar</span>
            </a>
          </div>
        </div>
        <div className="h-96 lg:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168571557213!2d-58.38156258477033!3d-34.60373098045814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacfdf4c9db1%3A0x3ed2b5e4a9bdb2e0!2sObelisco!5e0!3m2!1ses!2sar!4v1649876543210!5m2!1ses!2sar"
            className="w-full h-full rounded-xl shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
