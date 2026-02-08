export function Privacy() {
  return (
    <div className="min-h-screen pt-32 animate-fade-in">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-8 mb-24 text-center">
        <h1 className="serif text-6xl md:text-7xl mb-6 tracking-[0.03em] text-primary">
          Политика конфиденциальности
        </h1>
        <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
          Защита ваших персональных данных — наш приоритет
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-8 mb-32">
        <div className="space-y-12 text-secondary leading-relaxed">
          <div className="hover-lift border border-border p-8">
            <h2 className="serif text-3xl mb-6 text-primary tracking-[0.02em]">
              1. Общие положения
            </h2>
            <p className="mb-4">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных пользователей сайта RUTZ (далее — «Салон»).
            </p>
            <p>
              Используя наш сайт, вы соглашаетесь с условиями данной Политики
              конфиденциальности.
            </p>
          </div>

          <div className="hover-lift border border-border p-8">
            <h2 className="serif text-3xl mb-6 text-primary tracking-[0.02em]">
              2. Сбор персональных данных
            </h2>
            <p className="mb-4">
              Мы собираем следующие категории персональных данных:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и контактная информация (телефон, email)</li>
              <li>Информация о записях и посещениях салона</li>
              <li>Данные о предпочтениях и истории обслуживания</li>
              <li>Технические данные (IP-адрес, cookies, данные браузера)</li>
            </ul>
          </div>

          <div className="hover-lift border border-border p-8">
            <h2 className="serif text-3xl mb-6 text-primary tracking-[0.02em]">
              3. Цели обработки данных
            </h2>
            <p className="mb-4">Мы используем ваши персональные данные для:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставления услуг и выполнения обязательств перед клиентами</li>
              <li>Обработки заявок и бронирования услуг</li>
              <li>Информирования о новых услугах и специальных предложениях</li>
              <li>Улучшения качества обслуживания и персонализации опыта</li>
              <li>Анализа посещаемости и функционирования сайта</li>
            </ul>
          </div>

          <div className="hover-lift border border-border p-8">
            <h2 className="serif text-3xl mb-6 text-primary tracking-[0.02em]">
              4. Ваши права
            </h2>
            <p className="mb-4">Вы имеете право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получать информацию о хранящихся у нас данных</li>
              <li>Требовать исправления неточных данных</li>
              <li>Требовать удаления своих персональных данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Подать жалобу в надзорный орган</li>
            </ul>
          </div>

          <div className="hover-lift border border-border p-8">
            <h2 className="serif text-3xl mb-6 text-primary tracking-[0.02em]">
              5. Контактная информация
            </h2>
            <p className="mb-4">
              По вопросам, связанным с обработкой персональных данных, вы можете
              обратиться к нам:
            </p>
            <div className="space-y-2 pl-6">
              <p>Телефон: +7 (983) 396-22-44</p>
              <p>Адрес: Барнаул, ​ЖК Питер, ​Павловский тракт, 162</p>
            </div>
          </div>

          <div className="pt-12 border-t divider-thin">
            <p className="text-sm text-tertiary text-center">
              Дата последнего обновления: 25 января 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}