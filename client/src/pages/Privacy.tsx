import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';

export function Privacy() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer для анимации появления
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach((el) => observer.observe(el));

    // Прогресс-бар при скролле
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      if (progressRef.current) {
        progressRef.current.style.width = scrolled + '%';
      }

      // Параллакс эффект для секций
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
          if (scrollPercent > 0 && scrollPercent < 1) {
            const translateY = scrollPercent * 20 - 10;
            const rotateX = scrollPercent * 2 - 1;
            ref.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateY(${translateY}px)`;
          }
        }
      });
    };

    // Mouse move эффект для хедера
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sections = [
    {
      icon: Shield,
      title: '1. Общие положения',
      content: [
        'Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта RUTZ (далее — «Салон»).',
        'Используя наш сайт, вы соглашаетесь с условиями данной Политики конфиденциальности.'
      ],
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: FileText,
      title: '2. Сбор персональных данных',
      content: [
        'Мы собираем следующие категории персональных данных:',
        ['Имя и контактная информация (телефон, email)',
         'Информация о записях и посещениях салона',
         'Данные о предпочтениях и истории обслуживания',
         'Технические данные (IP-адрес, cookies, данные браузера)']
      ],
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      icon: Eye,
      title: '3. Цели обработки данных',
      content: [
        'Мы используем ваши персональные данные для:',
        ['Предоставления услуг и выполнения обязательств перед клиентами',
         'Обработки заявок и бронирования услуг',
         'Информирования о новых услугах и специальных предложениях',
         'Улучшения качества обслуживания и персонализации опыта',
         'Анализа посещаемости и функционирования сайта']
      ],
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      icon: Lock,
      title: '4. Ваши права',
      content: [
        'Вы имеете право:',
        ['Получать информацию о хранящихся у нас данных',
         'Требовать исправления неточных данных',
         'Требовать удаления своих персональных данных',
         'Отозвать согласие на обработку данных',
         'Подать жалобу в надзорный орган']
      ],
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Mail,
      title: '5. Контактная информация',
      content: [
        'По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:',
        {
          phone: '+7 (983) 396-22-44',
          address: 'Барнаул, ЖК Питер, Павловский тракт, 162'
        }
      ],
      gradient: 'from-amber-500/20 to-yellow-500/20'
    }
  ];

  return (
    <div className="min-h-screen pt-32 animate-fade-in overflow-x-hidden">
      {/* Прогресс-бар чтения */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>

      {/* Hero с анимированным фоном */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 md:mb-24 text-center relative">
        {/* Анимированные градиентные сферы */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-gray-400/10 to-gray-600/10 rounded-full blur-3xl animate-float"
            style={{ 
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              top: '10%',
              left: '20%'
            }} 
          />
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-gray-600/10 to-gray-800/10 rounded-full blur-3xl animate-float-delayed"
            style={{ 
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              bottom: '10%',
              right: '20%'
            }} 
          />
        </div>

        {/* Иконка-щит с анимацией */}
        <div className="relative inline-block mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 animate-pulse-slow" />
          <Shield 
            className="w-20 h-20 mx-auto text-gray-700 dark:text-gray-300 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" 
            strokeWidth={1} 
          />
        </div>

        <h1 
          data-animate="true"
          className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 tracking-[0.03em] text-primary opacity-0 translate-y-8 transition-all duration-1000"
        >
          Политика конфиденциальности
        </h1>
        
        <p 
          data-animate="true"
          className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed px-4 opacity-0 translate-y-8 transition-all duration-1000 delay-300"
        >
          Защита ваших персональных данных — наш приоритет
        </p>

        {/* Анимированная линия под заголовком */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-expand-line" />
      </section>

      {/* Навигация по разделам */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => {
                sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-4 py-2 text-xs uppercase tracking-widest overflow-hidden"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <span className="relative z-10 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-100">
                Раздел {index + 1}
              </span>
              <span className={`absolute inset-0 bg-gradient-to-r ${section.gradient} translate-y-full group-hover:translate-y-0 transition-transform duration-500`} />
            </button>
          ))}
        </div>
      </section>

      {/* Content с карточками */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 mb-16 md:mb-32">
        <div className="space-y-8 md:space-y-12 text-secondary leading-relaxed">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="group relative"
                data-animate="true"
                onMouseEnter={() => setActiveSection(index)}
                onMouseLeave={() => setActiveSection(null)}
              >
                {/* Фоновый градиент с анимацией */}
                <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />
                
                {/* Основная карточка */}
                <div className="relative border border-border p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl">
                  
                  {/* Декоративный элемент угла */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gray-300 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gray-300 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  {/* Иконка и заголовок */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                      <Icon 
                        className={`w-8 h-8 transition-all duration-700 ${
                          activeSection === index ? 'scale-110 rotate-12' : ''
                        }`}
                        strokeWidth={1} 
                      />
                    </div>
                    <h2 className="serif text-2xl sm:text-3xl text-primary tracking-[0.02em]">
                      {section.title}
                    </h2>
                  </div>

                  {/* Контент с анимацией */}
                  <div className="space-y-4">
                    {section.content.map((item, i) => {
                      if (typeof item === 'string') {
                        return (
                          <p 
                            key={i}
                            className="transform transition-all duration-500 hover:translate-x-2"
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            {item}
                          </p>
                        );
                      } else if (Array.isArray(item)) {
                        return (
                          <ul key={i} className="list-none space-y-3">
                            {item.map((listItem, j) => (
                              <li 
                                key={j}
                                className="flex items-start gap-3 transform transition-all duration-500 hover:translate-x-2"
                                style={{ transitionDelay: `${j * 50}ms` }}
                              >
                                <CheckCircle className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      } else {
                        // Объект с контактной информацией
                        return (
                          <div key={i} className="space-y-3 pl-0">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transform transition-all duration-500 hover:scale-105">
                              <Phone className="w-4 h-4 text-gray-500" />
                              <span>{item.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transform transition-all duration-500 hover:scale-105">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span>{item.address}</span>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* Номер раздела с анимацией */}
                  <div className="absolute top-4 right-4 text-4xl font-serif text-gray-200 dark:text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-700 transform rotate-12 group-hover:rotate-0">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Footer с датой */}
          <div 
            className="pt-12 border-t divider-thin relative overflow-hidden"
            data-animate="true"
          >
            {/* Анимированный фон */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent dark:via-gray-800/50 animate-slide-bg" />
            
            <div className="relative flex items-center justify-center gap-2 text-sm text-tertiary">
              <Calendar className="w-4 h-4" />
              <span>Дата последнего обновления: 25 января 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Бейдж доверия */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 mb-16">
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          {[
            { icon: Lock, label: 'SSL шифрование' },
            { icon: Shield, label: 'Защита данных' },
            { icon: Eye, label: 'Конфиденциально' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full"
                data-animate="true"
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
        }

        @keyframes expand-line {
          0% { width: 0; opacity: 0; }
          50% { width: 6rem; opacity: 1; }
          100% { width: 0; opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes slide-bg {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }

        .animate-expand-line {
          animation: expand-line 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-slide-bg {
          animation: slide-bg 8s linear infinite;
        }

        .animate-shine {
          animation: shine 2s linear infinite;
        }

        /* Кастомный скроллбар */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}