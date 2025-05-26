import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: 'fas fa-search',
    title: 'Auditoría WPO Completa',
    description: 'Análisis exhaustivo de tu sitio web para identificar oportunidades de mejora en velocidad, Core Web Vitals y experiencia de usuario.',
    features: [
      'Análisis de Core Web Vitals',
      'Reporte detallado con prioridades',
      'Roadmap de optimización'
    ],
    price: '€297',
    popular: false
  },
  {
    icon: 'fas fa-tools',
    title: 'Optimización Técnica',
    description: 'Implementación de mejoras técnicas para acelerar tu sitio web: compresión de imágenes, minificación de código, lazy loading y más.',
    features: [
      'Optimización de imágenes y assets',
      'Implementación de lazy loading',
      'Configuración de caché'
    ],
    price: '€697',
    popular: false
  },
  {
    icon: 'fas fa-rocket',
    title: 'WPO Premium',
    description: 'Servicio completo de optimización con garantía de resultados. Incluye auditoría, implementación, monitoreo y soporte continuo.',
    features: [
      'Todo lo anterior incluido',
      'Monitoreo continuo 24/7',
      'Garantía de mejora o reembolso'
    ],
    price: '€1.297',
    popular: true
  }
];

export function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { setRef, visibleItems } = useScrollAnimationMultiple(services.length);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="section-padding bg-wpo-neutral-light">
      <div className="container-responsive">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
            Servicios de Optimización WPO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para mejorar el rendimiento de tu sitio web, 
            desde auditorías técnicas hasta implementación completa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={setRef(index)}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'border-2 border-wpo-primary relative' : ''
              } ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-wpo-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className={`text-4xl mb-6 ${
                  index === 0 ? 'text-wpo-primary' : 
                  index === 1 ? 'text-wpo-secondary' : 'text-wpo-accent'
                }`}>
                  <i className={service.icon}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-wpo-secondary mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-wpo-primary">
                    {service.price}
                  </span>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-wpo-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {index === 2 ? 'Empezar' : 'Solicitar'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
