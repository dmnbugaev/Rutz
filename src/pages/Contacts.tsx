import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Contacts() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20 text-center">
        <h1 className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Контакты</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Мы всегда на связи и готовы ответить на ваши вопросы
        </p>
      </section>

      {/* Map Section */}
      <section className="mb-16 sm:mb-24 md:mb-32">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1769697264314-28f093151bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWF1dHklMjBzYWxvbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk3OTA1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Location"
            className="w-full h-full object-cover grayscale-luxury opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://yandex.ru/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <div className="mb-4 sm:mb-6">
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-primary" strokeWidth={1} />
              </div>
              <Button className="btn-luxury bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-[0.15em]">
                Проложить маршрут
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 border-t divider-thin">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Записаться на процедуру</h2>
            <p className="text-sm sm:text-base text-secondary mb-8 sm:mb-12 leading-relaxed px-4">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время для уточнения деталей
            </p>
            <a
              href="https://dikidi.net/1348080?p=0.pi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-luxury bg-white text-black px-8 sm:px-10 md:px-12 py-5 sm:py-6 text-xs sm:text-sm uppercase tracking-[0.15em]">
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2 icon-ultra-thin" strokeWidth={0.75} />
                Онлайн-запись
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}