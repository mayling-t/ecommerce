import React from 'react';
import { Award, Users, Leaf, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const AboutSection: React.FC = () => {
  const stats = [
    { number: '25+', label: 'Años de experiencia' },
    { number: '500+', label: 'Clientes satisfechos' },
    { number: '50+', label: 'Productos artesanales' },
    { number: '100%', label: 'Ingredientes naturales' }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sostenibilidad',
      description: 'Respetamos el medio ambiente con prácticas responsables.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Calidad Premium',
      description: 'Panadería con insumos de alta calidad, sin conservantes.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Tradición Familiar',
      description: 'Recetas caseras heredadas con amor.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Pasión',
      description: 'Horneamos con el corazón en cada detalle.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contenido principal */}
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-secondary-900 mb-4">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-secondary-700 leading-relaxed">
              <p>
                Bienvenidos a "La Sinfonía del Pan", una panadería artesanal fundada por Don Manuel. 
                Desde hace más de diez años, ofrecemos panes frescos elaborados con ingredientes locales y de alta calidad.
              </p>
              <p>
                Nos apasiona compartir el arte de la panadería. Nuestros talleres permiten a los 
                visitantes aprender a hacer su propio pan, creando un vínculo especial con nuestra tradición.
              </p>
              <p>
                Visítanos y disfruta del aroma del pan recién horneado en un ambiente acogedor. 
                ¡Te esperamos para que formes parte de nuestra historia!
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group mt-6">
              Conoce Más Sobre Nosotros
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-secondary-900 mb-4">
              Nuestros Valores
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Los principios que nos guían en cada paso de nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
