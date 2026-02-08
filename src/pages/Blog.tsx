import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export function Blog() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Философия минимализма в уходе за волосами',
      excerpt:
        'Меньше — значит больше. Рассказываем о принципах минималистичного, но эффективного ухода за волосами и о том, как правильно подобрать базовые средства.',
      image:
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaXN0fGVufDF8fHx8MTc2OTMyMTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Анна Руцкая',
      date: '15 января 2026',
      category: 'Уход за волосами',
    },
    {
      id: 2,
      title: 'Искусство естественного макияжа',
      excerpt:
        'Секреты создания безупречного образа, который выглядит так, будто вы не наносили косметику вообще. Техники, продукты и философия no-makeup makeup.',
      image:
        'https://images.unsplash.com/photo-1491233670471-398d873b5406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBtYWtldXAlMjBlbGVnYW50fGVufDF8fHx8MTc2OTM2MjU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Мария Волкова',
      date: '10 января 2026',
      category: 'Макияж',
    },
    {
      id: 3,
      title: 'Вневременные тренды: что остается актуальным',
      excerpt:
        'Анализируем тенденции последних десятилетий и выделяем элементы стиля, которые никогда не выходят из моды. Создаем базу для вашего вневременного образа.',
      image:
        'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdCUyMGZhc2hpb258ZW58MXx8fHwxNzY5Njc1ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Елена Сергеева',
      date: '5 января 2026',
      category: 'Стиль',
    },
    {
      id: 4,
      title: 'Сезонный уход: готовим кожу к весне',
      excerpt:
        'Как правильно перестроить уходовую рутину с приходом весны. Процедуры, которые помогут коже восстановиться после зимы и подготовиться к солнечному сезону.',
      image:
        'https://images.unsplash.com/photo-1623282788208-d8b90baf5e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjByZWxheGF0aW9ufGVufDF8fHx8MTc2OTM2MjQxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Елена Сергеева',
      date: '28 декабря 2025',
      category: 'Уход за кожей',
    },
    {
      id: 5,
      title: 'Психология цвета в окрашивании волос',
      excerpt:
        'Цвет волос — это не только эстетика, но и способ самовыражения. Разбираемся, как оттенок влияет на восприятие личности и как найти свой идеальный тон.',
      image:
        'https://images.unsplash.com/photo-1713180758513-151b3d3bb4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaGFpciUyMHN0eWxpbmd8ZW58MXx8fHwxNzY5MzYyNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Мария Волкова',
      date: '20 декабря 2025',
      category: 'Колористика',
    },
    {
      id: 6,
      title: 'Ритуалы красоты: создаем личную рутину',
      excerpt:
        'Уход за собой — это не просто процедуры, это философия жизни. Создаем индивидуальные ритуалы, которые станут источником удовольствия и заботы о себе.',
      image:
        'https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjkyMzk0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Анна Руцкая',
      date: '15 декабря 2025',
      category: 'Философия',
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20 text-center">
        <h1 className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Блог</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Советы, тренды и инсайты мира красоты от экспертов RUTZ
        </p>
      </section>

      {/* Featured Post */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden gallery-frame">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover grayscale-luxury"
            />
          </div>
          <div className="p-6 sm:p-8 lg:p-12 flex-1 flex flex-col justify-center bg-background">
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs uppercase tracking-widest text-tertiary">
              <span className="small-caps">{posts[0].category}</span>
              <span>·</span>
              <span>{posts[0].date}</span>
            </div>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl">{posts[0].title}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{posts[0].excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{posts[0].author}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider pt-4">
              Читать статью <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
          {posts.slice(1).map((post) => (
            <article key={post.id} className="group hover-lift">
              <div className="gallery-frame overflow-hidden mb-4 sm:mb-6 h-[250px] sm:h-[300px] md:h-[350px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale-luxury"
                />
              </div>
              <div className="p-4 sm:p-8 bg-background">
                <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs uppercase tracking-widest text-tertiary small-caps">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="serif text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">{post.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider">
                  Читать далее <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-center">Подписка на блог</h2>
          <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-8 px-4">
            Получайте наши лучшие статьи на email
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-border bg-background text-sm sm:text-base"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap"
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}