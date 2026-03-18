import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение | RUTZ',
  description: 'Пользовательское соглашение сайта rutz.beauty — правила использования сайта пространства красоты RUTZ.',
  alternates: { canonical: 'https://rutz.beauty/terms' },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <AnimateOnScroll animation="fade-up">
          <h1 className="serif text-4xl sm:text-5xl mb-4">
            Пользовательское соглашение
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Последнее обновление: март 2025
          </p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">1. Общие положения</h2>
              <p>
                Настоящее Пользовательское соглашение регулирует использование сайта
                rutz.beauty (далее — Сайт), принадлежащего Дарье Рутц, осуществляющей
                деятельность под брендом «Пространство красоты RUTZ» (далее — Исполнитель).
              </p>
              <p>
                Используя Сайт, вы подтверждаете согласие с условиями настоящего соглашения.
                Если вы не согласны с условиями — прекратите использование Сайта.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">2. Предмет соглашения</h2>
              <p>
                Сайт предоставляет информацию об услугах колориста и преподавателя Дарьи Рутц,
                включая окрашивание волос, консультации и обучение колористике. Через Сайт
                пользователь может ознакомиться с прайсом, оставить заявку и связаться
                с Исполнителем.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">3. Права и обязанности пользователя</h2>
              <p>Пользователь вправе:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Использовать информацию Сайта в личных некоммерческих целях</li>
                <li>Оставлять заявки на услуги и обучение</li>
                <li>Запрашивать удаление своих персональных данных</li>
              </ul>
              <p>Пользователь обязан:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Предоставлять достоверные данные при заполнении форм</li>
                <li>Не копировать и не распространять материалы Сайта без согласия Исполнителя</li>
                <li>Не совершать действий, нарушающих работу Сайта</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">4. Ограничение ответственности</h2>
              <p>
                Исполнитель прилагает все усилия для обеспечения точности информации на Сайте.
                Цены на услуги могут изменяться — актуальную информацию уточняйте при записи.
                Исполнитель не несёт ответственности за технические перебои в работе Сайта,
                вызванные внешними причинами.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">5. Интеллектуальная собственность</h2>
              <p>
                Все материалы Сайта (тексты, изображения, логотипы) являются собственностью
                Дарьи Рутц и защищены законодательством об авторском праве. Использование
                материалов без письменного разрешения запрещено.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">6. Изменения соглашения</h2>
              <p>
                Исполнитель вправе в одностороннем порядке изменять условия настоящего соглашения.
                Актуальная версия соглашения всегда доступна на Сайте. Продолжение использования
                Сайта после внесения изменений означает согласие с новыми условиями.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">7. Контакты</h2>
              <p>По вопросам, связанным с настоящим соглашением, обращайтесь:</p>
              <ul className="list-none space-y-1">
                <li>Телефон: +7 (983) 396-22-44</li>
                <li>Telegram: @rutzprostranstvo</li>
                <li>Адрес: Барнаул, Павловский тракт, 162</li>
              </ul>
            </section>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
