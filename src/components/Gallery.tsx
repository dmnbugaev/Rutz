export function Gallery() {
  const images = [
    {
      url: '',
      title: 'Элегантная укладка'
    },
    {
      url: '',
      title: 'Вечерний макияж'
    },
    {
      url: '',
      title: 'Стрижка и окрашивание'
    },
    {
      url: '',
      title: 'Авторский образ'
    }
  ];

  return (
    <section id="gallery" className="py-32 px-6 md:px-16 lg:px-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Портфолио
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Наши работы
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden aspect-[4/5]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${image.url}')`,
                  filter: 'grayscale(100%)'
                }}
              ></div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p 
                  className="text-sm tracking-[0.2em]" 
                  style={{ fontFamily: 'var(--font-serif-alt)' }}
                >
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}