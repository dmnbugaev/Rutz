export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with grayscale filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('')`,
          filter: 'grayscale(100%)'
        }}
      >
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-white/20 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-px h-32 bg-white/20 transform -translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* Main heading */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 tracking-tight leading-[0.95]" 
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
        >
          Искусство
          <br />
          <span className="italic">элегантности</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-white/30"></div>
          <div className="w-1 h-1 bg-white/50 rotate-45"></div>
          <div className="h-px w-16 bg-white/30"></div>
        </div>

        {/* Description */}
        <p 
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed" 
          style={{ fontFamily: 'var(--font-serif-alt)', fontWeight: 300 }}
        >
          Место, где рождается ваш безупречный образ.<br />
          Доверьте себя профессионалам.
        </p>

        {/* CTA Button */}
        <button 
          onClick={scrollToBooking}
          className="group relative bg-white text-black px-14 py-5 text-xs tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-all duration-500 overflow-hidden"
          style={{ fontWeight: 500 }}
        >
          <span className="relative z-10">Записаться на приём</span>
          <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>
      </div>

      {/* Bottom decorative line and scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 pb-12">
          <div className="flex items-center justify-between">
            <div className="h-px flex-1 bg-white/10"></div>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}