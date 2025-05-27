import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MonitoreoContinuo() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: alertsRef, isVisible: alertsVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const features = [
    {
      icon: 'fas fa-chart-line',
      title: 'Monitoreo en Tiempo Real',
      description: 'Supervisión 24/7 de las métricas de rendimiento de tu sitio web desde múltiples ubicaciones geográficas.',
      benefits: ['Detección inmediata de problemas', 'Alertas automáticas por email/SMS', 'Dashboard en tiempo real']
    },
    {
      icon: 'fas fa-bell',
      title: 'Alertas Inteligentes',
      description: 'Sistema de notificaciones avanzado que te avisa cuando el rendimiento cae por debajo de los umbrales establecidos.',
      benefits: ['Alertas personalizables', 'Múltiples canales de notificación', 'Escalado automático de alertas']
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Reportes Automáticos',
      description: 'Informes detallados semanales y mensuales con análisis de tendencias y recomendaciones de mejora.',
      benefits: ['Reportes en PDF ejecutivos', 'Análisis de tendencias', 'Recomendaciones personalizadas']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Análisis de Competencia',
      description: 'Comparación continua con tus principales competidores para mantener tu ventaja competitiva.',
      benefits: ['Benchmarking competitivo', 'Análisis de GAP', 'Oportunidades de mejora']
    }
  ];

  const metrics = [
    {
      category: 'Core Web Vitals',
      items: ['Largest Contentful Paint (LCP)', 'First Input Delay (FID)', 'Cumulative Layout Shift (CLS)', 'First Contentful Paint (FCP)']
    },
    {
      category: 'Métricas de Rendimiento',
      items: ['Tiempo de carga total', 'Time to First Byte (TTFB)', 'Speed Index', 'Total Blocking Time (TBT)']
    },
    {
      category: 'Disponibilidad',
      items: ['Uptime monitoring', 'SSL certificate monitoring', 'DNS response times', 'Server response codes']
    },
    {
      category: 'Experiencia de Usuario',
      items: ['Page load distribution', 'Geographic performance', 'Device-specific metrics', 'Network connection analysis']
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
              Monitoreo Continuo
              <span className="text-yellow-300"> 24/7</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Supervisión permanente del rendimiento de tu sitio web con alertas automáticas 
              y reportes detallados para mantener la excelencia en todo momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-play mr-2"></i>
                Activar Monitoreo
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-eye mr-2"></i>
                Ver Demo Dashboard
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">24/7</div>
                <div className="text-sm text-blue-100">Monitoreo Activo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">15</div>
                <div className="text-sm text-blue-100">Ubicaciones Globales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">1min</div>
                <div className="text-sm text-blue-100">Frecuencia Checks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">99.9%</div>
                <div className="text-sm text-blue-100">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={featuresRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Características del Monitoreo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema completo de monitoreo que te mantiene informado sobre el estado 
              de tu sitio web las 24 horas del día, los 7 días de la semana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 bg-wpo-primary/10 rounded-lg">
                      <i className={`${feature.icon} text-2xl text-wpo-primary`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-wpo-neutral-dark mb-2">Beneficios incluidos:</h4>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-wpo-secondary mr-2"></i>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={alertsRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              alertsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Métricas Monitoreadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimiento exhaustivo de todas las métricas críticas que afectan 
              el rendimiento y la experiencia de usuario de tu sitio web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-6 flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-3 ${
                      index === 0 ? 'bg-wpo-primary' :
                      index === 1 ? 'bg-wpo-secondary' :
                      index === 2 ? 'bg-wpo-accent' : 'bg-purple-500'
                    }`}></span>
                    {metric.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {metric.items.map((item, idx) => (
                      <div key={idx} className="flex items-start text-gray-600">
                        <i className="fas fa-chart-bar text-gray-400 mr-3 mt-1 text-sm"></i>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-6">
                Dashboard de Monitoreo en Tiempo Real
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-100 rounded-lg p-6 mb-4">
                    <i className="fas fa-check-circle text-3xl text-green-600"></i>
                  </div>
                  <h4 className="font-semibold text-wpo-neutral-dark mb-2">Estado Actual</h4>
                  <p className="text-sm text-gray-600">Visualización en tiempo real del estado de tu sitio</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 rounded-lg p-6 mb-4">
                    <i className="fas fa-chart-line text-3xl text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-wpo-neutral-dark mb-2">Tendencias</h4>
                  <p className="text-sm text-gray-600">Análisis histórico y predicciones de rendimiento</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-lg p-6 mb-4">
                    <i className="fas fa-exclamation-triangle text-3xl text-orange-600"></i>
                  </div>
                  <h4 className="font-semibold text-wpo-neutral-dark mb-2">Alertas</h4>
                  <p className="text-sm text-gray-600">Notificaciones inmediatas de problemas detectados</p>
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="bg-wpo-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors min-h-[60px]"
              >
                <i className="fas fa-desktop mr-2"></i>
                Activar Monitoreo 24/7
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}