export function Pricing() {
  const services = [
    {
      category: "Стрижки",
      items: [
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" }
      ]
    },
    {
      category: "Окрашивание",
      items: [
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" }
      ]
    },
    {
      category: "Укладки и макияж",
      items: [
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" }
      ]
    },
    {
      category: "Уход",
      items: [
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" },
        { name: "позиция", price: "xxx ₽" }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 md:px-16 lg:px-32 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Прайс-лист
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-8" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Услуги и цены
          </h2>
          <p className="text-gray-600" style={{ fontFamily: 'var(--font-serif-alt)' }}>
            Все цены указаны с учетом работы мастера
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 md:p-12">
              <h3 
                className="text-2xl md:text-3xl mb-8 pb-6 border-b border-gray-200" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {service.category}
              </h3>
              
              <div className="space-y-6">
                {service.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="flex justify-between items-baseline gap-4"
                  >
                    <div 
                      className="text-base md:text-lg text-gray-700 flex-1" 
                      style={{ fontFamily: 'var(--font-serif-alt)' }}
                    >
                      {item.name}
                    </div>
                    <div className="border-b border-dotted border-gray-300 flex-grow min-w-[40px] mb-1"></div>
                    <div 
                      className="text-base md:text-lg whitespace-nowrap" 
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                    >
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic" style={{ fontFamily: 'var(--font-serif-alt)' }}>
            Точная стоимость услуги определяется после консультации с мастером
          </p>
        </div>
      </div>
    </section>
  );
}