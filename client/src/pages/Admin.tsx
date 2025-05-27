import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Users, BarChart3, Folder, MessageSquare, Settings } from 'lucide-react';

export default function Admin() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const adminCards = [
    {
      title: 'Artículos del Blog',
      description: 'Gestionar contenido del blog',
      icon: FileText,
      href: '/admin/blog',
      color: 'bg-blue-500'
    },
    {
      title: 'Casos de Éxito',
      description: 'Administrar casos de éxito',
      icon: BarChart3,
      href: '/admin/casos',
      color: 'bg-green-500'
    },
    {
      title: 'Recursos',
      description: 'Gestionar guías y recursos',
      icon: Folder,
      href: '/admin/recursos',
      color: 'bg-purple-500'
    },
    {
      title: 'Contactos',
      description: 'Ver mensajes de contacto',
      icon: MessageSquare,
      href: '/admin/contactos',
      color: 'bg-orange-500'
    },
    {
      title: 'Tests de Velocidad',
      description: 'Resultados de tests realizados',
      icon: BarChart3,
      href: '/admin/tests',
      color: 'bg-indigo-500'
    },
    {
      title: 'Configuración',
      description: 'Configuración del sitio',
      icon: Settings,
      href: '/admin/config',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Panel de Administración
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Gestiona el contenido y configuración de tu sitio web WPO
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.href} href={card.href}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {card.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Gestionar
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">
              Volver al Sitio Web
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}