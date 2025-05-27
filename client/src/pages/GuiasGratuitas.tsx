import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function GuiasGratuitas() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: guidesRef, isVisible: guidesVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const guides = [
    {
      type: 'GUÍA PDF',
      title: 'Checklist Completo de Optimización WPO 2024',
      description: 'Lista de verificación con 47 puntos críticos de optimización organizados por prioridad e impacto. Incluye herramientas recomendadas y métricas objetivo.',
      pages: '24 páginas',
      downloadCount: '3,247 descargas',
      level: 'Principiante - Intermedio',
      topics: ['Core Web Vitals', 'Optimización de imágenes', 'Caché y CDN', 'JavaScript optimization'],
      preview: 'https://images.unsplash.com/photo-1586281010691-3d6d30184ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Vista previa del checklist WPO con elementos marcados'
    },
    {
      type: 'PLANTILLA',
      title: 'Template de Auditoría Técnica SEO + WPO',
      description: 'Plantilla profesional en Excel/Google Sheets para realizar auditorías técnicas completas. Incluye fórmulas automáticas y sistema de puntuación.',
      pages: 'Hoja de cálculo',
      downloadCount: '1,892 descargas',
      level: 'Intermedio - Avanzado',
      topics: ['Auditoría técnica', 'Métricas automatizadas', 'Reportes cliente', 'Análisis competitivo'],
      preview: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Captura de pantalla de la plantilla de auditoría con datos'
    },
    {
      type: 'EBOOK',
      title: 'Core Web Vitals: Guía Definitiva para Desarrolladores',
      description: 'Manual técnico profundo sobre LCP, FID y CLS con ejemplos de código, estrategias de optimización y casos de estudio reales con mejoras documentadas.',
      pages: '67 páginas',
      downloadCount: '5,134 descargas',
      level: 'Intermedio - Avanzado',
      topics: ['LCP optimization', 'FID mejoras', 'CLS fixes', 'Performance API'],
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Portada del ebook Core Web Vitals con gráficos técnicos'
    },
    {
      type: 'GUÍA TÉCNICA',
      title: 'Optimización de Imágenes para Web: WebP, AVIF y Más',
      description: 'Guía completa sobre formatos de imagen modernos, técnicas de compresión, lazy loading avanzado y herramientas de automatización.',
      pages: '31 páginas',
      downloadCount: '2,567 descargas',
      level: 'Todos los niveles',
      topics: ['Formatos modernos', 'Compresión avanzada', 'Lazy loading', 'Automatización'],
      preview: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Comparativa visual de formatos de imagen y sus tamaños'
    },
    {
      type: 'HOJA DE RUTA',
      title: 'Roadmap de Implementación WPO para E-commerce',
      description: 'Plan estratégico específico para tiendas online con prioridades, timelines y métricas de éxito. Incluye casos de estudio de e-commerce reales.',
      pages: '18 páginas',
      downloadCount: '1,743 descargas',
      level: 'Intermedio',
      topics: ['E-commerce específico', 'Priorización', 'ROI measurement', 'Implementation timeline'],
      preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Timeline visual del roadmap de implementación WPO'
    },
    {
      type: 'MANUAL TÉCNICO',
      title: 'JavaScript Performance: Code Splitting y Optimización',
      description: 'Manual avanzado sobre optimización de JavaScript: tree shaking, code splitting, lazy loading de componentes y mejores prácticas de bundling.',
      pages: '45 páginas',
      downloadCount: '2,891 descargas',
      level: 'Avanzado',
      topics: ['Code splitting', 'Tree shaking', 'Bundle optimization', 'Performance monitoring'],
      preview: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      alt: 'Código JavaScript con métricas de performance'
    }
  ];

  const stats = [
    { number: '25K+', label: 'Descargas Totales' },
    { number: '15', label: 'Guías Disponibles' },
    { number: '4.9/5', label: 'Valoración Promedio' },
    { number: '100%', label: 'Gratuitas' }
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
              Guías Gratuitas
              <span className="text-yellow-300"> WPO</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Recursos técnicos y prácticos para dominar la optimización web. Guías detalladas, 
              checklists y plantillas creadas por expertos en WPO.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-download mr-2"></i>
                Descargar Pack Completo
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-envelope mr-2"></i>
                Recibir por Email
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-wpo-secondary mb-2">{stat.number}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={guidesRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              guidesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Biblioteca de Recursos WPO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada guía está basada en experiencia real de proyectos y casos de éxito. 
              Contenido práctico que puedes implementar inmediatamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img 
                  src={guide.preview}
                  alt={guide.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      guide.type === 'GUÍA PDF' ? 'bg-red-100 text-red-600' :
                      guide.type === 'PLANTILLA' ? 'bg-green-100 text-green-600' :
                      guide.type === 'EBOOK' ? 'bg-blue-100 text-blue-600' :
                      guide.type === 'GUÍA TÉCNICA' ? 'bg-purple-100 text-purple-600' :
                      guide.type === 'HOJA DE RUTA' ? 'bg-orange-100 text-orange-600' :
                      'bg-indigo-100 text-indigo-600'
                    }`}>
                      {guide.type}
                    </span>
                    <span className="text-xs text-gray-500">{guide.level}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                      <i className="fas fa-file-alt mr-1"></i>
                      {guide.pages}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-download mr-1"></i>
                      {guide.downloadCount}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-wpo-neutral-dark mb-2">Temas incluidos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-wpo-primary text-white hover:bg-blue-700"
                      size="sm"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Descargar Gratis
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-wpo-primary border-wpo-primary hover:bg-wpo-primary hover:text-white"
                    >
                      <i className="fas fa-eye mr-2"></i>
                      Vista Previa
                    </Button>
                  </div>
                </CardContent>
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
              ¿Necesitas Ayuda Implementando estas Estrategias?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nuestros expertos pueden implementar todas estas optimizaciones directamente 
              en tu sitio web, garantizando resultados measurables.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Consultoría Personalizada
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