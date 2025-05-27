import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { queryClient, apiRequest } from '@/lib/queryClient';
import { Plus, Edit, Trash2, ArrowLeft, TrendingUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

type CaseStudy = {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  beforeScore: number;
  afterScore: number;
  improvementPercent: number;
  published: boolean;
  createdAt: string;
};

export default function AdminCaseStudies() {
  useScrollToTop();
  
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    industry: '',
    challenge: '',
    solution: '',
    results: '',
    beforeScore: 0,
    afterScore: 0,
    published: false
  });

  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ['/api/case-studies'],
    queryFn: async () => {
      const res = await apiRequest('GET', '/api/case-studies');
      return await res.json();
    }
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest('POST', '/api/case-studies', data);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/case-studies'] });
      toast({ title: "Caso de éxito creado", description: "El caso de éxito se ha creado exitosamente" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Error", description: "No se pudo crear el caso de éxito", variant: "destructive" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: any) => {
      const res = await apiRequest('PUT', `/api/case-studies/${id}`, data);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/case-studies'] });
      toast({ title: "Caso actualizado", description: "El caso de éxito se ha actualizado exitosamente" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Error", description: "No se pudo actualizar el caso de éxito", variant: "destructive" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/case-studies/${id}`);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/case-studies'] });
      toast({ title: "Caso eliminado", description: "El caso de éxito se ha eliminado exitosamente" });
    },
    onError: () => {
      toast({ title: "Error", description: "No se pudo eliminar el caso de éxito", variant: "destructive" });
    }
  });

  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      industry: '',
      challenge: '',
      solution: '',
      results: '',
      beforeScore: 0,
      afterScore: 0,
      published: false
    });
    setEditingCase(null);
    setIsDialogOpen(false);
  };

  const calculateImprovement = (before: number, after: number) => {
    if (before === 0) return 0;
    return Math.round(((after - before) / before) * 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.company || !formData.challenge || !formData.solution) {
      toast({ title: "Error", description: "Todos los campos principales son obligatorios", variant: "destructive" });
      return;
    }

    const submitData = {
      ...formData,
      improvementPercent: calculateImprovement(formData.beforeScore, formData.afterScore)
    };

    if (editingCase) {
      updateMutation.mutate({ id: editingCase.id, ...submitData });
    } else {
      createMutation.mutate(submitData);
    }
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingCase(caseStudy);
    setFormData({
      title: caseStudy.title,
      company: caseStudy.company,
      industry: caseStudy.industry,
      challenge: caseStudy.challenge,
      solution: caseStudy.solution,
      results: caseStudy.results,
      beforeScore: caseStudy.beforeScore,
      afterScore: caseStudy.afterScore,
      published: caseStudy.published
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (caseStudy: CaseStudy) => {
    if (confirm('¿Estás seguro de que quieres eliminar este caso de éxito?')) {
      deleteMutation.mutate(caseStudy.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/admin">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Panel
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Casos de Éxito
            </h1>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => resetForm()}>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Caso
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingCase ? 'Editar Caso de Éxito' : 'Crear Nuevo Caso de Éxito'}
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título del Caso *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Optimización de E-commerce Fashion"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      placeholder="TechCorp S.L."
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industria</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                    placeholder="E-commerce, Tecnología, Salud, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenge">Desafío *</Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge}
                    onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                    placeholder="Describe el problema o desafío que tenía el cliente"
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solution">Solución *</Label>
                  <Textarea
                    id="solution"
                    value={formData.solution}
                    onChange={(e) => setFormData(prev => ({ ...prev, solution: e.target.value }))}
                    placeholder="Describe la solución implementada"
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="results">Resultados</Label>
                  <Textarea
                    id="results"
                    value={formData.results}
                    onChange={(e) => setFormData(prev => ({ ...prev, results: e.target.value }))}
                    placeholder="Describe los resultados obtenidos"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="beforeScore">Puntuación Inicial</Label>
                    <Input
                      id="beforeScore"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.beforeScore}
                      onChange={(e) => setFormData(prev => ({ ...prev, beforeScore: parseInt(e.target.value) || 0 }))}
                      placeholder="45"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="afterScore">Puntuación Final</Label>
                    <Input
                      id="afterScore"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.afterScore}
                      onChange={(e) => setFormData(prev => ({ ...prev, afterScore: parseInt(e.target.value) || 0 }))}
                      placeholder="87"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Mejora</Label>
                    <div className="flex items-center h-10 px-3 py-2 border rounded-md bg-gray-50">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-semibold text-green-600">
                        +{calculateImprovement(formData.beforeScore, formData.afterScore)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                    className="rounded"
                  />
                  <Label htmlFor="published">Publicar caso de éxito</Label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancelar
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={createMutation.isPending || updateMutation.isPending}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {editingCase ? 'Actualizar' : 'Crear'} Caso
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Cargando casos de éxito...</p>
            </div>
          ) : caseStudies?.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <h3 className="text-lg font-semibold mb-2">No hay casos de éxito</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comienza agregando tus primeros casos de éxito
                </p>
                <Button onClick={() => setIsDialogOpen(true)} className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Primer Caso
                </Button>
              </CardContent>
            </Card>
          ) : (
            caseStudies?.map((caseStudy: CaseStudy) => (
              <Card key={caseStudy.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                        <Badge variant={caseStudy.published ? "default" : "secondary"}>
                          {caseStudy.published ? "Publicado" : "Borrador"}
                        </Badge>
                      </div>
                      <p className="text-blue-600 font-semibold">{caseStudy.company}</p>
                      {caseStudy.industry && (
                        <p className="text-gray-500 text-sm">{caseStudy.industry}</p>
                      )}
                      <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                        {caseStudy.challenge}
                      </p>
                      
                      <div className="flex items-center space-x-6 mt-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-red-500">{caseStudy.beforeScore}</p>
                          <p className="text-xs text-gray-500">Inicial</p>
                        </div>
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-500">{caseStudy.afterScore}</p>
                          <p className="text-xs text-gray-500">Final</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">+{caseStudy.improvementPercent}%</p>
                          <p className="text-xs text-gray-500">Mejora</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(caseStudy)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDelete(caseStudy)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}