import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { apiRequest } from '@/lib/queryClient';

const features = [
  {
    icon: 'fas fa-chart-line',
    title: 'Análisis Técnico Completo',
    description: 'Auditoría exhaustiva de rendimiento, Core Web Vitals y oportunidades de mejora',
    colorClass: 'bg-wpo-primary/10 text-wpo-primary'
  },
  {
    icon: 'fas fa-target',
    title: 'Plan de Acción Personalizado',
    description: 'Roadmap prioritizado con estimaciones de impacto y tiempo de implementación',
    colorClass: 'bg-wpo-secondary/10 text-wpo-secondary'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Consultoría Estratégica',
    description: '45 minutos de consultoría personalizada para resolver tus dudas específicas',
    colorClass: 'bg-wpo-accent/10 text-wpo-accent'
  }
];

export function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      privacyConsent: false
    }
  });

  const privacyConsent = watch('privacyConsent');

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "¡Solicitud enviada!",
          description: "Hemos recibido tu solicitud. Te contactaremos en las próximas 24 horas.",
        });
        reset();
      }
    },
    onError: () => {
      toast({
        title: "Error al enviar",
        description: "No pudimos procesar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`transition-all duration-600 ease-out ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wpo-neutral-dark mb-6">
              ¿Listo para Acelerar tu Web?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Recibe un análisis detallado de tu sitio web y descubre oportunidades 
              de mejora específicas para tu negocio.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${feature.colorClass}`}>
                    <i className={`${feature.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wpo-neutral-dark mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={rightRef}
            className={`transition-all duration-600 ease-out ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="bg-wpo-neutral-light rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-2">
                    Análisis Gratuito de tu Web
                  </h3>
                  <p className="text-gray-600">
                    Completa el formulario y recibe tu reporte en 24 horas
                  </p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre *
                      </Label>
                      <Input
                        id="firstName"
                        {...register('firstName')}
                        placeholder="Tu nombre"
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Apellidos *
                      </Label>
                      <Input
                        id="lastName"
                        {...register('lastName')}
                        placeholder="Tus apellidos"
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Empresarial *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="tu-email@empresa.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Usaremos este email para enviarte el reporte detallado
                    </p>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      URL de tu Sitio Web *
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      {...register('website')}
                      placeholder="https://tu-sitio-web.com"
                      className={errors.website ? 'border-red-500' : ''}
                    />
                    {errors.website && (
                      <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      {...register('company')}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Cuál es tu principal objetivo?
                    </Label>
                    <Select onValueChange={(value) => setValue('objective', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conversions">Aumentar conversiones</SelectItem>
                        <SelectItem value="seo">Mejorar posicionamiento SEO</SelectItem>
                        <SelectItem value="user-experience">Optimizar experiencia de usuario</SelectItem>
                        <SelectItem value="speed">Reducir tiempo de carga</SelectItem>
                        <SelectItem value="other">Otro objetivo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                      Comentarios Adicionales
                    </Label>
                    <Textarea
                      id="comments"
                      {...register('comments')}
                      rows={3}
                      placeholder="Cuéntanos más detalles sobre tu proyecto o necesidades específicas..."
                      className="resize-none"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy-consent"
                      checked={privacyConsent}
                      onCheckedChange={(checked) => setValue('privacyConsent', checked as boolean)}
                      className={errors.privacyConsent ? 'border-red-500' : ''}
                    />
                    <Label htmlFor="privacy-consent" className="text-sm text-gray-600 leading-relaxed">
                      Acepto la <a href="#" className="text-wpo-primary hover:underline">Política de Privacidad</a> 
                      {' '}y autorizo el tratamiento de mis datos para recibir información comercial. *
                    </Label>
                  </div>
                  {errors.privacyConsent && (
                    <p className="text-red-500 text-xs">{errors.privacyConsent.message}</p>
                  )}
                  
                  <Button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-wpo-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors min-h-[60px]"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Solicitar Análisis Gratuito
                      </>
                    )}
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      <i className="fas fa-shield-alt mr-1"></i>
                      Tus datos están protegidos. No compartimos información con terceros.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
