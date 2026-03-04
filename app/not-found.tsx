import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="glass-card p-12 text-center max-w-md w-full">
        <p className="serif text-8xl font-bold tracking-luxury mb-4">404</p>
        <p className="text-muted-foreground tracking-luxury uppercase text-sm mb-8">
          Страница не найдена
        </p>
        <Link
          href="/"
          className="inline-block bg-foreground text-background px-8 py-3 rounded-2xl text-sm tracking-luxury uppercase transition-luxury hover:opacity-80"
        >
          На главную
        </Link>
      </div>
    </div>
  )
}
