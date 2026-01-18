import { useState } from 'react';

export function BookingForm() {
  const handleBookingClick = () => {
    // Здесь будет ссылка на вашу систему онлайн-записи
    window.open('#', '_blank');
  };

  return (
    <section id="booking" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with grayscale filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('')`,
          filter: 'grayscale(100%)'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative top element */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-white/30"></div>
          <div className="w-1 h-1 bg-white/50 rotate-45"></div>
          <div className="h-px w-16 bg-white/30"></div>
        </div>

        {/* Heading */}
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight" 
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
        >
          Запишитесь
          <br />
          <span className="italic">на приём</span>
        </h2>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-white/80 mb-14 max-w-2xl mx-auto leading-relaxed" 
          style={{ fontFamily: 'var(--font-serif-alt)', fontWeight: 300 }}
        >
          Выберите удобное время и услугу в нашей системе онлайн-записи.<br />
          Мы ждём вас в Rutz.
        </p>

        {/* CTA Button */}
        <button 
          onClick={handleBookingClick}
          className="group relative bg-white text-black px-16 py-6 text-sm tracking-[0.25em] uppercase hover:bg-transparent hover:text-white transition-all duration-500 border-2 border-white overflow-hidden"
          style={{ fontWeight: 500 }}
        >
          <span className="relative z-10">Онлайн запись</span>
        </button>

        {/* Additional info */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
            Или свяжитесь с нами
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
            <a 
              href="tel:+74951234567" 
              className="text-sm hover:text-white transition-colors"
            >
              +7 (495) 123-45-67
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="mailto:info@rutz.ru" 
              className="text-sm hover:text-white transition-colors"
            >
              info@rutz.ru
            </a>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-12 left-12 w-16 h-16 border-l border-t border-white/20"></div>
      <div className="absolute top-12 right-12 w-16 h-16 border-r border-t border-white/20"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 border-l border-b border-white/20"></div>
      <div className="absolute bottom-12 right-12 w-16 h-16 border-r border-b border-white/20"></div>
    </section>
  );
}