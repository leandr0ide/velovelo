import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container-responsive">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <i className="fas fa-tachometer-alt text-2xl text-wpo-primary"></i>
            <span className="text-xl sm:text-2xl font-bold text-wpo-neutral-dark">WPO Expert</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-wpo-text-primary hover:text-wpo-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('casos-exito')}
              className="text-wpo-text-primary hover:text-wpo-primary transition-colors"
            >
              Casos de Éxito
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-wpo-text-primary hover:text-wpo-primary transition-colors"
            >
              Recursos
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-wpo-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Análisis Gratuito
            </Button>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-left text-wpo-text-primary hover:text-wpo-primary transition-colors py-2"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => scrollToSection('casos-exito')}
                  className="text-left text-wpo-text-primary hover:text-wpo-primary transition-colors py-2"
                >
                  Casos de Éxito
                </button>
                <button 
                  onClick={() => scrollToSection('recursos')}
                  className="text-left text-wpo-text-primary hover:text-wpo-primary transition-colors py-2"
                >
                  Recursos
                </button>
                <Button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-wpo-primary text-white mt-4"
                >
                  Análisis Gratuito
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
