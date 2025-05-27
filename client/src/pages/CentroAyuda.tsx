import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

export default function CentroAyuda() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const categories = [
    {
      title: 'Primeros Pasos',
      icon: 'fas fa-rocket',
      color: 'bg-blue-500',
      articles: 12,
      description: 'Guías básicas para comenzar con WPO'
    },
    {
      title: 'Core Web Vitals',
      icon: 'fas fa-tachometer-alt',
      color: 'bg-green-500',
      articles: 18,
      description: 'Todo sobre LCP, FID y CLS'
    },
    {
      title: 'Optimización Técnica',
      icon: 'fas fa-cogs',
      color: 'bg-purple-500',
      articles: 25,
      description: 'Técnicas avanzadas de optimización'
    },
    {
      title: 'Herramientas',
      icon: 'fas fa-tools',
      color: 'bg-orange-500',
      articles: 15,
      description: 'Guías de herramientas y plugins'
    },
    {
      title: 'Solución de Problemas',
      icon: 'fas fa-bug',
      color: 'bg-red-500',
      articles: 22,
      description: 'Resolución de problemas comunes'
    },
    {
      title: 'Facturación y Cuenta',
      icon: 'fas fa-credit-card',
      color: 'bg-indigo-500',
      articles: 8,
      description: 'Gestión de cuenta y pagos'
    }
  ];

  const faqs = [
    {
      question: '¿Qué son exactamente los Core Web Vitals?',
      answer: 'Los Core Web Vitals son tres métricas específicas que Google utiliza para medir la experiencia de usuario: LCP (Largest Contentful Paint) que mide la velocidad de carga, FID (First Input Delay) que mide la interactividad, y CLS (Cumulative Layout Shift) que mide la estabilidad visual. Estas métricas son factores de ranking oficial desde 2021.',
      category: 'Core Web Vitals'
    },
    {
      question: '¿Cuánto tiempo toma ver resultados de las optimizaciones WPO?',
      answer: 'Los resultados técnicos son inmediatos (mejora en velocidad y métricas), pero el impacto en SEO puede tomar 2-8 semanas en verse reflejado en rankings. Las mejoras en conversiones suelen notarse en 1-4 semanas. Proporcionamos reportes semanales para monitorear el progreso.',
      category: 'Resultados'
    },
    {
      question: '¿Qué incluye exactamente una auditoría WPO completa?',
      answer: 'Incluye análisis de velocidad de carga, Core Web Vitals, optimización móvil, análisis de competencia, revisión de imágenes y assets, evaluación de JavaScript y CSS, análisis de caché y CDN, y un reporte detallado con recomendaciones priorizadas por impacto.',
      category: 'Servicios'
    },
    {
      question: '¿Ofrecen garantías en las mejoras de rendimiento?',
      answer: 'Sí, garantizamos mejoras mínimas: Lighthouse Score +20 puntos, LCP reducción 30%, y mejora general del 40% en tiempo de carga. Si no se alcanzan estos objetivos en 60 días, reembolsamos el 100% o continuamos trabajando sin costo adicional.',
      category: 'Garantías'
    },
    {
      question: '¿Cómo afecta la velocidad web a las conversiones realmente?',
      answer: 'Estudios muestran que una mejora de 1 segundo en velocidad puede aumentar conversiones 7-12%. Amazon reporta que 100ms adicionales reducen ventas 1%. Nuestros casos de estudio documentan incrementos promedio de 45% en conversiones tras optimización WPO.',
      category: 'Conversiones'
    },
    {
      question: '¿Las optimizaciones funcionan para todos los tipos de sitio web?',
      answer: 'Sí, adaptamos las técnicas según el tipo: e-commerce, blogs, SaaS, corporativos, etc. Cada tecnología (WordPress, Shopify, custom) requiere estrategias específicas que dominamos. Evaluamos primero para crear un plan personalizado.',
      category: 'Compatibilidad'
    },
    {
      question: '¿Qué pasa si mi sitio ya tiene buena velocidad según otras herramientas?',
      answer: 'Diferentes herramientas miden aspectos distintos. Nosotros nos enfocamos en métricas reales de usuario (RUM), Core Web Vitals, y experiencia en dispositivos reales. Muchas veces encontramos oportunidades incluso en sitios que parecen "rápidos".',
      category: 'Evaluación'
    },
    {
      question: '¿Incluyen soporte post-implementación?',
      answer: 'Todos nuestros servicios incluyen 30 días de soporte post-implementación. El plan Premium incluye monitoreo continuo 24/7 y soporte prioritario. También ofrecemos planes de mantenimiento mensual para optimizaciones continuas.',
      category: 'Soporte'
    }
  ];

  const popularArticles = [
    {
      title: 'Cómo Interpretar los Resultados de Google PageSpeed Insights',
      views: '12,340',
      helpful: '98%'
    },
    {
      title: 'Diferencias Entre Lighthouse Lab Data y Field Data',
      views: '8,920',
      helpful: '96%'
    },
    {
      title: 'WordPress: Plugins que Ralentizan tu Sitio Web',
      views: '15,670',
      helpful: '94%'
    },
    {
      title: 'Optimización de Imágenes: WebP vs AVIF vs JPEG',
      views: '7,450',
      helpful: '97%'
    },
    {
      title: 'Configurar Cache Headers Correctamente',
      views: '6,890',
      helpful: '95%'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Centro de Ayuda
              <span className="text-yellow-300"> WPO</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Encuentra respuestas rápidas a tus preguntas sobre optimización web, 
              Core Web Vitals y nuestros servicios. Soporte especializado disponible 24/7.
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar en el centro de ayuda..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-white/20 bg-white/10 text-white placeholder-blue-200 rounded-lg focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500"
                />
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200"></i>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">150+</div>
                <div className="text-sm text-blue-100">Artículos de Ayuda</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">24/7</div>
                <div className="text-sm text-blue-100">Soporte Disponible</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">2min</div>
                <div className="text-sm text-blue-100">Tiempo Respuesta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">99%</div>
                <div className="text-sm text-blue-100">Problemas Resueltos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={categoriesRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Categorías de Ayuda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestras guías organizadas por temas para encontrar exactamente 
              lo que necesitas sobre optimización web y rendimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${category.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-wpo-primary font-semibold">
                    <span>{category.articles} artículos</span>
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="bg-wpo-neutral-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-6 text-center">
              Artículos Más Populares
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer">
                  <h4 className="font-semibold text-wpo-neutral-dark mb-2 text-sm line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <i className="fas fa-eye mr-1"></i>
                      {article.views}
                    </span>
                    <span className="flex items-center text-green-600">
                      <i className="fas fa-thumbs-up mr-1"></i>
                      {article.helpful}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={faqRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las respuestas a las consultas más comunes sobre WPO, nuestros servicios 
              y el proceso de optimización web.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Card key={index} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div>
                        <h3 className="font-semibold text-wpo-neutral-dark pr-4">
                          {faq.question}
                        </h3>
                        <span className="text-xs text-wpo-primary bg-wpo-primary/10 px-2 py-1 rounded mt-2 inline-block">
                          {faq.category}
                        </span>
                      </div>
                      <i className={`fas fa-chevron-${expandedFaq === index ? 'up' : 'down'} text-gray-400 transition-transform duration-300`}></i>
                    </button>
                    
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFaqs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No encontramos resultados
                </h3>
                <p className="text-gray-500">
                  Prueba con otros términos de búsqueda o contacta con nuestro soporte.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-wpo-primary to-wpo-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿No Encuentras lo que Buscas?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está disponible 24/7 para resolver cualquier duda 
              sobre WPO, optimización web o nuestros servicios.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <i className="fas fa-comments text-3xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Chat en Vivo</h3>
                <p className="text-sm text-blue-100">Respuesta inmediata en horario laboral</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <i className="fas fa-envelope text-3xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Email Soporte</h3>
                <p className="text-sm text-blue-100">Respuesta en menos de 2 horas</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <i className="fas fa-phone text-3xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Llamada Directa</h3>
                <p className="text-sm text-blue-100">Soporte telefónico personalizado</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-headset mr-2"></i>
                Contactar Soporte
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-calendar mr-2"></i>
                Agendar Llamada
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}