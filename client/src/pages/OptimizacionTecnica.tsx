import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function OptimizacionTecnica() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: techniqueRef, isVisible: techniqueVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const services = [
    {
      icon: 'fas fa-image',
      title: 'Optimización de Imágenes',
      description: 'Compresión avanzada, conversión a formatos WebP/AVIF, implementación de lazy loading y responsive images para reducir el tiempo de carga.',
      improvements: ['Reducción 60-80% tamaño archivos', 'Formatos de nueva generación', 'Carga bajo demanda']
    },
    {
      icon: 'fas fa-code',
      title: 'Minificación de Código',
      description: 'Optimización de CSS, JavaScript y HTML eliminando espacios, comentarios y código innecesario sin afectar la funcionalidad.',
      improvements: ['CSS/JS más ligeros', 'Menos peticiones HTTP', 'Carga más rápida']
    },
    {
      icon: 'fas fa-database',
      title: 'Configuración de Caché',
      description: 'Implementación de estrategias de cache del navegador, CDN y cache del servidor para reducir drasticamente los tiempos de respuesta.',
      improvements: ['Cache browser optimizado', 'CDN configurado', 'Repetidas visitas instantáneas']
    },
    {
      icon: 'fas fa-bolt',
      title: 'Optimización del Servidor',
      description: 'Configuración avanzada del servidor web, compresión GZIP/Brotli, y optimización de base de datos para máximo rendimiento.',
      improvements: ['Compresión avanzada', 'Consultas BD optimizadas', 'Tiempo respuesta < 200ms']
    }
  ];

  const techniques = [
    {
      category: 'Imágenes y Media',
      items: [
        'Conversión automática a WebP y AVIF',
        'Lazy loading con Intersection Observer',
        'Responsive images con srcset',
        'Compresión sin pérdida de calidad',
        'Eliminación de metadatos innecesarios'
      ]
    },
    {
      category: 'Código y Assets',
      items: [
        'Minificación de CSS, JS y HTML',
        'Tree shaking para eliminar código muerto',
        'Bundle splitting y code splitting',
        'Inlining de CSS crítico',
        'Preload de recursos importantes'
      ]
    },
    {
      category: 'Performance Web',
      items: [
        'Eliminación de render-blocking resources',
        'Optimización del Critical Rendering Path',
        'Reducción de Layout Shift (CLS)',
        'Mejora de First Input Delay (FID)',
        'Optimización de Largest Contentful Paint (LCP)'
      ]
    },
    {
      category: 'Infraestructura',
      items: [
        'Configuración HTTP/2 y HTTP/3',
        'Implementación de Service Workers',
        'CDN global para assets estáticos',
        'Compresión Gzip y Brotli',
        'Headers de cache optimizados'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 gradient-bg text-white">
        <div className="container-responsive">
          <div 
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-600 ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Optimización Técnica
              <span className="text-yellow-300"> Avanzada</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Implementación profesional de mejoras técnicas que aceleran tu sitio web 
              y mejoran significativamente la experiencia de usuario.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-tools mr-2"></i>
                Solicitar Optimización
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-chart-line mr-2"></i>
                Ver Casos de Éxito
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">-70%</div>
                <div className="text-sm text-blue-100">Tiempo de Carga</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">+95</div>
                <div className="text-sm text-blue-100">Lighthouse Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">-85%</div>
                <div className="text-sm text-blue-100">Tamaño de Assets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">€697</div>
                <div className="text-sm text-blue-100">Desde</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={servicesRef}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Servicios de Optimización Técnica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementamos las mejores prácticas de optimización web para maximizar 
              el rendimiento y la experiencia de usuario de tu sitio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 bg-wpo-secondary/10 rounded-lg">
                      <i className={`${service.icon} text-2xl text-wpo-secondary`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-wpo-neutral-dark mb-2">Mejoras incluidas:</h4>
                    {service.improvements.map((improvement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-wpo-secondary mr-2"></i>
                        {improvement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={techniqueRef}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              techniqueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Técnicas de Optimización Aplicadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos las técnicas más avanzadas y efectivas para garantizar 
              el máximo rendimiento de tu sitio web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-6 flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-3 ${
                      index === 0 ? 'bg-wpo-primary' :
                      index === 1 ? 'bg-wpo-secondary' :
                      index === 2 ? 'bg-wpo-accent' : 'bg-purple-500'
                    }`}></span>
                    {technique.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {technique.items.map((item, idx) => (
                      <div key={idx} className="flex items-start text-gray-600">
                        <i className="fas fa-cog text-gray-400 mr-3 mt-1 text-sm"></i>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-4">
                ¿Listo para Acelerar tu Sitio Web?
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de expertos implementará todas estas optimizaciones 
                para maximizar el rendimiento de tu sitio web.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-wpo-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Empezar Optimización
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}