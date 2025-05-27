import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CoreWebVitals() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: vitalsRef, isVisible: vitalsVisible } = useScrollAnimation();
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const vitals = [
    {
      metric: 'LCP',
      name: 'Largest Contentful Paint',
      description: 'Mide el tiempo que tarda en cargarse el elemento más grande visible en la pantalla, indicando cuándo el contenido principal está disponible.',
      target: '< 2.5 segundos',
      color: 'bg-blue-500',
      icon: 'fas fa-eye',
      impact: 'Experiencia de carga percibida'
    },
    {
      metric: 'FID',
      name: 'First Input Delay',
      description: 'Tiempo que transcurre desde la primera interacción del usuario hasta que el navegador puede responder a esa interacción.',
      target: '< 100 milisegundos',
      color: 'bg-green-500',
      icon: 'fas fa-mouse-pointer',
      impact: 'Capacidad de respuesta'
    },
    {
      metric: 'CLS',
      name: 'Cumulative Layout Shift',
      description: 'Mide la estabilidad visual de la página, cuantificando cuánto se mueven los elementos durante la carga.',
      target: '< 0.1',
      color: 'bg-purple-500',
      icon: 'fas fa-arrows-alt',
      impact: 'Estabilidad visual'
    }
  ];

  const optimizations = [
    {
      title: 'Optimización LCP',
      techniques: [
        'Optimización de imágenes y videos hero',
        'Preload de recursos críticos',
        'Eliminación de CSS y JS bloqueantes',
        'Mejora del TTFB del servidor',
        'Implementación de CDN global'
      ],
      icon: 'fas fa-tachometer-alt'
    },
    {
      title: 'Mejora FID',
      techniques: [
        'Optimización de JavaScript principal',
        'Code splitting y lazy loading',
        'Reducción del tiempo de ejecución',
        'Uso de Web Workers',
        'Eliminación de código innecesario'
      ],
      icon: 'fas fa-bolt'
    },
    {
      title: 'Reducción CLS',
      techniques: [
        'Reserva de espacio para imágenes',
        'Dimensiones fijas para ads y embeds',
        'Evitar inserción dinámica de contenido',
        'Fuentes web optimizadas',
        'Animaciones que no afecten layout'
      ],
      icon: 'fas fa-layer-group'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 gradient-bg text-white">
        <div className="container-responsive">
          <div 
            ref={heroRef as any}
            className={`max-w-4xl mx-auto text-center transition-all duration-600 ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Core Web Vitals
              <span className="text-yellow-300"> Optimización</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Mejora las métricas de experiencia de usuario que Google utiliza para 
              posicionar tu sitio web en los resultados de búsqueda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-chart-line mr-2"></i>
                Mejorar Core Web Vitals
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-search mr-2"></i>
                Analizar mi Sitio
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-wpo-secondary mb-2">SEO</div>
                <div className="text-sm text-blue-100">Factor de Ranking</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-wpo-secondary mb-2">UX</div>
                <div className="text-sm text-blue-100">Experiencia Usuario</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-wpo-secondary mb-2">CVR</div>
                <div className="text-sm text-blue-100">Tasa Conversión</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Web Vitals Explanation */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={vitalsRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              vitalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              ¿Qué son los Core Web Vitals?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Son métricas esenciales que Google utiliza para medir la experiencia de usuario 
              en tu sitio web y que afectan directamente tu posicionamiento SEO.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {vitals.map((vital, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${vital.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${vital.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <div className="text-3xl font-bold text-wpo-neutral-dark mb-2">
                    {vital.metric}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-wpo-neutral-dark mb-4">
                    {vital.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {vital.description}
                  </p>
                  
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">Objetivo ideal</div>
                    <div className="text-lg font-bold text-wpo-secondary">{vital.target}</div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <i className="fas fa-bullseye mr-2 text-wpo-primary"></i>
                    Impacto: {vital.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Techniques */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={impactRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Técnicas de Optimización
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplicamos estrategias específicas para cada métrica, garantizando 
              mejoras significativas en tu puntuación Core Web Vitals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {optimizations.map((optimization, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-wpo-primary/10 rounded-lg mr-4">
                      <i className={`${optimization.icon} text-xl text-wpo-primary`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-wpo-neutral-dark">
                      {optimization.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {optimization.techniques.map((technique, idx) => (
                      <div key={idx} className="flex items-start text-gray-600">
                        <i className="fas fa-check text-wpo-secondary mr-3 mt-1 text-sm"></i>
                        <span className="text-sm">{technique}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-wpo-primary to-wpo-secondary rounded-xl p-8 text-white max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                ¿Por qué son Importantes los Core Web Vitals?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold mb-2">📈 SEO</div>
                  <div className="text-sm">Factor oficial de ranking en Google desde 2021</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">👥 UX</div>
                  <div className="text-sm">Mejor experiencia = mayor retención de usuarios</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">💰 ROI</div>
                  <div className="text-sm">Mejores métricas = más conversiones</div>
                </div>
              </div>
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Optimizar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}