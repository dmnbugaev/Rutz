import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center animate-fade-in px-4 sm:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1769697264314-28f093151bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWF1dHklMjBzYWxvbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk3OTA1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover grayscale-luxury"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div 
            style={{ fontFamily: "'rutz-font', serif" }}
            className="serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 tracking-[0.15em]"
          >
            RUTZ
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 tracking-[0.2em] font-light uppercase small-caps px-4">
            Искусство элегантности
          </h1>
          <Button
            asChild
            variant="outline"
            className="
              border-foreground
              text-foreground
              bg-background
              dark:border-primary-foreground
              dark:text-primary-foreground
              dark:bg-transparent
              hover:bg-foreground/10
              dark:hover:bg-primary-foreground/10
              px-8 sm:px-12 
              py-5 sm:py-7 
              text-xs sm:text-sm 
              uppercase 
              tracking-[0.15em]
              transition-luxury
            "
          >
            <Link to="/about">Узнать больше</Link>
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-24 md:mb-32">
            <div className="text-center space-y-4 hover-lift">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 icon-ultra-thin" strokeWidth={0.75} />
              <h3 className="serif text-xl sm:text-2xl tracking-[0.02em]">Мастерство</h3>
              <p className="text-secondary leading-relaxed text-sm sm:text-base">
                Команда экспертов экстра-класса с многолетним опытом
              </p>
            </div>
            <div className="text-center space-y-4 hover-lift">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 icon-ultra-thin" strokeWidth={0.75} />
              <h3 className="serif text-xl sm:text-2xl tracking-[0.02em]">Индивидуальность</h3>
              <p className="text-secondary leading-relaxed text-sm sm:text-base">
                Уникальный подход к каждому клиенту и его потребностям
              </p>
            </div>
            <div className="text-center space-y-4 hover-lift">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 icon-ultra-thin" strokeWidth={0.75} />
              <h3 className="serif text-xl sm:text-2xl tracking-[0.02em]">Вневременность</h3>
              <p className="text-secondary leading-relaxed text-sm sm:text-base">
                Создаем образы, которые остаются актуальными годами
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="hover-lift">
              <div className="serif text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 tracking-[0.03em]">12+</div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-secondary small-caps">Лет на рынке</p>
            </div>
            <div className="hover-lift">
              <div className="serif text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 tracking-[0.03em]">20+</div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-secondary small-caps">Мастеров</p>
            </div>
            <div className="hover-lift">
              <div className="serif text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 tracking-[0.03em]">5000+</div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-secondary small-caps">Клиентов</p>
            </div>
            <div className="hover-lift">
              <div className="serif text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 tracking-[0.03em]">100%</div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-secondary small-caps">Качество</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-b divider-thin">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-[0.03em] text-primary">Наши услуги</h2>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
              Полный спектр премиальных услуг для создания вашего совершенного образа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <Link to="/services" className="group hover-lift">
              <div className="gallery-frame overflow-hidden mb-4 sm:mb-6 h-64 sm:h-80 md:h-96">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaXN0fGVufDF8fHx8MTc2OTMyMTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hair Styling"
                  className="w-full h-full object-cover grayscale-luxury"
                />
              </div>
              <h3 className="serif text-2xl sm:text-3xl mb-2 sm:mb-3 tracking-[0.02em] text-primary">Парикмахерское искусство</h3>
              <p className="text-secondary mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Стрижки, окрашивание, укладки от ведущих мастеров
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.12em] small-caps text-primary">
                Подробнее <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 icon-ultra-thin" strokeWidth={0.75} />
              </div>
            </Link>

            <Link to="/services" className="group hover-lift">
              <div className="gallery-frame overflow-hidden mb-4 sm:mb-6 h-64 sm:h-80 md:h-96">
                <img
                  src="https://images.unsplash.com/photo-1623282788208-d8b90baf5e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjByZWxheGF0aW9ufGVufDF8fHx8MTc2OTM2MjQxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Spa Treatment"
                  className="w-full h-full object-cover grayscale-luxury"
                />
              </div>
              <h3 className="serif text-2xl sm:text-3xl mb-2 sm:mb-3 tracking-[0.02em] text-primary">Уход за лицом</h3>
              <p className="text-secondary mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Эксклюзивные процедуры с использованием премиальной косметики
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.12em] small-caps text-primary">
                Подробнее <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 icon-ultra-thin" strokeWidth={0.75} />
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-primary text-primary-foreground px-8 sm:px-12 py-5 sm:py-7 text-xs sm:text-sm uppercase tracking-[0.15em]"
            >
              <Link to="/services">Посмотреть услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-[0.03em]">Портфолио</h2>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
              Каждая работа — произведение искусства
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {[
              'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdCUyMGZhc2hpb258ZW58MXx8fHwxNzY5Njc1ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1758229457602-597d7ec290cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5pY3VyZSUyMG5haWxzfGVufDF8fHx8MTc2OTY4MDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1507006899057-6a72c95e8ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwbWFrZXVwJTIwYmVhdXR5fGVufDF8fHx8MTc2OTY4MDk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ].map((src, i) => (
              <Link
                key={i}
                to="/portfolio"
                className="group gallery-frame overflow-hidden aspect-square hover-lift"
              >
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover grayscale-luxury"
                />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary px-8 sm:px-12 py-5 sm:py-7 text-xs sm:text-sm uppercase tracking-[0.15em]"
            >
              <Link to="/portfolio">Смотреть портфолио</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-b divider-thin">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <p className="serif text-xl sm:text-2xl md:text-3xl italic mb-6 sm:mb-8 leading-relaxed tracking-[0.02em] text-primary">
            «Это не просто салон красоты — это место, где понимают искусство создания
            идеального образа. Каждый визит — это настоящий опыт роскоши и заботы.»
          </p>
          <div className="text-xs uppercase tracking-[0.15em] text-tertiary small-caps mb-6 sm:mb-0">
            Елена Соколова, постоянный клиент
          </div>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-xs sm:text-sm uppercase tracking-[0.12em] small-caps text-primary"
          >
            Все отзывы <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 icon-ultra-thin" strokeWidth={0.75} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-[0.03em] text-primary">Готовы начать?</h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Запишитесь на консультацию и откройте для себя новый уровень ухода за собой
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground px-10 sm:px-14 md:px-16 py-6 sm:py-7 md:py-8 text-xs sm:text-sm uppercase tracking-[0.15em]"
          >
            <Link to="/contacts">Записаться</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}