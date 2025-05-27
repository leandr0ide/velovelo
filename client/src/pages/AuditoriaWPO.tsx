import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AuditoriaWPO() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const benefits = [
    {
      icon: 'fas fa-search-plus',
      title: 'Análisis Técnico Exhaustivo',
      description: 'Evaluación completa de velocidad de carga, Core Web Vitals, y factores técnicos que impactan el rendimiento de tu sitio web.'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Métricas de Conversión',
      description: 'Análisis del impacto del rendimiento en tus conversiones, identificando oportunidades de mejora en el embudo de ventas.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Optimización Mobile',
      description: 'Evaluación específica para dispositivos móviles, considerando la experiencia de usuario en smartphones y tablets.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Auditoría de Seguridad',
      description: 'Revisión de aspectos de seguridad que pueden afectar el rendimiento, incluyendo certificados SSL y protocolos de seguridad.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Análisis Inicial',
      description: 'Realizamos un escaneo completo de tu sitio web utilizando herramientas profesionales como Lighthouse, PageSpeed Insights y WebPageTest.',
      duration: '24-48 horas'
    },
    {
      step: '02',
      title: 'Evaluación Técnica',
      description: 'Revisamos el código, estructura, recursos, imágenes, y configuración del servidor para identificar cuellos de botella.',
      duration: '2-3 días'
    },
    {
      step: '03',
      title: 'Reporte Detallado',
      description: 'Elaboramos un informe comprensivo con hallazgos, prioridades, y recomendaciones específicas para tu sitio web.',
      duration: '1-2 días'
    },
    {
      step: '04',
      title: 'Presentación de Resultados',
      description: 'Sesión de consultoría para explicar los resultados y planificar la implementación de las mejoras propuestas.',
      duration: '1 hora'
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
              Auditoría WPO Completa
              <span className="text-yellow-300"> para tu Sitio Web</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Análisis exhaustivo de rendimiento que identifica oportunidades de mejora específicas 
              para acelerar tu web y aumentar conversiones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Solicitar Auditoría
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-file-download mr-2"></i>
                Ver Ejemplo de Reporte
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">47+</div>
                <div className="text-sm text-blue-100">Puntos de Análisis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">24h</div>
                <div className="text-sm text-blue-100">Entrega Garantizada</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">100%</div>
                <div className="text-sm text-blue-100">Personalizado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">€297</div>
                <div className="text-sm text-blue-100">Precio Fijo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={benefitsRef}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              ¿Qué Incluye Nuestra Auditoría WPO?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un análisis completo y profesional que te dará una visión clara del estado actual 
              de tu sitio web y las oportunidades de mejora más impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-wpo-primary/10 rounded-lg">
                      <i className={`${benefit.icon} text-2xl text-wpo-primary`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={processRef}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Nuestro Proceso de Auditoría
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada que garantiza un análisis exhaustivo y recomendaciones accionables 
              para maximizar el rendimiento de tu sitio web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg relative">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-wpo-primary/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="text-sm font-semibold text-wpo-secondary">
                    <i className="fas fa-clock mr-1"></i>
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={scrollToContact}
              className="bg-wpo-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors min-h-[60px]"
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              Programar Auditoría
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}