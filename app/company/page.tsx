import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Компания",
  description: "Принципы и подход производителя профессиональной экипировки NORDVEX.",
};

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
  <main className="page" id="main">
    <section className="page-hero content-frame" data-index="05">
      <div>
        <div className="breadcrumbs">
          <a href={`${basePath}/`}>NORDVEX</a>
          <span>/</span>
          <strong>Компания</strong>
        </div>
        <h1>
          Северная
          <br />
          логика
        </h1>
      </div>
      <p className="page-lead">NORDVEX создаёт профессиональную экипировку для предприятий, где одежда должна выдерживать климат, нагрузку и строгий производственный регламент. В основе бренда — инженерный подход, повторяемость качества и честная функциональность.</p>
    </section>
    <section className="section content-frame">
      <div className="section-head reveal">
        <div>
          <p className="micro kicker">Принципы</p>
        </div>
        <div>
          <h2 className="section-title">
            Форма следует
            <br />
            <em>за работой.</em>
          </h2>
          <p className="section-intro">Мы начинаем с рабочего действия, физической нагрузки и конкретного риска. Поэтому форма, материал и расположение каждого узла подчинены реальному сценарию использования.</p>
        </div>
      </div>
      <div className="number-grid reveal">
        <div className="number-cell">
          <strong>01</strong>
          <p>Техническая честность: функция видна в конструкции.</p>
        </div>
        <div className="number-cell">
          <strong>02</strong>
          <p>Совместимость: каждый слой работает внутри системы.</p>
        </div>
        <div className="number-cell">
          <strong>03</strong>
          <p>Повторяемость: эталон сохраняется от партии к партии.</p>
        </div>
        <div className="number-cell">
          <strong>04</strong>
          <p>Обратная связь: рабочая смена важнее презентации.</p>
        </div>
      </div>
    </section>
    <section className="section content-frame">
      <div className="section-head reveal">
        <div>
          <p className="micro kicker">История метода</p>
        </div>
        <div>
          <h2 className="section-title">
            Развитие
            <br />
            системы
          </h2>
        </div>
      </div>
      <div className="timeline reveal">
        <article className="timeline-item">
          <div className="timeline-year">2017</div>
          <div>
            <h3>Первый северный комплект</h3>
            <p>Работа с монтажными бригадами показала, что утепление без контроля влаги не решает задачу длительной смены.</p>
          </div>
        </article>
        <article className="timeline-item">
          <div className="timeline-year">2019</div>
          <div>
            <h3>Переход к модульности</h3>
            <p>Изделия объединены в совместимые слои, чтобы сотрудник мог адаптировать комплект к темпу движения и погоде.</p>
          </div>
        </article>
        <article className="timeline-item">
          <div className="timeline-year">2022</div>
          <div>
            <h3>Цифровой паспорт модели</h3>
            <p>Конструкция, материалы, размерная сетка и история изменений фиксируются в едином профиле изделия.</p>
          </div>
        </article>
        <article className="timeline-item">
          <div className="timeline-year">2026</div>
          <div>
            <h3>NORDVEX System 4L</h3>
            <p>Единая архитектура защиты связывает базовый слой, утепление, барьер и внешнюю оболочку.</p>
          </div>
        </article>
      </div>
    </section>
  </main>
  );
}
