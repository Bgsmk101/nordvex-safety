import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";

const directions = [
  ["01", "Arctic X", "Климатическая защита", "−50 °C / ветер / осадки", "arctic"],
  ["02", "Weld Core", "Огнестойкая экипировка", "искры / тепло / металл", "weld"],
  ["03", "Vector Hi", "Круговая видимость", "дороги / высота / трафик", "vector"],
  ["04", "Chem Shield", "Барьерные комплекты", "пыль / аэрозоли / загрязнение", "chem"],
  ["05", "Urban Shell", "Мобильные службы", "склад / сервис / инфраструктура", "urban"],
];

const industries = [
  ["01", "Нефтегаз", "Северные площадки и открытая добыча"],
  ["02", "Металлургия", "Горячие цеха и ремонтные работы"],
  ["03", "Инфраструктура", "Строительство, дороги и высота"],
  ["04", "Логистика", "Складские комплексы и сервисные службы"],
];

export default function HomePage() {
  return (
    <main className="page" id="main">
      <section className="home-hero">
        <div className="content-frame home-hero-grid">
          <div className="home-hero-copy">
            <p className="micro kicker"><span>NVX / 01</span> Инженерные системы защиты</p>
            <h1>Защита, встроенная в производство.</h1>
            <p className="hero-lead">Проектируем и производим спецодежду под климат, риск и реальную механику рабочей смены.</p>
            <div className="action-row">
              <Link className="primary-action" href="/catalog/">Изучить системы</Link>
              <Link className="text-link" href="/contacts/#form">Запросить тестовый комплект</Link>
            </div>
            <div className="hero-protocol" aria-label="Ключевые возможности">
              <span><b>01</b> Серийный выпуск</span>
              <span><b>02</b> Контрактная разработка</span>
              <span><b>03</b> Корпоративная идентификация</span>
            </div>
          </div>

          <figure className="hero-portrait">
            <Image src={asset("/images/nordvex-hero.webp")} alt="Специалист в защитном комплекте NORDVEX на производстве" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="hero-portrait-shade" />
            <figcaption><span>Система AX / 04</span><span>Industrial field test</span></figcaption>
          </figure>
        </div>
      </section>

      <div className="signal-line" aria-label="Направления работы">
        <div className="content-frame signal-line-inner">
          <span>СИЗ</span><i />
          <span>Спецодежда</span><i />
          <span>Размерные матрицы</span><i />
          <span>Северный климат</span><i />
          <span>Серийные поставки</span>
        </div>
      </div>

      <section className="content-section system-section">
        <div className="content-frame">
          <header className="section-intro reveal">
            <p className="micro kicker">02 / Продуктовая архитектура</p>
            <div><h2>Не отдельные вещи.<br />Совместимая экипировка.</h2><p>Каждый элемент проектируется внутри общей системы: верхний слой, утепление, видимость, фурнитура и персональные СИЗ не мешают друг другу.</p></div>
          </header>

          <div className="system-layout">
            <div className="system-directory reveal">
              {directions.map(([number, title, label, note, id]) => (
                <Link href={`/catalog/#${id}`} key={id}>
                  <small>{number}</small>
                  <span><strong>{title}</strong><em>{label}</em></span>
                  <span>{note}</span>
                </Link>
              ))}
            </div>
            <figure className="system-suit reveal">
              <Image src={asset("/images/products/arctic-x.webp")} alt="Утеплённый защитный комплект Arctic X" fill sizes="(max-width: 900px) 100vw, 40vw" />
              <figcaption><span>Arctic X / защита до −50 °C</span><span>Система AX–05</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="content-frame proof-grid">
          <div className="proof-statement reveal"><p className="micro kicker">Проверяемое качество</p><h2>От прототипа<br />до повторяемой серии.</h2></div>
          <div className="proof-metrics">
            <div className="reveal"><strong data-count="42" data-suffix="+">42+</strong><span>базовые модели в продуктовой матрице</span></div>
            <div className="reveal"><strong data-count="18">18</strong><span>сценариев отраслевой комплектации</span></div>
            <div className="reveal"><strong data-count="7">7</strong><span>контрольных точек производства</span></div>
            <div className="reveal"><strong data-count="72" data-suffix=" ч">72 ч</strong><span>до готовности первого тестового комплекта</span></div>
          </div>
        </div>
      </section>

      <section className="content-section process-feature">
        <div className="content-frame editorial-split">
          <figure className="editorial-image reveal">
            <Image src={asset("/images/nordvex-production.webp")} alt="Изготовление защитной одежды на производстве NORDVEX" fill sizes="(max-width: 900px) 100vw, 58vw" />
            <figcaption>Узел 07 / усиленный шов / входной контроль материала</figcaption>
          </figure>
          <div className="editorial-copy reveal">
            <p className="micro kicker">03 / Производство</p>
            <h2>Конструкция рождается на линии, а не в презентации.</h2>
            <p>Технолог, конструктор и производство работают с одним паспортом модели. Изменения после полевого теста сразу попадают в эталон серии.</p>
            <ul className="plain-specs"><li>Прототип и примерка</li><li>Полевое тестирование</li><li>Карта критических узлов</li><li>Контроль повторной партии</li></ul>
            <Link className="text-link" href="/production/">Посмотреть производственный цикл</Link>
          </div>
        </div>
      </section>

      <section className="content-section industry-index-section">
        <div className="content-frame">
          <header className="section-intro reveal">
            <p className="micro kicker">04 / Рабочая среда</p>
            <div><h2>Сначала условия.<br />Потом изделие.</h2><p>Одинаковая куртка не может одинаково хорошо работать в литейном цехе, на ветру и в движении между складом и рампой.</p></div>
          </header>
          <div className="industry-index reveal">
            {industries.map(([number, title, note]) => <Link href="/industries/" key={number}><span>{number}</span><strong>{title}</strong><em>{note}</em></Link>)}
          </div>
        </div>
      </section>

      <section className="brief-section">
        <div className="content-frame brief-layout reveal">
          <p className="micro kicker">Следующий шаг</p>
          <h2>Поставьте задачу.<br />Мы соберём систему.</h2>
          <p>Опишите климат, операции и численность команды. В ответ — состав комплекта, логика материалов и план тестирования.</p>
          <Link className="primary-action primary-action--light" href="/contacts/#form">Начать проект</Link>
        </div>
      </section>
    </main>
  );
}
