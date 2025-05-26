import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Showcase() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <div 
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
            Resultados Reales, Medibles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mira cómo hemos transformado el rendimiento de sitios web similares al tuyo
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`transition-all duration-600 ease-out ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Tienda online optimizada mostrando productos electrónicos" 
              className="rounded-xl shadow-lg w-full h-auto"
              loading="lazy"
            />
          </div>
          
          <div 
            ref={rightRef}
            className={`transition-all duration-600 ease-out ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-6">
                E-commerce de Electrónicos
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-600 mb-2">ANTES</div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="text-3xl font-bold text-wpo-accent mb-1">4.8s</div>
                    <div className="text-sm text-gray-600">Tiempo de carga</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-600 mb-2">DESPUÉS</div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="text-3xl font-bold text-wpo-secondary mb-1">1.9s</div>
                    <div className="text-sm text-gray-600">Tiempo de carga</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Lighthouse Score</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-wpo-accent">32</span>
                    <i className="fas fa-arrow-right text-gray-400"></i>
                    <span className="text-wpo-secondary font-bold">94</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Conversiones</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-wpo-accent">2.1%</span>
                    <i className="fas fa-arrow-right text-gray-400"></i>
                    <span className="text-wpo-secondary font-bold">3.8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Ingresos Mensuales</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-wpo-accent">€24.5K</span>
                    <i className="fas fa-arrow-right text-gray-400"></i>
                    <span className="text-wpo-secondary font-bold">€41.2K</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-wpo-secondary/10 rounded-lg">
                <div className="text-lg font-bold text-wpo-secondary mb-1">+68% ROI</div>
                <div className="text-sm text-gray-600">
                  La inversión en WPO se recuperó en solo 2 meses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
