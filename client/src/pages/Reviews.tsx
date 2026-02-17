import { Star, Quote, Heart, Users, Calendar, Award, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useEffect, useRef, useState } from 'react';

interface Review {
  id: number;
  name: string;
  text: string;
  date: string;
  rating: number;
}

export function Reviews() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);
  const [visibleReviews, setVisibleReviews] = useState(9);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Анжелика Вислогузова',
      text: 'Хочу поблагодарить мастеров пространства красоты Rutz, Даша спасибо за отличное матирование волос. Всё прошло замечательно: внимательно выслушали пожелания; чётко поняли задачу; выполнили работу аккуратно и профессионально. Результат превзошёл ожидания — волосы выглядят именно так, как я хотела. Спасибо!',
      date: '9 января 2026',
      rating: 5,
    },
    {
      id: 2,
      name: 'Мария Ефимова',
      text: 'Хочу выразить огромную благодарность Дарье за профессионализм, за добродушный приём, за её работу! Мои волосы достаточно сухие, постоянно путаются и обламываются. Дарья сделала мне шикарный уход, сделала ровный срез, и теперь мои волосы выглядят отлично, к ним хочется прикасаться. На расчёске намного меньше волос, волосы сейчас выглядят в разы лучше, спасибо вам большое!',
      date: '24 декабря 2025',
      rating: 5,
    },
    {
      id: 3,
      name: 'Катерина Поцелуева',
      text: 'Если у вас длинные или сложные волосы, вам точно к Дарье! Она знает все нюансы, как ухаживать и как преобразить их, без навязывания лишних услуг. Её стрижка — подарок для моих волос. Это место, куда хочется возвращаться снова и снова за отличным настроением и безупречным образом! Обязательно вернусь.',
      date: '26 ноября 2025',
      rating: 5,
    },
    {
      id: 4,
      name: 'Виктория Анисимова',
      text: 'Около месяца назад я ходила в салон Rutz, раньше красилась дома, но решила, что лучше обратиться в салон. Остаюсь до сих пор под впечатлением. Всё было замечательно с самого начала, предложили кофе, чай или воду. Сделали очень красивое холодное окрашивание, до сих пор цвет не вымывается, либо это незаметно. На сегодняшний день волосы такие же тёмные и красивые.',
      date: '12 ноября 2025',
      rating: 5,
    },
    {
      id: 5,
      name: 'Юлия Речкунова',
      text: 'Благодарю мастера Дарью! Укладка за 25 минут! Держалась до конца вечера без всяких проблем, учитывая, что была влажная погода, и все замечательно.',
      date: '24 августа 2025',
      rating: 5,
    },
    {
      id: 6,
      name: 'Наталья Бокова',
      text: 'Попала к Даше по рекомендации более 3-х лет назад, и теперь я постоянный клиент. Делаем камуфлирование седины — хожу до 5 недель и не видно отросших корней, волосы после окрашивания живые и блестящие. Стрижка на короткие волосы — это космос. После посещения чувствуешь себя королевой. Сын уже год стрижется у Ксении и доволен. Рекомендую это место.',
      date: '27 июля 2025',
      rating: 5,
    },
    {
      id: 7,
      name: 'Алиса Золотарева',
      text: 'Добрый день! К Дарье я обратилась за стрижкой для себя и прической для дочери на выпускной в детский сад. Дарья быстро создала прическу ребенку и мгновенно поправила мою укладку. Прическа дочери отлично продержалась все мероприятие. Спасибо большое за индивидуальный подход и хорошо проделанную работу!',
      date: '14 июня 2025',
      rating: 5,
    },
    {
      id: 8,
      name: 'Зейнаб Заманова',
      text: 'Благодарим мастера Дарью за её профессионализм и за то, что она понимает, чего хочет клиент. Мы с семьей очень довольны результатом её работ. Rutz — это не просто салон красоты, а место, где ценят желание и время клиентов. Там вы получите не только идеальный образ, но и положительные эмоции от посещения. Рекомендуем для тех, кто хочет выглядеть стильно и идеально!',
      date: '26 мая 2025',
      rating: 5,
    },
    {
      id: 9,
      name: 'Светлана Звягинцева',
      text: 'Я уже год являюсь постоянным клиентом пространства Рутц. Благодарю Дарью за её профессионализм и доверяю полностью, она может создать твой шикарный образ! Я на 100% довольна своим окрашиванием. Атмосфера всегда уютная и приятная. И замечательный кофе с полезными конфетками.',
      date: '8 мая 2025',
      rating: 5,
    },
    {
      id: 10,
      name: 'Елена Спивак',
      text: 'Хочется поблагодарить мастера Дарью! В процессе работы объясняла каждый шаг стрижки, объясняла, как уложить потом самостоятельно. Сказать, что я довольна результатом — не сказать ничего, это точное попадание моих пожеланий и даже больше!!! Все девочки дружелюбны, подход к каждой клиентке. И я влюбилась в дизайн "Пространство RUTZ".',
      date: '5 апреля 2025',
      rating: 5,
    },
    {
      id: 11,
      name: 'Анастасия Чудова',
      text: 'Не первый раз посещаю данную студию, и всегда остаюсь максимально довольна работой мастера Дарьи! Качество моих стрижек всегда на высшем уровне. Красивая студия, уютный интерьер и дружелюбная, комфортная атмосфера, все стильно и современно. Приходя в это место, попадаешь к настоящим профессионалам, и понимаешь, что оно того стоит!',
      date: '2 апреля 2025',
      rating: 5,
    },
    {
      id: 12,
      name: 'Юлия Пономарева',
      text: 'Давно выбираю Дарью как специалиста по окрашиванию, только ей доверяю свою голову. Всегда сервис на уровне, внимательное отношение к пожеланиям и профессиональные рекомендации. У меня был сложный запрос — окрашивание седины, коей у меня более 70%. Дарья справилась на все 200%, я очень довольна результатом.',
      date: '15 марта 2025',
      rating: 5,
    },
    {
      id: 13,
      name: 'Ольга Тумакова',
      text: 'Регулярно посещаю данный салон. Дарья прекрасный мастер: всегда выслушает пожелания клиента и подскажет, что лучше сделать. Всегда подскажет, какие уходовые процедуры нужно делать после окрашивания и стрижки. Спасибо за профессионализм и внимание!',
      date: '16 февраля 2025',
      rating: 5,
    },
    {
      id: 14,
      name: 'Юлия Заматаева',
      text: 'Была на стрижке у Даши. Мастер профессионал, подстригла просто вау, не могу нарадоваться. Буду обязательно посещать это место снова и снова, тут комфортно, уютно, тепло и с любовью к каждому клиенту, это прям чувствуется. Спасибо, что вы есть.',
      date: '15 февраля 2025',
      rating: 5,
    },
    {
      id: 15,
      name: 'Анастасия Анастасия',
      text: 'Очень уютный салон, приятно возвращаться вновь и вновь. Регулярно хожу на окрашивание к Дарье. Дарья просто замечательный колорист, владеет разными техниками, следит за качеством волос, всегда подберет то, что подойдет именно тебе! Также оформляла тут брови у мастера Софии — все замечательно получилось.',
      date: '8 февраля 2025',
      rating: 5,
    },
    {
      id: 16,
      name: 'Татьяна Халина',
      text: 'Дарья, грамотный и профессиональный мастер. Делаю у нее сложное окрашивание и стрижку уже несколько лет. Кроме того, вся моя семья пользуется ее услугами. В салоне все уютно и стильно, всегда предложат чай или кофе. Рекомендую!!!',
      date: '4 декабря 2024',
      rating: 5,
    },
    {
      id: 17,
      name: 'Галина Шелест',
      text: 'Как всегда все супер на все 100 из 10! Не первый год хожу к мастеру Дарье, и всегда результат прекрасный. Все эксперименты с волосами доверяю, всегда получается даже лучше, чем представляю изначально. Однозначно советую!',
      date: '12 октября 2024',
      rating: 5,
    },
    {
      id: 18,
      name: 'Ксения Шантай',
      text: 'Я постоянный клиент мастера Ксении. Своей стрижкой всегда довольна на 100%. В этот раз она собирала меня на свадьбу, делала локоны. Я была в восторге от её работы, причёска продержалась всё мероприятие, и она сделала именно то, что я хотела. Однозначно рекомендую.',
      date: '23 сентября 2024',
      rating: 5,
    },
    {
      id: 19,
      name: 'Елена Журавлева',
      text: 'Прекрасный салон, вежливая и доброжелательная, мастер своего дела, Дарья. Настоящий профессионал! Хожу на окрашивание и стрижку уже много лет только сюда. Очень довольна и работой мастера и отношением.',
      date: '14 сентября 2024',
      rating: 5,
    },
    {
      id: 20,
      name: 'Олеся Ложечка',
      text: 'Делала стрижку, каре у Дарьи. Пришла с фотками из Pinterest, изначально хотела с челкой. Итог без челки, а стрижка, потому что подход индивидуальный. Атмосфера, процесс — отдельное удовольствие. Однозначно рекомендую.',
      date: '22 июля 2024',
      rating: 5,
    },
  ];

  const stats = [
    { icon: Star, value: '5.0', label: 'Средняя оценка', suffix: '' },
    { icon: Users, value: '100', label: 'Отзывов', suffix: '+' },
    { icon: Heart, value: '98', label: 'Возвращаются', suffix: '%' },
    { icon: Award, value: '12', label: 'Лет на рынке', suffix: '+' },
  ];

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

    // Параллакс эффект для карточек
    const handleScroll = () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
          if (scrollPercent > 0 && scrollPercent < 1) {
            const translateY = scrollPercent * 20 - 10;
            ref.style.transform = `translateY(${translateY}px)`;
          }
        }
      });

      // Анимация для статистики
      statsRef.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
          if (isVisible) {
            ref.classList.add('animate-count');
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

  const loadMore = () => {
    setVisibleReviews(prev => Math.min(prev + 6, reviews.length));
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 overflow-x-hidden">
      {/* Hero с анимированным фоном */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20 text-center relative">
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

        {/* Плавающие кавычки */}
        <div className="absolute inset-0 pointer-events-none">
          <Quote className="absolute top-0 left-10 w-16 h-16 text-gray-200 dark:text-gray-800 rotate-180 animate-float" />
          <Quote className="absolute bottom-0 right-10 w-16 h-16 text-gray-200 dark:text-gray-800 animate-float-delayed" />
        </div>

        <h1 
          data-animate="true"
          className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-1000"
        >
          Отзывы
        </h1>
        
        <p 
          data-animate="true"
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 opacity-0 translate-y-8 transition-all duration-1000 delay-300"
        >
          Истории наших клиентов — наша главная гордость
        </p>

        {/* Анимированная линия под заголовком */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-expand-line" />
      </section>

      {/* Stats с анимацией */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="group relative"
                data-animate="true"
              >
                {/* Анимированный фон */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                
                <div className="relative p-4 sm:p-6">
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1} />
                  </div>
                  
                  <div className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}{stat.suffix}
                  </div>
                  
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Filters (Новое) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {['Все отзывы', 'С фото', 'С оценкой 5', '2026 год'].map((filter, index) => (
            <button
              key={index}
              className="group relative px-4 py-2 text-xs uppercase tracking-widest overflow-hidden"
              data-animate="true"
            >
              <span className="relative z-10 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-100">
                {filter}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Grid с продвинутыми анимациями */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div
              key={review.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="group relative"
              data-animate="true"
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredReview(review.id)}
              onMouseLeave={() => setHoveredReview(null)}
            >
              {/* 3D карточка */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl" />
              
              {/* Анимированная рамка */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-2xl animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
              </div>

              {/* Основное содержание */}
              <div className="relative border border-border p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 m-[1px]">
                {/* Иконка кавычек */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200 dark:text-gray-800 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" />
                
                {/* Рейтинг звездами */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400 group-hover:scale-110'
                          : 'fill-transparent text-gray-300'
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Текст отзыва с анимацией */}
                <div className="relative">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 italic line-clamp-4 group-hover:line-clamp-none transition-all duration-700">
                    "{review.text}"
                  </p>
                  
                  {/* Градиентное затемнение для свернутого текста */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-900 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
                </div>

                {/* Информация об авторе */}
                <div className="border-t border-border pt-4 sm:pt-6 relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium mb-1 text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 sm:mt-2 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {review.date}
                      </p>
                    </div>
                    
                    {/* Бейдж доверия */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                      <Heart className="w-3 h-3 text-green-500 fill-green-500" />
                      <span className="text-[10px] text-green-600 dark:text-green-400">Проверено</span>
                    </div>
                  </div>
                </div>

                {/* Номер отзыва */}
                <div className="absolute top-4 left-4 text-4xl font-serif text-gray-100 dark:text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -rotate-12 group-hover:rotate-0">
                  #{review.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Показать еще" */}
        {visibleReviews < reviews.length && (
          <div className="text-center mt-12 sm:mt-16" data-animate="true">
            <button
              onClick={loadMore}
              className="group relative px-8 py-4 text-sm uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10">Показать еще</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        )}
      </section>

      {/* Бейджи с характеристиками */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: MessageCircle, label: '100+ реальных отзывов' },
            { icon: Star, label: 'Исключительно 5 звезд' },
            { icon: Heart, label: '98% клиентов возвращаются' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full group hover:scale-105 transition-transform duration-300"
                data-animate="true"
              >
                <Icon className="w-4 h-4 transition-all group-hover:rotate-12" />
                <span className="text-xs uppercase tracking-widest">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA с магнитным эффектом */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 border-t divider-thin relative overflow-hidden">
        {/* Анимированный фон */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent dark:via-gray-800/50 animate-slide-bg" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center relative">
          <h2 
            data-animate="true"
            className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            Станьте частью нашей истории
          </h2>
          
          <p 
            data-animate="true"
            className="text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4 opacity-0 translate-y-8 transition-all duration-700 delay-200"
          >
            Запишитесь на процедуру и убедитесь в качестве нашего сервиса
          </p>
          
          <div 
            data-animate="true"
            className="opacity-0 scale-95 transition-all duration-1000 delay-500"
          >
            <div className="relative inline-block group">
              {/* Пульсирующие кольца */}
              <div className="absolute inset-0 rounded-full animate-ping-slow bg-primary/20" />
              <div className="absolute inset-0 rounded-full animate-ping-slower bg-primary/10" />
              
              <Button
                asChild
                className="relative bg-primary text-primary-foreground px-8 sm:px-10 md:px-12 py-5 sm:py-6 text-xs sm:text-sm uppercase tracking-widest overflow-hidden group/btn"
              >
                <a href="mailto:info@rutz-salon.ru?subject=Запись на процедуру">
                  <Sparkles className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-180 duration-700" />
                  <span className="relative z-10">Записаться</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </a>
              </Button>
            </div>
          </div>
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

        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slide-bg {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes ping-slower {
          75%, 100% { transform: scale(2); opacity: 0; }
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

        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }

        .animate-slide-bg {
          animation: slide-bg 8s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}