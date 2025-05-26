import { Button } from '@/components/ui/button';
import { SpeedTest } from './SpeedTest';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Hero() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 gradient-bg text-white overflow-hidden">
      <div className="container-responsive">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`transition-all duration-600 ease-out ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Acelera tu Web y
              <span className="text-yellow-300"> Multiplica tus Conversiones</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100">
              Optimización WPO profesional que mejora tu Core Web Vitals, 
              posicionamiento SEO y experiencia de usuario.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[60px]"
              >
                <i className="fas fa-rocket mr-2"></i>
                Análisis Gratuito
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors min-h-[60px]"
              >
                <i className="fas fa-play mr-2"></i>
                Ver Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-wpo-secondary mr-2"></i>
                <span>Lighthouse +90</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-wpo-secondary mr-2"></i>
                <span>LCP &lt; 2.5s</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-wpo-secondary mr-2"></i>
                <span>FID &lt; 100ms</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={rightRef}
            className={`transition-all duration-600 ease-out ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <SpeedTest />
          </div>
        </div>
      </div>
    </section>
  );
}
