export function Testimonials() {
  const testimonials = [
    {
      quote: "Это не просто салон — это место, где рождается искусство. Мастера чувствуют твой стиль и создают нечто уникальное.",
      author: "Имя Фамилия",
      title: ""
    },
    {
      quote: "Безупречный сервис и внимание к деталям. После посещения салона я всегда чувствую себя на высоте.",
      author: "Имя Фамилия",
      title: ""
    },
    {
      quote: "Профессионализм команды поражает. Каждая процедура выполнена с невероятной точностью и заботой.",
      author: "Имя Фамилия",
      title: ""
    }
  ];

  return (
    <section className="py-32 px-6 md:px-16 lg:px-32 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Отзывы
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Что говорят клиенты
          </h2>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="border-t border-gray-200 pt-12"
            >
              <p 
                className="text-2xl md:text-3xl mb-8 leading-relaxed italic text-gray-800" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-gray-300"></div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase mb-1">
                    {testimonial.author}
                  </div>
                  <div 
                    className="text-xs text-gray-500" 
                    style={{ fontFamily: 'var(--font-serif-alt)' }}
                  >
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
