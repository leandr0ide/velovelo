import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Webinars() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: upcomingRef, isVisible: upcomingVisible } = useScrollAnimation();
  const { ref: recordedRef, isVisible: recordedVisible } = useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contacto';
  };

  const upcomingWebinars = [
    {
      title: 'Masterclass: Core Web Vitals Avanzado 2024',
      date: '25 Febrero 2024',
      time: '16:00 CET',
      duration: '90 minutos',
      instructor: 'Carlos Rodríguez, Senior WPO Engineer',
      level: 'Intermedio - Avanzado',
      topics: [
        'Optimización avanzada de LCP',
        'Técnicas FID para aplicaciones complejas', 
        'CLS: Casos difíciles y soluciones',
        'Herramientas de monitoreo en tiempo real'
      ],
      attendees: '127 registrados',
      price: 'Gratuito',
      featured: true
    },
    {
      title: 'JavaScript Performance: De 0 a Expert',
      date: '8 Marzo 2024',
      time: '17:00 CET',
      duration: '120 minutos',
      instructor: 'María González, Frontend Architect',
      level: 'Todos los niveles',
      topics: [
        'Fundamentos de JS performance',
        'Code splitting y tree shaking',
        'Lazy loading de componentes',
        'Performance API y métricas'
      ],
      attendees: '89 registrados',
      price: 'Gratuito',
      featured: false
    },
    {
      title: 'E-commerce WPO: Casos de Éxito Reales',
      date: '15 Marzo 2024',
      time: '16:30 CET',
      duration: '75 minutos',
      instructor: 'David Ruiz, E-commerce Consultant',
      level: 'Intermedio',
      topics: [
        'Optimización de product pages',
        'Checkout flow performance',
        'Mobile commerce optimization',
        'ROI de las mejoras WPO'
      ],
      attendees: '156 registrados',
      price: 'Gratuito',
      featured: false
    }
  ];

  const recordedWebinars = [
    {
      title: 'Introducción a WPO: Primeros Pasos',
      date: 'Enero 2024',
      duration: '60 minutos',
      views: '2,347 visualizaciones',
      rating: '4.8/5',
      level: 'Principiante',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225'
    },
    {
      title: 'Optimización de Imágenes para Web',
      date: 'Diciembre 2023',
      duration: '45 minutos',
      views: '1,892 visualizaciones',
      rating: '4.9/5',
      level: 'Intermedio',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225'
    },
    {
      title: 'CDN y Performance Global',
      date: 'Noviembre 2023',
      duration: '55 minutos',
      views: '1,456 visualizaciones',
      rating: '4.7/5',
      level: 'Avanzado',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225'
    },
    {
      title: 'Mobile-First Performance',
      date: 'Octubre 2023',
      duration: '70 minutos',
      views: '3,124 visualizaciones',
      rating: '4.9/5',
      level: 'Intermedio',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225'
    },
    {
      title: 'Lazy Loading Avanzado',
      date: 'Septiembre 2023',
      duration: '50 minutos',
      views: '2,678 visualizaciones',
      rating: '4.8/5',
      level: 'Avanzado',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225'
    },
    {
      title: 'Métricas que Realmente Importan',
      date: 'Agosto 2023',
      duration: '65 minutos',
      views: '1,983 visualizaciones',
      rating: '4.6/5',
      level: 'Todos los niveles',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225'
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
              Webinars WPO
              <span className="text-yellow-300"> Expert</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Formación práctica y actualizada sobre optimización web. Aprende de expertos 
              con experiencia real en proyectos de alto tráfico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Registrarse Próximo
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-play mr-2"></i>
                Ver Grabaciones
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">24+</div>
                <div className="text-sm text-blue-100">Webinars Realizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">2.5K+</div>
                <div className="text-sm text-blue-100">Asistentes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">4.8★</div>
                <div className="text-sm text-blue-100">Valoración Media</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wpo-secondary mb-2">100%</div>
                <div className="text-sm text-blue-100">Gratuitos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div 
            ref={upcomingRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              upcomingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Próximos Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sesiones en vivo con expertos de la industria. Incluyen tiempo para preguntas 
              y casos prácticos que puedes aplicar inmediatamente.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                webinar.featured ? 'border-2 border-wpo-primary bg-wpo-primary/5' : 'bg-wpo-neutral-light'
              }`}>
                <CardContent className="p-8">
                  {webinar.featured && (
                    <div className="text-center mb-6">
                      <span className="bg-wpo-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                        🔥 WEBINAR DESTACADO
                      </span>
                    </div>
                  )}
                  
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {webinar.level}
                        </span>
                        <span className="text-gray-500 text-sm">{webinar.duration}</span>
                        <span className="text-gray-500 text-sm">{webinar.attendees}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-3">
                        {webinar.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        <i className="fas fa-user-tie mr-2 text-wpo-primary"></i>
                        {webinar.instructor}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-wpo-neutral-dark mb-2">Contenido del webinar:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {webinar.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                              <i className="fas fa-check text-wpo-secondary mr-2"></i>
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-right">
                      <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                        <div className="text-2xl font-bold text-wpo-primary mb-2">{webinar.price}</div>
                        <div className="text-lg font-semibold text-wpo-neutral-dark mb-1">{webinar.date}</div>
                        <div className="text-gray-600 mb-4">{webinar.time}</div>
                        
                        <Button 
                          className="w-full bg-wpo-primary text-white hover:bg-blue-700 mb-3"
                        >
                          <i className="fas fa-calendar-plus mr-2"></i>
                          Reservar Plaza
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full text-wpo-primary border-wpo-primary hover:bg-wpo-primary hover:text-white"
                        >
                          <i className="fas fa-calendar mr-2"></i>
                          Añadir al Calendario
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Webinars */}
      <section className="section-padding bg-wpo-neutral-light">
        <div className="container-responsive">
          <div 
            ref={recordedRef as any}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              recordedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              Webinars Grabados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accede a nuestra biblioteca completa de webinars anteriores. 
              Contenido siempre disponible para aprender a tu ritmo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recordedWebinars.map((webinar, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={webinar.thumbnail}
                    alt={`Thumbnail del webinar: ${webinar.title}`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <i className="fas fa-play text-2xl text-wpo-primary"></i>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {webinar.duration}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-wpo-secondary bg-wpo-secondary/10 px-3 py-1 rounded-full">
                      {webinar.level}
                    </span>
                    <div className="flex items-center text-yellow-500 text-sm">
                      <i className="fas fa-star mr-1"></i>
                      {webinar.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-wpo-neutral-dark mb-2 line-clamp-2">
                    {webinar.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{webinar.date}</span>
                    <span>{webinar.views}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-wpo-primary border-wpo-primary hover:bg-wpo-primary hover:text-white"
                  >
                    <i className="fas fa-play mr-2"></i>
                    Ver Webinar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-wpo-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors min-h-[60px]"
            >
              <i className="fas fa-video mr-2"></i>
              Ver Todos los Webinars
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-wpo-primary to-wpo-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿No te Quieres Perder Ningún Webinar?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe notificaciones de nuevos webinars, 
              además de contenido exclusivo sobre WPO.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-envelope mr-2"></i>
                Suscribirme Ahora
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-bell mr-2"></i>
                Recordatorios por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}