export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-wpo-neutral-dark text-white py-16">
      <div className="container-responsive">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <i className="fas fa-tachometer-alt text-2xl text-wpo-primary"></i>
              <span className="text-2xl font-bold">WPO Expert</span>
            </div>
            <p className="text-gray-300 mb-6">
              Especialistas en optimización de velocidad web y mejora de Core Web Vitals. 
              Ayudamos a empresas a acelerar su crecimiento digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-wpo-primary transition-colors text-left"
                >
                  Auditoría WPO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-wpo-primary transition-colors text-left"
                >
                  Optimización Técnica
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                  Core Web Vitals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                  Monitoreo Continuo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                  Consultoría SEO
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                  Blog WPO
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('recursos')}
                  className="text-gray-300 hover:text-wpo-primary transition-colors text-left"
                >
                  Guías Gratuitas
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                  Test de Velocidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                  Centro de Ayuda
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <i className="fas fa-envelope mr-3 text-wpo-primary"></i>
                <a href="mailto:hola@wpoexpert.es" className="hover:text-wpo-primary transition-colors">
                  hola@wpoexpert.es
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <i className="fas fa-phone mr-3 text-wpo-primary"></i>
                <a href="tel:+34900123456" className="hover:text-wpo-primary transition-colors">
                  +34 900 123 456
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt mr-3 text-wpo-primary"></i>
                Madrid, España
              </li>
              <li className="flex items-center text-gray-300">
                <i className="fas fa-clock mr-3 text-wpo-primary"></i>
                Lun - Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 WPO Expert. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-300 hover:text-wpo-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
