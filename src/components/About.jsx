import React, { useState, useEffect } from 'react';
import { Shield, Star, Car, Settings, Users, Award, CheckCircle } from 'lucide-react';

const tallerImages = [
  { src: '/images lolowebp/mec1.webp', alt: 'Instalaciones Mecánica Lolo', title: 'Nuestras Instalaciones' },
  { src: '/images lolowebp/mec2.webp', alt: 'Equipo profesional trabajando', title: 'Equipo Profesional' },
  { src: '/images lolowebp/mec3.webp', alt: 'Herramientas especializadas', title: 'Tecnología Avanzada' },
  { src: '/images lolowebp/mec4.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec5.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec6.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec7.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec8.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec9.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' },
  { src: '/images lolowebp/mec10.webp', alt: 'Servicios de calidad', title: 'Trabajo de Precisión' }
];

const About = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Loop automático de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % tallerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Sobre <span className="text-[#fefc09] drop-shadow-lg">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Con más de 15 años transformando vehículos y superando expectativas en Trelew, Chubut
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                En <span className="font-bold text-[#fefc09] bg-black px-2 py-1 rounded">Mecánica Lolo</span> nos enorgullecemos de ser el taller de confianza para miles de familias en Trelew y toda la región de Chubut.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro compromiso inquebrantable es brindar un servicio de excelencia, utilizando repuestos originales y tecnología de vanguardia. Cada trabajo viene respaldado por nuestra garantía de calidad y años de experiencia.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#fefc09]/20 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-[#fefc09] mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Años de Experiencia</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#fefc09]/20 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-[#fefc09] mb-2">5000+</div>
                <div className="text-gray-600 font-semibold">Clientes Satisfechos</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-md">
                <div className="bg-[#fefc09] p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Garantía Total</h4>
                  <p className="text-gray-600">Todos nuestros trabajos incluyen garantía por escrito y seguimiento post-servicio</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-md">
                <div className="bg-[#fefc09] p-3 rounded-lg">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Calidad Certificada</h4>
                  <p className="text-gray-600">Tecnología de diagnóstico avanzada y repuestos originales en cada reparación</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images Gallery */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
              <img
                src={tallerImages[selectedImage].src}
                alt={tallerImages[selectedImage].alt}
                className="w-full h-96 object-cover transition-all duration-500 hover:scale-105"
                onError={(e) => {
                  console.warn(`Error loading image: ${tallerImages[selectedImage].src}`);
                  e.target.style.display = 'none';
                }}
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{tallerImages[selectedImage].title}</h3>
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#fefc09] text-black px-3 py-1 rounded-full font-bold text-sm">
                Mecánica Lolo
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-3">
              {tallerImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-[#fefc09] scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-20 object-cover"
                    onError={(e) => {
                      console.warn(`Error loading thumbnail: ${image.src}`);
                      e.target.style.display = 'none';
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Floating Quality Badge */}
            <div className="absolute -bottom-6 -left-6 bg-black p-6 rounded-xl shadow-lg border-4 border-[#fefc09]">
              <div className="text-center">
                <Star className="h-8 w-8 text-[#fefc09] mx-auto mb-2" />
                <div className="font-bold text-[#fefc09]">Calidad</div>
                <div className="font-bold text-white text-sm">Garantizada</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Why Choose Us */}
        <div className="bg-black rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-[#fefc09] mb-8">
            ¿Por Qué Elegir Mecánica Lolo?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Users className="h-12 w-12 text-[#fefc09] mx-auto" />
              <h4 className="text-xl font-bold text-white">Equipo Experto</h4>
              <p className="text-gray-300">Mecánicos certificados con años de experiencia en todo tipo de vehículos</p>
            </div>
            <div className="space-y-4">
              <Settings className="h-12 w-12 text-[#fefc09] mx-auto" />
              <h4 className="text-xl font-bold text-white">Tecnología Avanzada</h4>
              <p className="text-gray-300">Equipos de diagnóstico de última generación para precisión garantizada</p>
            </div>
            <div className="space-y-4">
              <CheckCircle className="h-12 w-12 text-[#fefc09] mx-auto" />
              <h4 className="text-xl font-bold text-white">Satisfacción Total</h4>
              <p className="text-gray-300">Compromiso con la excelencia y el 100% de satisfacción del cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
