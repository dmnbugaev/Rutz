import { useState } from 'react';

type FilterType = 'all' | 'hair' | 'makeup' | 'nails' | 'brows';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  master: string;
  category: FilterType;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1713180758513-151b3d3bb4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaGFpciUyMHN0eWxpbmd8ZW58MXx8fHwxNzY5MzYyNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Авторская стрижка каре',
      master: 'Анна Руцкая',
      category: 'hair',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1491233670471-398d873b5406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBtYWtldXAlMjBlbGVnYW50fGVufDF8fHx8MTc2OTM2MjU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Вечерний макияж',
      master: 'Мария Волкова',
      category: 'makeup',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1758229457602-597d7ec290cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5pY3VyZSUyMG5haWxzfGVufDF8fHx8MTc2OTY4MDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Минималистичный дизайн',
      master: 'Елена Сергеева',
      category: 'nails',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaXN0fGVufDF8fHx8MTc2OTMyMTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Сложное окрашивание блонд',
      master: 'Мария Волкова',
      category: 'hair',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdCUyMGZhc2hpb258ZW58MXx8fHwxNzY5Njc1ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Архитектура бровей',
      master: 'Анна Руцкая',
      category: 'brows',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1623282788208-d8b90baf5e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjByZWxheGF0aW9ufGVufDF8fHx8MTc2OTM2MjQxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Естественный макияж',
      master: 'Елена Сергеева',
      category: 'makeup',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjkyMzk0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Текстурированная стрижка',
      master: 'Анна Руцкая',
      category: 'hair',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1507006899057-6a72c95e8ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwbWFrZXVwJTIwYmVhdXR5fGVufDF8fHx8MTc2OTY4MDk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Свадебный макияж',
      master: 'Мария Волкова',
      category: 'makeup',
    },
    {
      id: 9,
      image:
        'https://images.unsplash.com/photo-1763048208932-cbe149724374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyc3R5bGlzdCUyMHdvcmtpbmd8ZW58MXx8fHwxNzY5NjczMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Классическая укладка',
      master: 'Анна Руцкая',
      category: 'hair',
    },
  ];

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'Все работы' },
    { id: 'hair', label: 'Прически' },
    { id: 'makeup', label: 'Макияж' },
    { id: 'nails', label: 'Маникюр' },
    { id: 'brows', label: 'Брови / Ресницы' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20 text-center">
        <h1 className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Портфолио</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Каждая работа — произведение искусства
        </p>
      </section>

      {/* Filter */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm uppercase tracking-widest ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-secondary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group gallery-frame relative overflow-hidden aspect-square hover-lift"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale-luxury"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0">
                <h3 className="serif text-lg sm:text-xl mb-1 text-white">{item.title}</h3>
                <p className="text-xs uppercase tracking-widest text-white/80">{item.master}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32 border-t divider-thin">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <h2 className="serif text-3xl sm:text-4xl mb-4 sm:mb-6">Хотите так же?</h2>
          <p className="text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
            Запишитесь к нашим мастерам и создайте свой уникальный образ
          </p>
        </div>
      </section>
    </div>
  );
}