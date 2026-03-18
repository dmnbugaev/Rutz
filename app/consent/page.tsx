import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных | RUTZ',
  description: 'Согласие на обработку персональных данных при использовании сайта rutz.beauty и форм записи.',
  alternates: { canonical: 'https://rutz.beauty/consent' },
}

export default function ConsentPage() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <AnimateOnScroll animation="fade-up">
          <h1 className="serif text-4xl sm:text-5xl mb-4">
            Согласие на обработку персональных данных
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Последнее обновление: март 2025
          </p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">1. Кто обрабатывает данные</h2>
              <p>
                Оператором персональных данных является Дарья Рутц, осуществляющая
                деятельность под брендом «Пространство красоты RUTZ» (далее — Оператор).
                Адрес: Барнаул, Павловский тракт, 162.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">2. Категории данных</h2>
              <p>
                Заполняя формы на сайте rutz.beauty или направляя заявку в мессенджерах,
                вы передаёте следующие персональные данные:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Имя (фамилия, имя)</li>
                <li>Контактный телефон</li>
                <li>Сообщения и пожелания, которые вы сами указываете</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">3. Цели обработки</h2>
              <p>Персональные данные обрабатываются исключительно в целях:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Обработки заявок на запись к мастеру и на обучение</li>
                <li>Связи с вами для уточнения деталей записи</li>
                <li>Улучшения качества оказываемых услуг</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">4. Правовое основание</h2>
              <p>
                Обработка персональных данных осуществляется на основании Федерального закона
                от 27.07.2006 № 152-ФЗ «О персональных данных». Основание обработки —
                ваше добровольное согласие, выраженное путём заполнения формы или
                направления заявки.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">5. Передача третьим лицам</h2>
              <p>
                Оператор не передаёт персональные данные третьим лицам без вашего согласия,
                за исключением случаев, предусмотренных действующим законодательством РФ.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">6. Сроки хранения</h2>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения
                целей их сбора, но не более 3 (трёх) лет. По истечении этого срока данные
                уничтожаются.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">7. Ваши права</h2>
              <p>В соответствии с законодательством вы вправе:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Отозвать согласие на обработку персональных данных в любой момент</li>
                <li>Запросить сведения об обрабатываемых данных</li>
                <li>Потребовать уточнения, блокирования или уничтожения данных</li>
              </ul>
              <p>
                Для реализации своих прав обратитесь к Оператору по контактам ниже.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="serif text-2xl text-foreground">8. Контакты оператора</h2>
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
