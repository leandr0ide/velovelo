import { useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';

const stats = [
  { value: '+150', label: 'Webs Optimizadas', description: 'En el último año' },
  { value: '89%', label: 'Mejora Promedio', description: 'En velocidad de carga' },
  { value: '2.1s', label: 'LCP Promedio', description: 'Después de optimización' },
  { value: '+45%', label: 'Conversiones', description: 'Incremento promedio' }
];

export function Stats() {
  const { setRef, visibleItems } = useScrollAnimationMultiple(stats.length);

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              ref={setRef(index)}
              className={`text-center transition-all duration-600 ease-out ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`text-4xl sm:text-5xl font-bold mb-2 ${
                index % 2 === 0 ? 'text-wpo-primary' : 'text-wpo-secondary'
              }`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-wpo-neutral-dark mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
