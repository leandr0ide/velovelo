import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BlogWPO() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: articlesRef, isVisible: articlesVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const featuredArticles = [
    {
      category: 'CORE WEB VITALS',
      title: 'Guía Completa de Core Web Vitals 2024: LCP, FID y CLS Explicados',
      excerpt: 'Todo lo que necesitas saber sobre las métricas de experiencia de usuario que Google utiliza para ranking. Incluye estrategias prácticas de optimización.',
      readTime: '8 min lectura',
      date: '15 Enero 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Dashboard mostrando métricas de Core Web Vitals con gráficos de rendimiento',
      tags: ['Core Web Vitals', 'SEO', 'Performance']
    },
    {
      category: 'OPTIMIZACIÓN',
      title: 'Cómo Reducir el Tiempo de Carga de tu Web en un 70%',
      excerpt: 'Técnicas avanzadas de optimización que han demostrado reducir drásticamente los tiempos de carga: lazy loading, compresión de imágenes y más.',
      readTime: '12 min lectura',
      date: '10 Enero 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Gráfico de velocidad de sitio web mostrando mejoras de rendimiento',
      tags: ['Velocidad', 'Optimización', 'WPO']
    },
    {
      category: 'CONVERSIONES',
      title: 'El Impacto Real de la Velocidad Web en las Conversiones',
      excerpt: 'Análisis de casos reales donde la optimización de velocidad incrementó las conversiones entre 40% y 200%. Datos y estrategias comprobadas.',
      readTime: '6 min lectura',
      date: '5 Enero 2024',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Análisis de conversiones en dashboard con métricas de e-commerce',
      tags: ['Conversiones', 'ROI', 'Casos de Éxito']
    }
  ];

  const recentArticles = [
    {
      title: 'Optimización de Imágenes WebP vs AVIF: ¿Cuál Elegir en 2024?',
      excerpt: 'Comparativa detallada de formatos de imagen modernos y su impacto en el rendimiento web.',
      readTime: '5 min',
      date: '20 Enero 2024',
      category: 'TÉCNICO'
    },
    {
      title: 'JavaScript y Performance: Técnicas de Code Splitting Avanzadas',
      excerpt: 'Estrategias para reducir el bundle size y mejorar el First Input Delay mediante code splitting.',
      readTime: '10 min',
      date: '18 Enero 2024',
      category: 'DESARROLLO'
    },
    {
      title: 'Mobile-First Performance: Optimizando para el 60% de tu Tráfico',
      excerpt: 'Guía específica para optimizar la experiencia móvil y mejorar Core Web Vitals en dispositivos móviles.',
      readTime: '7 min',
      date: '16 Enero 2024',
      category: 'MOBILE'
    },
    {
      title: 'CDN y Edge Computing: Acelera tu Web Globalmente',
      excerpt: 'Cómo implementar una estrategia de CDN efectiva para reducir latencia en usuarios internacionales.',
      readTime: '9 min',
      date: '12 Enero 2024',
      category: 'INFRAESTRUCTURA'
    },
    {
      title: 'Lazy Loading Avanzado: Más Allá de las Imágenes',
      excerpt: 'Técnicas de lazy loading para componentes, videos y contenido dinámico que mejoran LCP significativamente.',
      readTime: '6 min',
      date: '8 Enero 2024',
      category: 'OPTIMIZACIÓN'
    },
    {
      title: 'Métricas que Importan: Más Allá de Google PageSpeed',
      excerpt: 'Las métricas reales de rendimiento que correlacionan directamente con conversiones y engagement.',
      readTime: '8 min',
      date: '3 Enero 2024',
      category: 'ANALYTICS'
    }
  ];

  const categories = [
    { name: 'Core Web Vitals', count: 15, color: 'bg-blue-500' },
    { name: 'Optimización', count: 23, color: 'bg-green-500' },
    { name: 'Conversiones', count: 12, color: 'bg-purple-500' },
    { name: 'SEO Técnico', count: 18, color: 'bg-orange-500' },
    { name: 'Mobile Performance', count: 9, color: 'bg-pink-500' },
    { name: 'Herramientas', count: 14, color: 'bg-indigo-500' }
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
              Blog WPO
              <span className="text-yellow-300"> Expert</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Artículos técnicos, guías prácticas y casos de estudio sobre optimización web, 
              Core Web Vitals y estrategias que realmente funcionan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-envelope mr-2"></i>
                Suscribirse al Newsletter
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-rss mr-2"></i>
                Feed RSS
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">90+</div>
                <div className="text-sm text-blue-100">Artículos Técnicos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">15K+</div>
                <div className="text-sm text-blue-100">Lectores Mensuales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">Weekly</div>
                <div className="text-sm text-blue-100">Contenido Nuevo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">100%</div>
                <div className="text-sm text-blue-100">Práctico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={articlesRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              articlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Artículos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los artículos más leídos y valorados por nuestra comunidad de desarrolladores 
              y especialistas en optimización web.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-wpo-primary bg-wpo-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <i className="fas fa-clock mr-1"></i>
                      {article.readTime}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-wpo-primary border-wpo-primary hover:bg-wpo-primary hover:text-white"
                    >
                      Leer Artículo
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles & Categories */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-wpo-neutral-dark mb-8">
                Artículos Recientes
              </h2>
              
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <Card key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-semibold text-wpo-secondary bg-wpo-secondary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-wpo-neutral-dark mb-2 hover:text-wpo-primary cursor-pointer">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <i className="fas fa-clock mr-1"></i>
                          {article.readTime}
                        </span>
                        <button className="text-wpo-primary text-sm font-semibold hover:underline">
                          Leer más →
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <Card className="bg-white rounded-xl shadow-lg mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-6">
                    Categorías
                  </h3>
                  
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <span className={`w-3 h-3 ${category.color} rounded-full mr-3`}></span>
                          <span className="text-gray-700">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-wpo-primary to-wpo-secondary text-white rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Newsletter WPO
                  </h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Recibe artículos técnicos, herramientas y casos de estudio directamente en tu inbox.
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-white text-primary hover:bg-gray-100"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Suscribirme
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}