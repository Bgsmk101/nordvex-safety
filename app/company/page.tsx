import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Компания" };

const principles = [
  ["01", "Задача до модели", "Сначала разбираем среду и операции. Готовое изделие — только один из возможных ответов."],
  ["02", "Работник — соавтор", "Тестовый комплект оценивают сотрудники, которые действительно будут носить его на смене."],
  ["03", "Серия важнее образца", "Эталон, размерная матрица и история изменений обеспечивают повторяемый результат."],
  ["04", "Совместимость обязательна", "Одежда проектируется вместе с каской, страховочной системой, обувью и перчатками."],
];

export default function CompanyPage() {
  return (
    <main className="page" id="main">
      <section className="company-hero">
        <div className="content-frame company-hero-layout">
          <p className="micro kicker">05 / Компания</p>
          <h1>Мы не продаём ощущение безопасности.</h1>
          <p className="company-manifesto">Мы проектируем проверяемую систему: понятный риск, обоснованный материал, испытанный прототип и серия, которую можно воспроизвести.</p>
          <div className="company-mark" aria-hidden="true"><span>N</span><span>V</span><span>X</span></div>
        </div>
      </section>

      <section className="company-facts">
        <div className="content-frame fact-strip">
          <div><strong data-count="2016">2016</strong><span>начало инженерной практики</span></div>
          <div><strong data-count="42" data-suffix="+">42+</strong><span>базовые модели</span></div>
          <div><strong data-count="18">18</strong><span>отраслевых сценариев</span></div>
          <div><strong data-count="7">7</strong><span>ступеней контроля</span></div>
        </div>
      </section>

      <section className="principles-section">
        <div className="content-frame principles-layout">
          <div className="principles-title reveal"><p className="micro kicker">Рабочие принципы</p><h2>Инженерная культура вместо каталожного мышления.</h2><p>Эти правила остаются неизменными, независимо от размера партии и отрасли заказчика.</p></div>
          <div className="principles-list">
            {principles.map(([number, title, text]) => <article className="reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="content-frame history-layout">
          <div className="history-heading reveal"><p className="micro kicker">Короткая история</p><h2>От одной зимней куртки к системе.</h2></div>
          <div className="history-line reveal">
            <div><span>2016</span><strong>Первый северный прототип</strong><p>Переработали серийную модель после наблюдения за бригадой на открытой площадке.</p></div>
            <div><span>2019</span><strong>Полевой метод</strong><p>Формализовали аудит маршрута, движений и взаимодействия со смежными СИЗ.</p></div>
            <div><span>2022</span><strong>Единый паспорт</strong><p>Связали разработку, производство и повторные партии одной системой спецификаций.</p></div>
            <div><span>2026</span><strong>NORDVEX сегодня</strong><p>Разрабатываем совместимые линейки для климата, огня, видимости и загрязнений.</p></div>
          </div>
        </div>
      </section>

      <section className="company-closing">
        <div className="content-frame company-closing-layout reveal"><p className="micro kicker">Open brief</p><h2>Расскажите, где работает ваша команда.</h2><p>Мы начнём не с коммерческого предложения, а с пяти вопросов о среде и операциях.</p><Link className="primary-action" href="/contacts/#form">Открыть бриф <span className="icon-arrow" aria-hidden="true" /></Link></div>
      </section>
    </main>
  );
}
