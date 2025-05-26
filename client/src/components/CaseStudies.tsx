import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';

const caseStudies = [
  {
    category: 'RESTAURACIÓN',
    title: 'Cadena de Restaurantes',
    description: 'Optimización del sistema de pedidos online que resultó en un aumento significativo de reservas y pedidos a domicilio.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    alt: 'Interior moderno de restaurante con mesas elegantes y ambiente acogedor',
    metrics: [
      { label: 'Tiempo carga', value: '-60%' },
      { label: 'Pedidos online', value: '+127%' },
      { label: 'Satisfacción', value: '+89%' }
    ]
  },
  {
    category: 'SAAS',
    title: 'Plataforma de Gestión',
    description: 'Mejoras en el dashboard principal que redujeron la tasa de abandono y aumentaron el engagement de usuarios.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    alt: 'Espacio de oficina moderno con múltiples pantallas mostrando gráficos y datos',
    metrics: [
      { label: 'Tasa abandono', value: '-45%' },
      { label: 'Tiempo sesión', value: '+156%' },
      { label: 'Retención', value: '+92%' }
    ]
  },
  {
    category: 'SALUD',
    title: 'Portal Médico',
    description: 'Optimización de la plataforma de citas médicas que mejoró significativamente la experiencia del paciente.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    alt: 'Profesional médico usando tablet en ambiente hospitalario moderno',
    metrics: [
      { label: 'Tiempo carga', value: '-70%' },
      { label: 'Citas online', value: '+203%' },
      { label: 'Satisfacción', value: '+94%' }
    ]
  }
];

export function CaseStudies() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { setRef, visibleItems } = useScrollAnimationMultiple(caseStudies.length);

  return (
    <section id="casos-exito" className="section-padding bg-wpo-neutral-light">
      <div className="container-responsive">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de transformación digital a través de la optimización WPO
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              ref={setRef(index)}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={study.image}
                alt={study.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              
              <CardContent className="p-6">
                <div className="text-sm text-wpo-primary font-semibold mb-2">
                  {study.category}
                </div>
                <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-wpo-secondary">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full text-wpo-primary font-semibold py-2 hover:bg-wpo-primary hover:text-white transition-colors rounded-lg border border-wpo-primary"
                >
                  Ver Caso Completo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
