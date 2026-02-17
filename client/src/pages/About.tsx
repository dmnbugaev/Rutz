import { Award, Heart, Star, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach((el) => observer.observe(el));

    // Parallax effect on images
    const handleScroll = () => {
      imageRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
          if (scrollPercent > 0 && scrollPercent < 1) {
            const translateY = scrollPercent * 50 - 25;
            ref.style.transform = `translateY(${translateY}px)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 overflow-x-hidden">
      {/* Founder & Philosophy */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 
            data-animate="true"
            className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
          >
            Философия
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 md:mb-32">
          <div 
            ref={(el) => (imageRefs.current[0] = el)}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden group"
            data-animate="true"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <img
              src=""
              alt=""
              className="w-full h-full object-cover grayscale-luxury transition-all duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div data-animate="true" className="opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 sm:mb-4 animate-pulse-subtle">Основатель</p>
              <h3 className="serif text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Дарья</h3>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                Арт-директор, колорист и идейный вдохновитель
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
              {[
                '«Я всегда верила, что красота — это не просто внешний облик, это состояние души, гармония внутреннего и внешнего мира. Когда я создавала RUTZ, моей главной целью было создать пространство, где каждый человек мог бы почувствовать себя по-настоящему особенным.»',
                '«Наша философия основана на трех принципах: уважение к индивидуальности, стремление к совершенству и вера в силу вневременной элегантности. Мы не следуем слепо за модными трендами — мы создаем образы, которые подчеркивают уникальность каждого клиента и остаются актуальными годами.»',
                '«RUTZ — это не просто салон красоты. Это философия жизни, где красота встречается с искусством, а забота о себе становится ритуалом наслаждения и самопознания.»'
              ].map((text, index) => (
                <p 
                  key={index}
                  data-animate="true"
                  className="opacity-0 translate-y-8 transition-all duration-700"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Extended Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
            <h3 
              data-animate="true"
              className="serif text-2xl sm:text-3xl md:text-4xl text-black dark:text-white mb-6 sm:mb-8 opacity-0 translate-y-8 transition-all duration-700"
            >
              Наш подход
            </h3>
            {[
              'В RUTZ мы верим, что настоящая красота начинается с понимания себя. Каждый наш мастер — это не просто профессионал своего дела, это художник, который чувствует и понимает уникальность каждого клиента.',
              'Мы создали пространство, где архитектурный минимализм встречается с тактильной роскошью. Каждая деталь интерьера, каждый материал выбраны с заботой о вашем комфорте и эстетическом наслаждении.',
              'Наша работа — это не просто выполнение процедуры. Это создание опыта, который остается с вами надолго. Мы используем только премиальные продукты мировых брендов, потому что качество для нас — не компромисс, а стандарт.'
            ].map((text, index) => (
              <p 
                key={index}
                data-animate="true"
                className="opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div 
            ref={(el) => (imageRefs.current[1] = el)}
            className="relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden group"
            data-animate="true"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <img
              src=""
              alt=""
              className="w-full h-full object-cover grayscale-luxury transition-all duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 mb-12 sm:mb-16 md:mb-24 border-t divider-thin relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent dark:via-gray-800/30 animate-gradient-x" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 
              data-animate="true"
              className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-1000"
            >
              Наши ценности
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {[
              { icon: Award, title: 'Мастерство', desc: 'Непрерывное обучение и совершенствование техник' },
              { icon: Heart, title: 'Забота', desc: 'Индивидуальный подход и внимание к каждой детали' },
              { icon: Star, title: 'Качество', desc: 'Только премиальные материалы и косметика' },
              { icon: Sparkles, title: 'Эстетика', desc: 'Создание вневременной красоты и гармонии' }
            ].map((item, index) => (
              <div
                key={index}
                data-animate="true"
                className="text-center space-y-3 sm:space-y-4 group opacity-0 translate-y-8 transition-all duration-700 hover:scale-105"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block">
                  <item.icon 
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110" 
                    strokeWidth={1} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                </div>
                <h3 className="text-xs uppercase tracking-widest mb-2 group-hover:tracking-wider transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transform group-hover:-translate-y-1 transition-all duration-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interiors Gallery */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 
            data-animate="true"
            className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-1000"
          >
            Интерьеры салона
          </h2>
          <p 
            data-animate="true"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 opacity-0 translate-y-8 transition-all duration-1000 delay-200"
          >
            Пространство, созданное для вашего комфорта и вдохновения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index + 2] = el)}
              className={`relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden group ${
                index === 2 ? 'md:col-span-2' : ''
              }`}
              data-animate="true"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src=""
                alt=""
                className="w-full h-full object-cover grayscale-luxury transition-all duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] z-20">
                <p className="text-white text-sm uppercase tracking-widest">
                  Интерьер {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 8s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}