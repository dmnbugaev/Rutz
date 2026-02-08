import { Award, Heart, Star, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32">

      {/* Founder & Philosophy */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12">Философия</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 md:mb-32">
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1767256483431-4024df253bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmb3VuZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5MzY0NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Founder"
              className="w-full h-full object-cover grayscale-luxury"
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 sm:mb-4">Основатель</p>
              <h3 className="serif text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Дарья</h3>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                Арт-директор, колорист и идейный вдохновитель
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                «Я всегда верила, что красота — это не просто внешний облик, это состояние души,
                гармония внутреннего и внешнего мира. Когда я создавала RUTZ, моей главной целью
                было создать пространство, где каждый человек мог бы почувствовать себя
                по-настоящему особенным.»
              </p>
              <p>
                «Наша философия основана на трех принципах: уважение к индивидуальности,
                стремление к совершенству и вера в силу вневременной элегантности. Мы не следуем
                слепо за модными трендами — мы создаем образы, которые подчеркивают уникальность
                каждого клиента и остаются актуальными годами.»
              </p>
              <p>
                «RUTZ — это не просто салон красоты. Это философия жизни, где красота встречается
                с искусством, а забота о себе становится ритуалом наслаждения и самопознания.»
              </p>
            </div>
          </div>
        </div>

        {/* Extended Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
            <h3 className="serif text-2xl sm:text-3xl md:text-4xl text-black dark:text-white mb-6 sm:mb-8">Наш подход</h3>
            <p>
              В RUTZ мы верим, что настоящая красота начинается с понимания себя. Каждый наш
              мастер — это не просто профессионал своего дела, это художник, который чувствует
              и понимает уникальность каждого клиента.
            </p>
            <p>
              Мы создали пространство, где архитектурный минимализм встречается с тактильной
              роскошью. Каждая деталь интерьера, каждый материал выбраны с заботой о вашем
              комфорте и эстетическом наслаждении.
            </p>
            <p>
              Наша работа — это не просто выполнение процедуры. Это создание опыта, который
              остается с вами надолго. Мы используем только премиальные продукты мировых
              брендов, потому что качество для нас — не компромисс, а стандарт.
            </p>
          </div>

          <div className="relative h-[350px] sm:h-[450px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0ZXh0dXJlJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTM2MjQxMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Luxury Detail"
              className="w-full h-full object-cover grayscale-luxury"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 mb-12 sm:mb-16 md:mb-24 border-t divider-thin">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Наши ценности</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6" strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest mb-2">Мастерство</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Непрерывное обучение и совершенствование техник
              </p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6" strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest mb-2">Забота</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Индивидуальный подход и внимание к каждой детали
              </p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6" strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest mb-2">Качество</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Только премиальные материалы и косметика
              </p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6" strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest mb-2">Эстетика</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Создание вневременной красоты и гармонии
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interiors Gallery */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Интерьеры салона</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Пространство, созданное для вашего комфорта и вдохновения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1731336479432-3eb5fdb3ab1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NjkyNjc5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Salon Interior 1"
              className="w-full h-full object-cover grayscale-luxury"
            />
          </div>
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1769697264314-28f093151bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWF1dHklMjBzYWxvbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk3OTA1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Salon Interior 2"
              className="w-full h-full object-cover grayscale-luxury"
            />
          </div>
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY5MzExNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Salon Interior 3"
              className="w-full h-full object-cover grayscale-luxury"
            />
          </div>
        </div>
      </section>
    </div>
  );
}