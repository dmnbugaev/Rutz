import { ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

interface Service {
  name: string;
  price: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  services: Service[];
  brands?: string[];
}

export function Services() {
  const categories: ServiceCategory[] = [
    {
      id: 'hair',
      title: 'Категория',
      description: 'Описание',
      image: '',
      brands: ['бренд косметики 1', 'бренд косметики 2', 'бренд косметики 3'],
      services: [
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
      ],
    },
    {
      id: 'face',
      title: 'Категория',
      description: 'Описание',
      image: '',
      brands: ['бренд косметики 1', 'бренд косметики 2', 'бренд косметики 3'],
      services: [
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
      ],
    },
        {
      id: 'hair',
      title: 'Категория',
      description: 'Описание',
      image: '',
      brands: ['бренд косметики 1', 'бренд косметики 2', 'бренд косметики 3'],
      services: [
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
      ],
    },
    {
      id: 'face',
      title: 'Категория',
      description: 'Описание',
      image: '',
      brands: ['бренд косметики 1', 'бренд косметики 2', 'бренд косметики 3'],
      services: [
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
        { name: 'услуга', price: 'от xxx ₽' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32 text-center">
        <h1 className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Услуги и цены</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Полный спектр премиальных услуг для создания вашего совершенного образа
        </p>
      </section>

      {/* Services with Price Lists */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {categories.map((category, index) => (
            <div key={category.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover grayscale-luxury"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">{category.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8">
                      {category.description}
                    </p>
                    {category.brands && (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 sm:mb-4">
                          Премиальные бренды:
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {category.brands.map((brand) => (
                            <span
                              key={brand}
                              className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price List */}
                  <div className="space-y-1 py-6 sm:py-8 border-t border-b border-gray-200 dark:border-gray-800">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-baseline py-3 sm:py-4 px-2 sm:px-4 -mx-2 sm:-mx-4"
                      >
                        <span className="text-sm sm:text-base pr-4 sm:pr-8">{service.name}</span>
                        <div className="flex-1 border-b border-dotted border-gray-300 dark:border-gray-700 mb-1 sm:mb-2 mx-2 sm:mx-4" />
                        <span className="text-sm sm:text-base font-light whitespace-nowrap serif">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Online Booking */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 border-t divider-thin">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <h2 className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8">Готовы к преображению?</h2>
          <p className="text-secondary mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg px-4">
            Запишитесь онлайн в удобное для вас время через нашу систему бронирования
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-xs sm:text-sm md:text-base uppercase tracking-widest"
          >
            <a
              href="https://dikidi.net/1348080?p=0.pi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" strokeWidth={1.5} />
              Записаться онлайн
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}