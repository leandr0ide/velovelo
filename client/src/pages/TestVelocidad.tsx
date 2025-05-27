import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SpeedTest } from '@/components/SpeedTest';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TestVelocidad() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: toolRef, isVisible: toolVisible } = useScrollAnimation();
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const metrics = [
    {
      name: 'Lighthouse Score',
      description: 'Puntuación general de rendimiento según Google Lighthouse',
      goodRange: '90-100',
      needsWork: '50-89',
      poor: '0-49',
      icon: 'fas fa-tachometer-alt',
      color: 'bg-blue-500'
    },
    {
      name: 'Largest Contentful Paint (LCP)',
      description: 'Tiempo que tarda en cargarse el elemento más grande visible',
      goodRange: '< 2.5s',
      needsWork: '2.5s - 4.0s',
      poor: '> 4.0s',
      icon: 'fas fa-eye',
      color: 'bg-green-500'
    },
    {
      name: 'First Input Delay (FID)',
      description: 'Tiempo de respuesta a la primera interacción del usuario',
      goodRange: '< 100ms',
      needsWork: '100ms - 300ms',
      poor: '> 300ms',
      icon: 'fas fa-mouse-pointer',
      color: 'bg-purple-500'
    },
    {
      name: 'Cumulative Layout Shift (CLS)',
      description: 'Medida de estabilidad visual durante la carga',
      goodRange: '< 0.1',
      needsWork: '0.1 - 0.25',
      poor: '> 0.25',
      icon: 'fas fa-arrows-alt',
      color: 'bg-orange-500'
    }
  ];

  const improvements = [
    {
      title: 'Optimización de Imágenes',
      impact: 'Alto',
      difficulty: 'Fácil',
      description: 'Compresión y conversión a formatos modernos como WebP',
      savings: 'Hasta 70% reducción en tamaño'
    },
    {
      title: 'Lazy Loading',
      impact: 'Alto',
      difficulty: 'Medio',
      description: 'Carga diferida de imágenes y contenido below-the-fold',
      savings: 'Mejora 30-50% en LCP'
    },
    {
      title: 'Minificación de Código',
      impact: 'Medio',
      difficulty: 'Fácil',
      description: 'Eliminación de espacios y comentarios innecesarios',
      savings: '10-30% reducción en JS/CSS'
    },
    {
      title: 'CDN Global',
      impact: 'Alto',
      difficulty: 'Medio',
      description: 'Distribución de contenido desde servidores cercanos',
      savings: 'Reducción 40-60% en TTFB'
    },
    {
      title: 'Cache del Navegador',
      impact: 'Alto',
      difficulty: 'Medio',
      description: 'Configuración de headers de cache apropiados',
      savings: 'Visitas repetidas instantáneas'
    },
    {
      title: 'Optimización CSS Crítico',
      impact: 'Medio',
      difficulty: 'Avanzado',
      description: 'Inline CSS crítico y defer del resto',
      savings: 'Mejora 20-40% en render'
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
              Test de Velocidad
              <span className="text-yellow-300"> Profesional</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Analiza el rendimiento de tu sitio web con métricas profesionales. 
              Obtén recomendaciones específicas y actionables para mejorar tu velocidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
                onClick={() => document.getElementById('speed-test')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-play mr-2"></i>
                Probar Ahora
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-info-circle mr-2"></i>
                Cómo Funciona
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">Instant</div>
                <div className="text-sm text-blue-100">Resultados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">15+</div>
                <div className="text-sm text-blue-100">Métricas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">100%</div>
                <div className="text-sm text-blue-100">Gratis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">Pro</div>
                <div className="text-sm text-blue-100">Recomendaciones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Test Tool */}
      <section id="speed-test" className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={toolRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              toolVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Herramienta de Análisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Introduce la URL de tu sitio web y obtén un análisis completo de rendimiento 
              con recomendaciones personalizadas de optimización.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SpeedTest />
          </div>
        </div>
      </section>

      {/* Metrics Explanation */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={metricsRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Métricas que Analizamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entende qué significa cada métrica y cómo afecta la experiencia de tus usuarios 
              y tu posicionamiento en Google.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-4 ${metric.color}/10 rounded-lg`}>
                      <i className={`${metric.icon} text-2xl ${metric.color.replace('bg-', 'text-')}`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-wpo-neutral-dark mb-2">
                        {metric.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Bueno</span>
                      <span className="text-sm font-bold text-green-600">{metric.goodRange}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Necesita mejoras</span>
                      <span className="text-sm font-bold text-yellow-600">{metric.needsWork}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Pobre</span>
                      <span className="text-sm font-bold text-red-600">{metric.poor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Improvements Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-8 text-center">
              Mejoras Típicas Recomendadas
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {improvements.map((improvement, index) => (
                <div key={index} className="p-6 bg-wpo-neutral-light rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-wpo-neutral-dark">{improvement.title}</h4>
                    <div className="flex space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        improvement.impact === 'Alto' ? 'bg-red-100 text-red-600' :
                        improvement.impact === 'Medio' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {improvement.impact}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        improvement.difficulty === 'Fácil' ? 'bg-green-100 text-green-600' :
                        improvement.difficulty === 'Medio' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {improvement.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {improvement.description}
                  </p>
                  
                  <div className="text-sm font-semibold text-wpo-secondary">
                    💡 {improvement.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-wpo-primary to-wpo-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Resultados Preocupantes? Podemos Ayudarte
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos puede implementar todas las optimizaciones necesarias 
              para que tu sitio alcance puntuaciones superiores a 90.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Optimizar mi Sitio
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-phone mr-2"></i>
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}