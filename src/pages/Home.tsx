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
            src=""
            alt=""
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
                  src=""
                  alt=""
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
                  src=""
                  alt=""
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
              '',
              '',
              '',
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