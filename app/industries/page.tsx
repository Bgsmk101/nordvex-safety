import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Отраслевые решения" };

const scenarios = [
  { number: "01", sector: "Нефтегаз", title: "Северная площадка", text: "Длительное пребывание на открытом воздухе, ветер, осадки и переходы между тёплой и холодной зонами.", risks: "Холод / ветер / статика", system: "Arctic X + Thermo Grid", marker: "−50 °C" },
  { number: "02", sector: "Металлургия", title: "Горячий цех", text: "Контакт с искрами и нагретыми поверхностями при одновременной механической нагрузке на изделие.", risks: "Искры / тепло / истирание", system: "Weld Core", marker: "FR" },
  { number: "03", sector: "Строительство", title: "Высота и трафик", text: "Работа рядом с техникой и на высоте требует круговой видимости без ограничения движения и страховочной системы.", risks: "Видимость / высота / движение", system: "Vector Hi", marker: "360°" },
  { number: "04", sector: "Логистика", title: "Интенсивная смена", text: "Частая смена температуры, высокая подвижность и регулярная стирка требуют лёгкой и стабильной конструкции.", risks: "Износ / климат / мобильность", system: "Urban Shell", marker: "24/7" },
  { number: "05", sector: "Химические производства", title: "Чистый контур", text: "Пыль, аэрозоли и технологические загрязнения требуют барьерных узлов и понятного протокола обслуживания.", risks: "Частицы / загрязнение / очистка", system: "Chem Shield", marker: "B03" },
];

export default function IndustriesPage() {
  return (
    <main className="page" id="main">
      <section className="page-hero page-hero--dark industry-hero">
        <div className="content-frame page-hero-layout">
          <div><p className="micro kicker">03 / Отрасли</p><h1>Риск задаёт<br />конструкцию.</h1></div>
          <div className="page-hero-note"><span>Рабочая среда → система защиты</span><p>Мы проектируем не для абстрактной отрасли, а для конкретной смены: маршрут, операции, продолжительность воздействия и соседние СИЗ.</p></div>
        </div>
        <div className="content-frame risk-axis" aria-hidden="true"><span>Климат</span><i /><span>Воздействие</span><i /><span>Движение</span><i /><span>Обслуживание</span></div>
      </section>

      <section className="scenario-section">
        <div className="content-frame">
          <header className="section-intro section-intro--compact reveal">
            <p className="micro kicker">Матрица сценариев</p>
            <div><h2>Пять сред.<br />Пять разных ответов.</h2><p>Состав комплекта меняется вместе с картой риска — вплоть до расположения карманов, вентиляции и направления застёжек.</p></div>
          </header>
          <div className="scenario-list">
            {scenarios.map((scenario) => (
              <article className="scenario-row reveal" key={scenario.number}>
                <span className="scenario-number">{scenario.number}</span>
                <div className="scenario-title"><small>{scenario.sector}</small><h2>{scenario.title}</h2></div>
                <p>{scenario.text}</p>
                <dl><div><dt>Факторы</dt><dd>{scenario.risks}</dd></div><div><dt>Базовая система</dt><dd>{scenario.system}</dd></div></dl>
                <strong>{scenario.marker}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-blueprint">
        <div className="content-frame blueprint-layout">
          <div className="blueprint-title reveal"><p className="micro kicker">Метод / NVX Field Map</p><h2>Комплект начинается с наблюдения.</h2></div>
          <ol className="blueprint-steps reveal">
            <li><span>01</span><div><strong>Маршрут</strong><p>Где сотрудник находится в течение смены и как меняется среда.</p></div></li>
            <li><span>02</span><div><strong>Операции</strong><p>Какие движения повторяются и где возникает нагрузка на изделие.</p></div></li>
            <li><span>03</span><div><strong>Совместимость</strong><p>Как одежда взаимодействует с каской, страховкой, обувью и перчатками.</p></div></li>
            <li><span>04</span><div><strong>Обслуживание</strong><p>Как комплект стирается, ремонтируется, хранится и заменяется.</p></div></li>
          </ol>
          <div className="blueprint-action reveal"><p>Результат аудита — карта рисков и техническое задание на тестовый комплект.</p><Link className="primary-action" href="/contacts/#form">Заказать аудит <span className="icon-arrow" aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
  );
}
