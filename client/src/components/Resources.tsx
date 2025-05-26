import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';

const resources = [
  {
    type: 'GUÍA',
    title: 'Guía Completa de Core Web Vitals 2024',
    description: 'Todo lo que necesitas saber sobre LCP, FID y CLS para mejorar tu posicionamiento en Google y la experiencia de usuario.',
    readTime: '5 min lectura',
    downloads: '1.2K descargas',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    alt: 'Persona trabajando en optimización web con gráficos de rendimiento en pantalla',
    action: 'Leer Artículo',
    icon: 'fas fa-arrow-right'
  },
  {
    type: 'HERRAMIENTA',
    title: 'Checklist de Optimización WPO',
    description: 'Lista verificable con 47 puntos de optimización organizados por prioridad e impacto en el rendimiento de tu sitio web.',
    readTime: 'Gratis',
    downloads: '3.7K descargas',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    alt: 'Dashboard con métricas de rendimiento web y gráficos de velocidad',
    action: 'Descargar PDF',
    icon: 'fas fa-download'
  },
  {
    type: 'VIDEO',
    title: 'Masterclass: Optimización de Imágenes Web',
    description: 'Aprende las técnicas más efectivas para optimizar imágenes: formatos WebP, lazy loading, responsive images y más.',
    readTime: '25 min',
    downloads: '8.9K visualizaciones',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    alt: 'Instructor explicando conceptos de optimización web en video tutorial',
    action: 'Ver Video',
    icon: 'fas fa-play'
  }
];

export function Resources() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();
  const { setRef, visibleItems } = useScrollAnimationMultiple(resources.length);

  return (
    <section id="recursos" className="section-padding bg-wpo-neutral-light">
      <div className="container-responsive">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
            Recursos Gratuitos WPO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guías, herramientas y artículos para que puedas empezar a optimizar tu web hoy mismo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              ref={setRef(index)}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={resource.image}
                alt={resource.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold mr-3 ${
                    resource.type === 'GUÍA' ? 'bg-wpo-primary text-white' :
                    resource.type === 'HERRAMIENTA' ? 'bg-wpo-secondary text-white' :
                    'bg-wpo-accent text-white'
                  }`}>
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-600">{resource.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-wpo-primary font-semibold hover:underline">
                    {resource.action} <i className={`${resource.icon} ml-1`}></i>
                  </button>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-download mr-1"></i>
                    {resource.downloads}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div 
          ref={buttonRef}
          className={`text-center mt-12 transition-all duration-600 ease-out ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button className="bg-wpo-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors min-h-[60px]">
            <i className="fas fa-book-open mr-2"></i>
            Ver Todos los Recursos
          </Button>
        </div>
      </div>
    </section>
  );
}
