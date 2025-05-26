import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    rating: 5,
    text: 'La optimización WPO ha sido un game-changer para nuestro e-commerce. Hemos visto un aumento del 67% en conversiones y nuestros clientes destacan la velocidad del sitio.',
    author: 'Carlos Mendoza',
    position: 'Director Marketing, TechCommerce',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100',
    metric: { label: 'Mejora en velocidad', value: '-73% tiempo de carga' }
  },
  {
    rating: 5,
    text: 'Increíble trabajo. Nuestro portal ahora carga en menos de 2 segundos y hemos reducido la tasa de rebote en un 54%. La inversión se pagó sola.',
    author: 'María González',
    position: 'CEO, InnovateSoft',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100',
    metric: { label: 'Lighthouse Score', value: '94/100' }
  },
  {
    rating: 5,
    text: 'Profesionales excepcionales. No solo mejoraron la velocidad, sino que nos educaron sobre las mejores prácticas. Servicio integral de calidad.',
    author: 'David Ruiz',
    position: 'Fundador, StartupHub',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100',
    metric: { label: 'ROI en 3 meses', value: '+234%' }
  }
];

export function Testimonials() {
  const { setRef, visibleItems } = useScrollAnimationMultiple(testimonials.length + 1);

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <div 
          ref={setRef(0)}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de empresas que han transformado su negocio con nuestros servicios WPO
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              ref={setRef(index + 1)}
              className={`bg-wpo-neutral-light rounded-xl shadow-lg transition-all duration-600 ease-out ${
                visibleItems[index + 1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.author}, ${testimonial.position}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-wpo-neutral-dark">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">
                    {testimonial.metric.label}
                  </div>
                  <div className="text-lg font-bold text-wpo-secondary">
                    {testimonial.metric.value}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
