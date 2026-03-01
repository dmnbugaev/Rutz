import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности пространства красоты RUTZ.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <AnimateOnScroll animation="fade-up">
          <h1 className="serif text-4xl sm:text-5xl mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Последнее обновление: март 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">1. Общие положения</h2>
              <p>
                Настоящая политика конфиденциальности регулирует порядок обработки
                и защиты информации о пользователях сайта rutz.beauty (далее — Сайт),
                принадлежащего Дарье Рутц (ИП), осуществляющей деятельность
                под брендом «Пространство красоты RUTZ».
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">2. Собираемые данные</h2>
              <p>При использовании Сайта мы можем собирать следующие данные:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Имя и контактный телефон (при заполнении формы обратной связи)</li>
                <li>Данные об использовании Сайта (cookie-файлы, IP-адрес, тип браузера)</li>
                <li>Сообщения, оставленные в форме обратной связи</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">3. Использование данных</h2>
              <p>Собранные данные используются исключительно для:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Обработки заявок и ответов на запросы пользователей</li>
                <li>Улучшения работы и функциональности Сайта</li>
                <li>Аналитики посещаемости (в обезличенном виде)</li>
              </ul>
              <p>Мы не передаём ваши данные третьим лицам без вашего согласия.</p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">4. Cookie-файлы</h2>
              <p>
                Сайт использует cookie-файлы для корректной работы. Вы можете
                отключить их в настройках браузера, однако это может повлиять
                на функциональность Сайта. Продолжая пользоваться Сайтом,
                вы соглашаетесь на использование cookie-файлов.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">5. Хранение данных</h2>
              <p>
                Персональные данные хранятся в течение срока, необходимого
                для выполнения целей их сбора. Вы вправе в любой момент
                запросить удаление своих данных, написав нам по контактам,
                указанным на Сайте.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">6. Контакты</h2>
              <p>
                По вопросам, связанным с обработкой персональных данных,
                обращайтесь:
              </p>
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
