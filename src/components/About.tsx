export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left column - Text */}
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              О нас
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.15]" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Философия совершенства
            </h2>
            <p 
              className="text-lg text-gray-600 mb-6 leading-relaxed" 
              style={{ fontFamily: 'var(--font-serif-alt)' }}
            >
              В нашем салоне мы создаём не просто причёски и макияж — мы создаём искусство. 
              Каждая процедура — это индивидуальный подход, основанный на глубоком понимании 
              красоты и стиля.
            </p>
            <p 
              className="text-lg text-gray-600 leading-relaxed" 
              style={{ fontFamily: 'var(--font-serif-alt)' }}
            >
              Наши мастера прошли обучение в лучших академиях мира и постоянно 
              совершенствуют своё мастерство, чтобы предложить вам безупречный сервис.
            </p>
          </div>

          {/* Right column - Stats */}
          <div className="space-y-16">
            <div className="border-l border-gray-200 pl-8">
              <div 
                className="text-6xl mb-2" 
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}
              >
                15
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-gray-500">
                Лет опыта
              </div>
            </div>

            <div className="border-l border-gray-200 pl-8">
              <div 
                className="text-6xl mb-2" 
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}
              >
                12
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-gray-500">
                Мастеров экспертов
              </div>
            </div>

            <div className="border-l border-gray-200 pl-8">
              <div 
                className="text-6xl mb-2" 
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}
              >
                2000+
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-gray-500">
                Довольных клиентов
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}