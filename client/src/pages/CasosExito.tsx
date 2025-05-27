import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CasosExito() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const detailedCases = [
    {
      id: 1,
      category: 'E-COMMERCE',
      industry: 'Electrónicos',
      title: 'TechStore España - Tienda Online de Tecnología',
      challenge: 'Sitio con 50,000+ productos que cargaba muy lento, especialmente en móvil. Tasa de conversión del 1.8% y alta tasa de abandono en checkout.',
      solution: 'Optimización completa del catálogo, implementación de lazy loading, CDN global, y optimización del proceso de checkout.',
      results: {
        before: { lighthouse: 32, lcp: '4.8s', conversion: '1.8%', revenue: '€24,500' },
        after: { lighthouse: 94, lcp: '1.9s', conversion: '3.8%', revenue: '€48,200' }
      },
      improvements: [
        'Lighthouse Score: 32 → 94 (+194%)',
        'LCP: 4.8s → 1.9s (-60%)',
        'Conversiones: 1.8% → 3.8% (+111%)',
        'Ingresos: €24.5K → €48.2K (+97%)'
      ],
      timeframe: '3 meses',
      roi: '+234%',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      testimonial: '"Los resultados superaron nuestras expectativas. No solo mejoramos la velocidad, sino que duplicamos nuestras ventas online."',
      clientName: 'Carlos Mendoza, Director E-commerce'
    },
    {
      id: 2,
      category: 'SAAS',
      industry: 'Software B2B',
      title: 'DataFlow Pro - Plataforma de Analytics',
      challenge: 'Dashboard complejo con múltiples gráficos que tardaba 8+ segundos en cargar. Alta tasa de abandono de usuarios en trial.',
      solution: 'Implementación de code splitting, optimización de consultas, lazy loading de componentes y mejora de la arquitectura frontend.',
      results: {
        before: { lighthouse: 28, lcp: '8.2s', retention: '34%', signups: '156/mes' },
        after: { lighthouse: 91, lcp: '2.1s', retention: '68%', signups: '387/mes' }
      },
      improvements: [
        'Lighthouse Score: 28 → 91 (+225%)',
        'LCP: 8.2s → 2.1s (-74%)',
        'Retención: 34% → 68% (+100%)',
        'Signups: 156 → 387/mes (+148%)'
      ],
      timeframe: '4 meses',
      roi: '+189%',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      testimonial: '"La optimización transformó completamente la experiencia de nuestros usuarios. Ahora retienen mucho más y convierten mejor."',
      clientName: 'Ana García, CTO'
    },
    {
      id: 3,
      category: 'SALUD',
      industry: 'Servicios Médicos',
      title: 'ClinicPlus - Portal de Citas Médicas',
      challenge: 'Sistema de reservas lento que frustraba a pacientes, especialmente usuarios mayores. Solo 23% completaba el proceso de cita.',
      solution: 'Simplificación del flujo de reservas, optimización móvil, mejora de formularios y eliminación de steps innecesarios.',
      results: {
        before: { lighthouse: 41, lcp: '5.1s', completion: '23%', citas: '890/mes' },
        after: { lighthouse: 89, lcp: '1.7s', completion: '71%', citas: '2,340/mes' }
      },
      improvements: [
        'Lighthouse Score: 41 → 89 (+117%)',
        'LCP: 5.1s → 1.7s (-67%)',
        'Finalización: 23% → 71% (+209%)',
        'Citas: 890 → 2,340/mes (+163%)'
      ],
      timeframe: '2 meses',
      roi: '+278%',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      testimonial: '"Increíble mejora. Nuestros pacientes ahora pueden reservar citas sin frustraciones, y hemos triplicado las reservas online."',
      clientName: 'Dr. Miguel Ruiz, Director Médico'
    }
  ];

  const quickStats = [
    { label: 'Proyectos Completados', value: '150+', icon: 'fas fa-check-circle' },
    { label: 'Mejora Promedio LCP', value: '-65%', icon: 'fas fa-tachometer-alt' },
    { label: 'Incremento Conversiones', value: '+127%', icon: 'fas fa-chart-line' },
    { label: 'ROI Promedio', value: '+234%', icon: 'fas fa-coins' }
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
              Casos de Éxito
              <span className="text-yellow-300"> Reales</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Historias verificables de transformación digital. Resultados medibles 
              que demuestran el impacto real de la optimización WPO profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Conseguir Resultados Similares
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-download mr-2"></i>
                Descargar Estudios Completos
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {quickStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-wpo-secondary mb-2">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cases */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={casesRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              casesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Estudios de Caso Detallados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Análisis profundo de transformaciones reales con métricas antes/después, 
              estrategias implementadas y ROI documentado.
            </p>
          </div>

          <div className="space-y-16">
            {detailedCases.map((caseStudy, index) => (
              <Card key={caseStudy.id} className="overflow-hidden shadow-2xl rounded-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="order-2 lg:order-1">
                    <img 
                      src={caseStudy.image}
                      alt={`Caso de éxito ${caseStudy.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <CardContent className="order-1 lg:order-2 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-wpo-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                        {caseStudy.category}
                      </span>
                      <span className="text-gray-500 text-sm">{caseStudy.industry}</span>
                      <span className="text-gray-500 text-sm">• {caseStudy.timeframe}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-wpo-neutral-dark mb-4">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-wpo-neutral-dark mb-2">🎯 Desafío:</h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-wpo-neutral-dark mb-2">🛠️ Solución:</h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-wpo-neutral-dark mb-3">📊 Resultados:</h4>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {caseStudy.improvements.map((improvement, idx) => (
                            <div key={idx} className="bg-green-50 p-3 rounded-lg">
                              <div className="text-sm font-semibold text-green-800">
                                {improvement}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-wpo-primary/10 p-4 rounded-lg">
                          <div className="text-lg font-bold text-wpo-primary">
                            ROI: {caseStudy.roi} en {caseStudy.timeframe}
                          </div>
                        </div>
                      </div>
                      
                      <blockquote className="border-l-4 border-wpo-secondary pl-4 italic text-gray-700">
                        {caseStudy.testimonial}
                        <footer className="text-sm font-semibold mt-2">
                          — {caseStudy.clientName}
                        </footer>
                      </blockquote>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-wpo-primary to-wpo-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres Resultados Como Estos?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Cada caso de éxito comenzó con una auditoría gratuita. 
              Descubre el potencial de optimización de tu sitio web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-search mr-2"></i>
                Auditoría Gratuita
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-phone mr-2"></i>
                Hablar con Experto
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}