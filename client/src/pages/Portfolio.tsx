import { useState } from 'react';

type FilterType = 'all' | 'hair' | 'makeup' | 'nails' | 'brows';

interface PortfolioItem {
  id: number;
  image: string;
  category: FilterType;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image:
        '',
      category: 'hair',
    },
    {
      id: 2,
      image:
        '',
      category: 'makeup',
    },
    {
      id: 3,
      image:
        '',
      category: 'nails',
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
      {/* Hero - убрано описание */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20 text-center">
        <h1 className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Портфолио</h1>
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

      {/* Gallery - убраны имена мастеров и описания */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group gallery-frame relative overflow-hidden aspect-square hover-lift"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover grayscale-luxury"
              />
              {/* Убрана накладка с информацией */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}