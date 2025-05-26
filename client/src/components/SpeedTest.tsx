import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import type { SpeedTestResult } from '@shared/schema';

interface SpeedTestResponse {
  success: boolean;
  data: SpeedTestResult;
  recommendations: string[];
}

export function SpeedTest() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState<SpeedTestResult | null>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const { toast } = useToast();

  const speedTestMutation = useMutation({
    mutationFn: async (testUrl: string) => {
      const response = await apiRequest('POST', '/api/speed-test', { url: testUrl });
      return response.json() as Promise<SpeedTestResponse>;
    },
    onSuccess: (data) => {
      if (data.success) {
        setResults(data.data);
        setRecommendations(data.recommendations);
        toast({
          title: "Análisis completado",
          description: "Hemos analizado tu sitio web. ¡Revisa los resultados!",
        });
      }
    },
    onError: () => {
      toast({
        title: "Error en el análisis",
        description: "No pudimos analizar tu sitio web. Verifica la URL e inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({
        title: "URL requerida",
        description: "Por favor, introduce una URL válida",
        variant: "destructive",
      });
      return;
    }
    speedTestMutation.mutate(url);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excelente';
    if (score >= 50) return 'Necesita mejoras';
    return 'Crítico';
  };

  return (
    <Card className="bg-white rounded-2xl shadow-2xl">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-wpo-neutral-dark mb-6">
          <i className="fas fa-speedometer text-wpo-primary mr-2"></i>
          Test de Velocidad Instantáneo
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="speed-test-url" className="block text-sm font-medium text-wpo-text-primary mb-2">
              URL de tu sitio web
            </Label>
            <Input
              id="speed-test-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://tu-sitio-web.com"
              className="w-full"
              required
            />
          </div>
          
          <Button 
            type="submit"
            disabled={speedTestMutation.isPending}
            className="w-full bg-wpo-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors min-h-[60px]"
          >
            {speedTestMutation.isPending ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Analizando...
              </>
            ) : (
              <>
                <i className="fas fa-chart-line mr-2"></i>
                Analizar Velocidad
              </>
            )}
          </Button>
        </form>
        
        {results && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-wpo-text-primary">Puntuación Lighthouse</span>
              <span className={`text-2xl font-bold ${getScoreColor(results.lighthouseScore || 0)}`}>
                {results.lighthouseScore}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className={`h-2 rounded-full ${results.lighthouseScore && results.lighthouseScore >= 90 ? 'bg-green-500' : 
                  results.lighthouseScore && results.lighthouseScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${results.lighthouseScore || 0}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Estado: {getScoreLabel(results.lighthouseScore || 0)}
            </p>
            
            <div className="grid grid-cols-3 gap-2 text-xs mb-4">
              <div className="text-center">
                <div className="font-semibold">LCP</div>
                <div className="text-gray-600">{results.lcp}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">FID</div>
                <div className="text-gray-600">{results.fid}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">CLS</div>
                <div className="text-gray-600">{results.cls}</div>
              </div>
            </div>

            {recommendations.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-sm mb-2">Recomendaciones:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {recommendations.slice(0, 3).map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-2 mt-0.5 text-xs"></i>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
