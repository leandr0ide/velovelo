import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

export default function Recursos() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: resourcesRef, isVisible: resourcesVisible } = useScrollAnimation();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const categories = ['Todos', 'Guías', 'Herramientas', 'Checklists', 'Templates', 'Videos', 'Ebooks'];

  const resources = [
    {
      type: 'GUÍA PDF',
      category: 'Guías',
      title: 'Guía Completa Core Web Vitals 2024',
      description: 'Manual definitivo sobre LCP, FID y CLS con estrategias de optimización y casos de estudio reales.',
      downloadCount: '5,247',
      rating: '4.9',
      pages: '67 páginas',
      level: 'Intermedio - Avanzado',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: true
    },
    {
      type: 'CHECKLIST',
      category: 'Checklists',
      title: 'Checklist Optimización WPO (47 puntos)',
      description: 'Lista de verificación completa con todos los elementos críticos de optimización web organizados por prioridad.',
      downloadCount: '8,932',
      rating: '4.8',
      pages: '12 páginas',
      level: 'Todos los niveles',
      image: 'https://images.unsplash.com/photo-1586281010691-3d6d30184ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: true
    },
    {
      type: 'HERRAMIENTA',
      category: 'Herramientas',
      title: 'Calculadora de ROI WPO',
      description: 'Herramienta interactiva para calcular el retorno de inversión de las optimizaciones de velocidad web.',
      downloadCount: '3,156',
      rating: '4.7',
      pages: 'Online',
      level: 'Principiante',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: false
    },
    {
      type: 'TEMPLATE',
      category: 'Templates',
      title: 'Template Auditoría SEO + WPO',
      description: 'Plantilla profesional en Excel para realizar auditorías técnicas completas con fórmulas automatizadas.',
      downloadCount: '2,847',
      rating: '4.9',
      pages: 'Spreadsheet',
      level: 'Avanzado',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: false
    },
    {
      type: 'VIDEO CURSO',
      category: 'Videos',
      title: 'Masterclass: JavaScript Performance',
      description: 'Curso completo sobre optimización de JavaScript: code splitting, tree shaking y lazy loading.',
      downloadCount: '4,621',
      rating: '4.8',
      pages: '3.5 horas',
      level: 'Avanzado',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: false
    },
    {
      type: 'EBOOK',
      category: 'Ebooks',
      title: 'WPO para E-commerce: Guía Definitiva',
      description: 'Estrategias específicas para tiendas online: product pages, checkout, y optimización de conversiones.',
      downloadCount: '6,389',
      rating: '4.9',
      pages: '89 páginas',
      level: 'Intermedio',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: true
    },
    {
      type: 'GUÍA TÉCNICA',
      category: 'Guías',
      title: 'Optimización de Imágenes Web 2024',
      description: 'Todo sobre WebP, AVIF, lazy loading y técnicas avanzadas de compresión sin pérdida de calidad.',
      downloadCount: '3,742',
      rating: '4.7',
      pages: '34 páginas',
      level: 'Intermedio',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: false
    },
    {
      type: 'CHECKLIST',
      category: 'Checklists',
      title: 'Pre-launch Performance Checklist',
      description: 'Verificaciones esenciales antes del lanzamiento para garantizar máximo rendimiento desde el día uno.',
      downloadCount: '2,156',
      rating: '4.6',
      pages: '8 páginas',
      level: 'Todos los niveles',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: false
    },
    {
      type: 'TEMPLATE',
      category: 'Templates',
      title: 'Budget Calculator WPO Projects',
      description: 'Plantilla para calcular presupuestos de proyectos WPO con estimaciones de tiempo y recursos.',
      downloadCount: '1,923',
      rating: '4.5',
      pages: 'Spreadsheet',
      level: 'Intermedio',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225',
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

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
              Biblioteca de
              <span className="text-yellow-300"> Recursos WPO</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              La colección más completa de recursos prácticos para dominar la optimización web. 
              Guías, herramientas y templates creados por expertos.
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar recursos (ej: Core Web Vitals, imágenes, checklist...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-white/20 bg-white/10 text-white placeholder-blue-200 rounded-lg focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500"
                />
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200"></i>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">50+</div>
                <div className="text-sm text-blue-100">Recursos Disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">25K+</div>
                <div className="text-sm text-blue-100">Descargas Totales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">4.8★</div>
                <div className="text-sm text-blue-100">Valoración Promedio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">100%</div>
                <div className="text-sm text-blue-100">Gratuitos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Recursos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los recursos más descargados y mejor valorados por nuestra comunidad de 
              desarrolladores y especialistas en WPO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="bg-wpo-neutral-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={resource.image}
                    alt={`Vista previa: ${resource.title}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-wpo-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                      DESTACADO
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-wpo-primary bg-wpo-primary/10 px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <div className="flex items-center text-yellow-500 text-sm">
                      <i className="fas fa-star mr-1"></i>
                      {resource.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-wpo-neutral-dark mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{resource.pages}</span>
                    <span>{resource.downloadCount} descargas</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-wpo-primary text-white hover:bg-blue-700"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Descargar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-wpo-primary border-wpo-primary hover:bg-wpo-primary hover:text-white"
                    >
                      <i className="fas fa-eye mr-1"></i>
                      Vista Previa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={resourcesRef as any}
            className={`mb-12 transition-all duration-600 ease-out ${
              resourcesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-wpo-neutral-dark mb-8">
              Todos los Recursos
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-wpo-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300">
                <img 
                  src={resource.image}
                  alt={`Vista previa: ${resource.title}`}
                  className="w-full h-40 object-cover rounded-t-lg"
                  loading="lazy"
                />
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      resource.type === 'GUÍA PDF' ? 'bg-red-100 text-red-600' :
                      resource.type === 'CHECKLIST' ? 'bg-green-100 text-green-600' :
                      resource.type === 'HERRAMIENTA' ? 'bg-blue-100 text-blue-600' :
                      resource.type === 'TEMPLATE' ? 'bg-purple-100 text-purple-600' :
                      resource.type === 'VIDEO CURSO' ? 'bg-orange-100 text-orange-600' :
                      resource.type === 'EBOOK' ? 'bg-indigo-100 text-indigo-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {resource.type}
                    </span>
                    <div className="flex items-center text-yellow-500 text-sm">
                      <i className="fas fa-star mr-1"></i>
                      {resource.rating}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-wpo-neutral-dark mb-2 line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{resource.pages}</span>
                    <span>{resource.downloadCount} descargas</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-wpo-primary text-white hover:bg-blue-700"
                    size="sm"
                  >
                    <i className="fas fa-download mr-2"></i>
                    Descargar Gratis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No encontramos recursos
              </h3>
              <p className="text-gray-500">
                Prueba con otros términos de búsqueda o selecciona una categoría diferente.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-wpo-primary to-wpo-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas Ayuda Implementando?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Todos estos recursos son gratuitos, pero si necesitas ayuda profesional 
              implementándolos, nuestro equipo está aquí para ayudarte.
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