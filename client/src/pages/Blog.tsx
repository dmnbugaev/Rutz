import { ArrowRight, Film, ImageOff, RefreshCw } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';

// Типы данных
interface TelegramPost {
  id: number;
  text: string;
  date: string;
  photo_url?: string;
  video_url?: string;
}

interface TelegramChat {
  title: string;
  username?: string;
}

// Утилита throttle
const throttle = (func: Function, limit: number) => {
  let inThrottle = false;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Хук загрузки данных
function useTelegramPosts() {
  const [posts, setPosts] = useState<TelegramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [channel, setChannel] = useState<TelegramChat>({ title: 'RUTZ Канал' });

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/telegram-posts');
      if (!res.ok) throw new Error('Ошибка загрузки постов');
      const data = await res.json();

      const postsArray = data.posts || [];
      const formattedPosts = postsArray
        .filter((item: any) => item?.channel_post)
        .map((item: any) => {
          const post = item.channel_post;
          return {
            id: post?.message_id || Math.random(),
            date: post?.date 
              ? new Date(post.date * 1000).toLocaleDateString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              : 'Дата неизвестна',
            text: post?.text || post?.caption || '',
            photo_url: post?.photo_url,
            video_url: post?.video_url,
          };
        })
        .slice(0, 7);

      setPosts(formattedPosts);
    } catch (err: any) {
      setError(err?.message || 'Неизвестная ошибка');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchChannel = useCallback(async () => {
    try {
      const res = await fetch('/api/telegram-chat');
      if (res.ok) {
        const chat: TelegramChat = await res.json();
        setChannel(chat);
      }
    } catch (e) {
      console.warn('Не удалось получить название канала');
    }
  }, []);

  useEffect(() => {
    fetchPosts();
    fetchChannel();
  }, [fetchPosts, fetchChannel]);

  const retry = useCallback(() => {
    fetchPosts();
    fetchChannel();
  }, [fetchPosts, fetchChannel]);

  return { posts, loading, error, channel, retry };
}

// Компонент медиа с поддержкой повторов
const PostMedia = ({ post }: { post: TelegramPost }) => {
  const [imgError, setImgError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    if (retryCount < 2) {
      // Пробуем перезагрузить до двух раз
      setTimeout(() => {
        setRetryCount(c => c + 1);
        setImgError(false);
      }, 1000 * (retryCount + 1)); // задержка 1с, затем 2с
    } else {
      setImgError(true);
    }
  };

  if (post.video_url) {
    return (
      <div className="relative w-full h-full">
        <video
          src={post.video_url}
          controls
          poster={post.photo_url}
          preload="metadata"
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full backdrop-blur-sm z-20">
          <Film className="w-4 h-4" />
        </div>
      </div>
    );
  }

  if (post.photo_url && !imgError) {
    return (
      <img
        key={retryCount} // смена ключа заставляет React пересоздать img
        src={post.photo_url}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        onError={handleImageError}
      />
    );
  }

  // Fallback
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-tertiary bg-gradient-to-br from-muted to-muted/80">
      {post.photo_url ? (
        <>
          <ImageOff className="w-12 h-12 mb-2 stroke-1" />
          <span className="text-sm">Не удалось загрузить фото</span>
        </>
      ) : (
        <>
          <span className="text-6xl mb-2">📄</span>
          <span className="text-sm">Текстовый пост</span>
        </>
      )}
    </div>
  );
};

export function Blog() {
  const { posts, loading, error, channel, retry } = useTelegramPosts();

  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    const handleScroll = throttle(() => {
      requestAnimationFrame(() => {
        Object.values(cardRefs.current).forEach((ref) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
            if (scrollPercent > 0 && scrollPercent < 1) {
              const translateY = scrollPercent * 30 - 15;
              ref.style.transform = `translateY(${translateY}px) scale(1.02)`;
            }
          }
        });

        if (heroRef.current) {
          const scrolled = window.scrollY;
          heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
          heroRef.current.style.opacity = `${1 - scrolled * 0.002}`;
        }
      });
    }, 16);

    const handleMouseMove = throttle((e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
      }
    }, 16);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getTitle = (text: string) => {
    if (!text) return 'Новый пост';
    const firstSentence = text.split(/[.!?]/)[0];
    return firstSentence.length > 60 ? firstSentence.slice(0, 57) + '...' : firstSentence;
  };

  const channelUsername = channel.username || channel.title.replace(/\s+/g, '');

  if (loading) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted h-[250px] sm:h-[300px] md:h-[350px] rounded-2xl mb-4 sm:mb-6" />
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-1/3" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 flex flex-col items-center justify-center bg-background text-destructive">
        <p className="mb-4">Ошибка: {error}</p>
        <button
          onClick={retry}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
          aria-label="Повторить загрузку"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Повторить</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      {/* Hero секция */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20 text-center relative">
        <div
          ref={heroRef}
          className="absolute inset-0 -z-10 opacity-20 dark:opacity-10"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            background:
              'radial-gradient(circle at 50% 50%, rgba(128,128,128,0.1) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <h1
          data-animate="true"
          className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-1000 text-foreground"
        >
          Блог
        </h1>
        <p
          data-animate="true"
          className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed px-4 opacity-0 translate-y-8 transition-all duration-1000 delay-300"
        >
          Последние посты из нашего Telegram-канала
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent animate-width"
          aria-hidden="true"
        />
      </section>

      {/* Сетка постов */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        {posts.length === 0 ? (
          <div className="text-center text-tertiary py-12">Пока нет постов в канале</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="group hover-lift relative"
                data-animate="true"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Фоновый градиент при наведении */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative bg-card text-card-foreground rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden">
                  {/* Медиа-блок */}
                  <div
                    ref={(el) => {
                      if (el) cardRefs.current[post.id] = el;
                      else delete cardRefs.current[post.id];
                    }}
                    className="overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] relative bg-muted"
                  >
                    {/* Затемнение при наведении */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                      aria-hidden="true"
                    />

                    <PostMedia post={post} />
                  </div>

                  {/* Текстовая часть */}
                  <div className="p-6 sm:p-8">
                    <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs uppercase tracking-widest text-tertiary">
                      <span>{channel.title}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="serif text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 line-clamp-2 text-foreground">
                      {getTitle(post.text)}
                    </h3>

                    <p className="text-sm sm:text-base text-secondary leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                      {post.text}
                    </p>

                    <a
                      href={`https://t.me/${channelUsername}/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-wider group/link text-foreground hover:text-secondary transition-colors"
                      aria-label={`Читать пост в Telegram`}
                    >
                      <span>Читать далее</span>
                      <ArrowRight className="w-4 h-4 transition-all duration-500 group-hover/link:translate-x-2" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Секция подписки */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="bg-secondary/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
            <div className="absolute top-0 left-0 w-64 h-64 bg-muted rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-muted rounded-full blur-3xl" />
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 relative text-foreground">
            Не пропускайте новые посты
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto mb-8 relative">
            Подпишитесь на наш Telegram-канал и будьте в курсе всех событий и новостей
          </p>
          <a
            href={`https://t.me/${channelUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/80 transition-colors duration-300 text-sm uppercase tracking-wider relative"
            aria-label={`Подписаться на Telegram-канал`}
          >
            <span>Подписаться</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}