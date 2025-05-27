import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ConsultoriaSEO() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const services = [
    {
      icon: 'fas fa-search',
      title: 'Auditoría SEO Técnica',
      description: 'Análisis exhaustivo de factores técnicos que afectan el SEO: velocidad, estructura, indexación y factores Core Web Vitals.',
      deliverables: ['Reporte técnico detallado', 'Lista priorizada de mejoras', 'Roadmap de implementación']
    },
    {
      icon: 'fas fa-keywords',
      title: 'Investigación de Palabras Clave',
      description: 'Análisis profundo de oportunidades de palabras clave, competencia y estrategia de contenido orientada a conversiones.',
      deliverables: ['Mapa de palabras clave', 'Análisis de competencia', 'Estrategia de contenido']
    },
    {
      icon: 'fas fa-link',
      title: 'Estrategia de Link Building',
      description: 'Desarrollo de estrategias de construcción de enlaces de alta calidad que mejoren la autoridad y ranking de tu sitio.',
      deliverables: ['Plan de link building', 'Lista de sitios objetivo', 'Templates de outreach']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'SEO Mobile-First',
      description: 'Optimización específica para dispositivos móviles, considerando la indexación mobile-first de Google.',
      deliverables: ['Auditoría mobile', 'Optimizaciones específicas', 'Tests de usabilidad móvil']
    }
  ];

  const seoFactors = [
    {
      category: 'Factores Técnicos',
      weight: '35%',
      items: [
        'Core Web Vitals (LCP, FID, CLS)',
        'Velocidad de carga y TTFB',
        'Estructura HTML semántica',
        'Datos estructurados (Schema.org)',
        'Optimización para mobile-first'
      ],
      color: 'bg-blue-500'
    },
    {
      category: 'Contenido y On-Page',
      weight: '30%',
      items: [
        'Optimización de títulos y meta descriptions',
        'Estructura de headings (H1-H6)',
        'Densidad y relevancia de keywords',
        'Enlaces internos estratégicos',
        'Optimización de imágenes y alt text'
      ],
      color: 'bg-green-500'
    },
    {
      category: 'Autoridad y Off-Page',
      weight: '25%',
      items: [
        'Perfil de backlinks de calidad',
        'Domain Authority y Page Authority',
        'Citations y menciones de marca',
        'Señales sociales y engagement',
        'Diversidad de fuentes de enlaces'
      ],
      color: 'bg-purple-500'
    },
    {
      category: 'Experiencia de Usuario',
      weight: '10%',
      items: [
        'Tasa de rebote y tiempo en sitio',
        'Navegación intuitiva y arquitectura',
        'Compatibilidad cross-browser',
        'Accesibilidad web (WCAG)',
        'Diseño responsive y usabilidad'
      ],
      color: 'bg-orange-500'
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
              Consultoría SEO
              <span className="text-yellow-300"> Técnica Avanzada</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Estrategias SEO especializadas que integran optimización técnica y Core Web Vitals 
              para maximizar tu visibilidad orgánica y conversiones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-chart-line mr-2"></i>
                Consultoría SEO
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-file-alt mr-2"></i>
                Auditoría SEO Gratuita
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">+300%</div>
                <div className="text-sm text-blue-100">Aumento Tráfico Orgánico</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">1°</div>
                <div className="text-sm text-blue-100">Posiciones Conseguidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">6-12</div>
                <div className="text-sm text-blue-100">Meses Resultados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">ROI</div>
                <div className="text-sm text-blue-100">Garantizado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={servicesRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Servicios de Consultoría SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estrategias SEO integrales que combinan optimización técnica, contenido 
              y autoridad para posicionar tu sitio web en los primeros resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 bg-wpo-primary/10 rounded-lg">
                      <i className={`${service.icon} text-2xl text-wpo-primary`}></i>
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
                    <h4 className="font-semibold text-wpo-neutral-dark mb-2">Entregables:</h4>
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-wpo-secondary mr-2"></i>
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Factors Section */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={processRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Factores SEO que Optimizamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enfoque holístico que considera todos los factores de ranking de Google, 
              con especial énfasis en Core Web Vitals y experiencia de usuario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoFactors.map((factor, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-wpo-neutral-dark flex items-center">
                      <span className={`w-4 h-4 ${factor.color} rounded-full mr-3`}></span>
                      {factor.category}
                    </h3>
                    <span className="text-2xl font-bold text-wpo-primary">{factor.weight}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {factor.items.map((item, idx) => (
                      <div key={idx} className="flex items-start text-gray-600">
                        <i className="fas fa-arrow-right text-gray-400 mr-3 mt-1 text-sm"></i>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-wpo-primary to-wpo-secondary rounded-xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">
                SEO Técnico + Core Web Vitals = Ranking Superior
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">🚀</div>
                  <div className="font-semibold mb-2">Velocidad Optimizada</div>
                  <div className="text-sm">Core Web Vitals perfectos mejoran ranking y conversiones</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">📱</div>
                  <div className="font-semibold mb-2">Mobile-First</div>
                  <div className="text-sm">Optimización para indexación mobile-first de Google</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">📈</div>
                  <div className="font-semibold mb-2">Resultados Medibles</div>
                  <div className="text-sm">Incremento verificable en tráfico y conversiones</div>
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Iniciar Estrategia SEO
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}