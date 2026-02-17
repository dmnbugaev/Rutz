import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useEffect, useRef, useState } from 'react';

export function Contacts() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Contact information
  const contacts = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Москва, ул. Тверская, 15',
      subtitle: 'м. Тверская / Пушкинская',
      action: 'Проложить маршрут',
      link: 'https://yandex.ru/maps'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      subtitle: 'Ежедневно с 10:00 до 21:00',
      action: 'Позвонить',
      link: 'tel:+74951234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@rutz.ru',
      subtitle: 'Ответим в течение 24 часов',
      action: 'Написать',
      link: 'mailto:hello@rutz.ru'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      content: 'Пн-Вс: 10:00 - 21:00',
      subtitle: 'По предварительной записи',
      action: 'Записаться',
      link: '#booking'
    }
  ];

  // Social media
  const socials = [
    { icon: Instagram, label: 'Instagram', link: 'https://instagram.com', color: 'from-pink-500 to-purple-600' },
    { icon: Facebook, label: 'Facebook', link: 'https://facebook.com', color: 'from-blue-600 to-blue-700' }
  ];

  useEffect(() => {
    // Intersection Observer for fade-in effects
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

    // Parallax effect on map
    const handleScroll = () => {
      if (mapRef.current) {
        const rect = mapRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
        if (scrollPercent > 0 && scrollPercent < 1) {
          const translateY = scrollPercent * 50 - 25;
          const scale = 1 + scrollPercent * 0.05;
          mapRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        }
      }

      // Parallax for contact cards
      contactRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
          if (scrollPercent > 0 && scrollPercent < 1) {
            const translateY = scrollPercent * 30 - 15;
            const rotateX = scrollPercent * 5 - 2.5;
            ref.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateY(${translateY}px)`;
          }
        }
      });
    };

    // Mouse move effect for hero
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
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

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 overflow-x-hidden">
      {/* Hero with animated background */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20 text-center relative">
        {/* Animated gradient orbs */}
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

        <h1 
          data-animate="true"
          className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
        >
          Контакты
        </h1>
        <p 
          data-animate="true"
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
        >
          Мы всегда на связи и готовы ответить на ваши вопросы
        </p>

        {/* Animated underline */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-expand-line" />
      </section>

      {/* Map Section with 3D Parallax */}
      <section className="mb-16 sm:mb-24 md:mb-32">
        <div 
          ref={mapRef}
          className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group"
          data-animate="true"
        >
          {/* Map placeholder with animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 z-10" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <a
              href="https://yandex.ru/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group/link"
            >
              <div className="mb-4 sm:mb-6 transform transition-all duration-700 group-hover/link:scale-110 group-hover/link:rotate-12">
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-white animate-bounce-slow" strokeWidth={1} />
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 rounded-full blur-xl group-hover/link:opacity-100 opacity-0 transition-opacity duration-700" />
                <Button className="relative bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-[0.15em] overflow-hidden group/btn">
                  <span className="relative z-10 transition-colors group-hover/btn:text-white">
                    Проложить маршрут
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </Button>
              </div>
            </a>
          </div>

          {/* 3D corner accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/30 group-hover:border-white/60 transition-all duration-700" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/30 group-hover:border-white/60 transition-all duration-700" />
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                ref={(el) => (contactRefs.current[index] = el)}
                className="group relative"
                data-animate="true"
                onMouseEnter={() => setHoveredPin(index)}
                onMouseLeave={() => setHoveredPin(null)}
              >
                {/* 3D card effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-2xl animate-border-flow" />
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-8 text-center bg-white dark:bg-gray-900 rounded-2xl m-[1px]">
                  {/* Icon with animation */}
                  <div className="relative inline-block mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                    <Icon 
                      className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-700 ${
                        hoveredPin === index ? 'scale-110 rotate-12 text-gray-800' : 'text-gray-600'
                      }`} 
                      strokeWidth={1} 
                    />
                  </div>

                  <h3 className="text-xs uppercase tracking-widest mb-3 sm:mb-4 text-gray-500">
                    {contact.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base font-medium mb-2">
                    {contact.content}
                  </p>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">
                    {contact.subtitle}
                  </p>

                  <a
                    href={contact.link}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider group/link"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform group-hover/link:translate-y-[-100%]">
                        {contact.action}
                      </span>
                      <span className="absolute top-full left-0 transition-transform group-hover/link:translate-y-[-100%]">
                        {contact.action}
                      </span>
                    </span>
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1 group-hover/link:-rotate-45" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            data-animate="true"
            className="serif text-2xl sm:text-3xl md:text-4xl mb-4 opacity-0 translate-y-8 transition-all duration-700"
          >
            Мы в социальных сетях
          </h2>
          <p 
            data-animate="true"
            className="text-sm text-gray-500 opacity-0 translate-y-8 transition-all duration-700 delay-200"
          >
            Следите за нашими новостями и вдохновляйтесь
          </p>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                ref={(el) => (socialRefs.current[index] = el)}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                data-animate="true"
              >
                {/* Magnetic effect container */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />
                  
                  {/* Button with 3D effect */}
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-2xl">
                    <Icon 
                      className="w-full h-full p-4 sm:p-5 transition-all duration-500 group-hover:rotate-12 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600" 
                      strokeWidth={1} 
                    />
                  </div>

                  {/* Hover text */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                    {social.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Booking CTA with enhanced animation */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 border-t divider-thin relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent dark:via-gray-800/50 animate-slide-bg" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 
              data-animate="true"
              className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-700"
            >
              Записаться на процедуру
            </h2>
            <p 
              data-animate="true"
              className="text-sm sm:text-base text-secondary mb-8 sm:mb-12 leading-relaxed px-4 opacity-0 translate-y-8 transition-all duration-700 delay-200"
            >
              Оставьте заявку, и мы свяжемся с вами в ближайшее время для уточнения деталей
            </p>
            
            <div 
              data-animate="true"
              className="opacity-0 scale-95 transition-all duration-1000 delay-500"
            >
              <a
                href="https://dikidi.net/1348080?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <div className="relative">
                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-full animate-ping-slow bg-gray-400/20" />
                  <div className="absolute inset-0 rounded-full animate-ping-slower bg-gray-400/10" />
                  
                  <Button className="relative bg-white text-black px-8 sm:px-10 md:px-12 py-5 sm:py-6 text-xs sm:text-sm uppercase tracking-[0.15em] overflow-hidden group/btn">
                    <ExternalLink 
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 icon-ultra-thin transition-transform group-hover/btn:rotate-45 group-hover/btn:scale-110" 
                      strokeWidth={0.75} 
                    />
                    <span className="relative z-10 transition-colors group-hover/btn:text-white">
                      Онлайн-запись
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </Button>
                </div>
              </a>
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

        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
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

        .animate-float-particle {
          animation: float-particle 15s linear infinite;
        }

        .animate-border-flow {
          background-size: 200% 200%;
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

        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}