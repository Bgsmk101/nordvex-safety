import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог систем спецодежды и средств индивидуальной защиты NORDVEX.",
};

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
  <main className="page" id="main">
    <section className="page-hero content-frame" data-index="02">
      <div>
        <div className="breadcrumbs">
          <a href={`${basePath}/`}>NORDVEX</a>
          <span>/</span>
          <strong>Каталог</strong>
        </div>
        <h1>
          Продуктовый
          <br />
          атлас
        </h1>
      </div>
      <p className="page-lead">Не отдельные изделия, а совместимые защитные слои. Фильтруйте каталог по ведущему риску и собирайте систему под задачу.</p>
    </section>
    <div className="catalog-controls content-frame" aria-label="Фильтр каталога">
      <button className="filter-btn active" data-filter="all">Все системы</button>
      <button className="filter-btn" data-filter="climate">Климат</button>
      <button className="filter-btn" data-filter="fire">Огонь</button>
      <button className="filter-btn" data-filter="visibility">Видимость</button>
      <button className="filter-btn" data-filter="chemical">Загрязнения</button>
      <button className="filter-btn" data-filter="mobility">Мобильность</button>
    </div>
    <section className="catalog-grid content-frame">
      <article className="catalog-card reveal" id="arctic-x" data-category="climate">
        <div className="catalog-top">
          <span>01 / Climate</span>
          <span>NVX–AX.01</span>
        </div>
        <div className="catalog-visual">
          <Image src={`${basePath}/images/products/arctic-x.svg`} alt="Комплект Arctic X" width={720} height={900} unoptimized />
        </div>
        <div className="catalog-meta">
          <div>
            <h2>Arctic X</h2>
            <p>Многослойная зимняя система для открытых площадок и длительной работы при экстремально низких температурах.</p>
          </div>
          <div className="catalog-code">AX.01</div>
        </div>
      </article>
      <article className="catalog-card reveal" id="weld-core" data-category="fire">
        <div className="catalog-top">
          <span>02 / Flame</span>
          <span>NVX–WC.02</span>
        </div>
        <div className="catalog-visual">
          <Image src={`${basePath}/images/products/weld-core.svg`} alt="Комплект Weld Core" width={720} height={900} unoptimized />
        </div>
        <div className="catalog-meta">
          <div>
            <h2>Weld Core</h2>
            <p>Огнестойкий комплект для сварочных, литейных и ремонтных работ с усилением локтей, коленей и фронтальной зоны.</p>
          </div>
          <div className="catalog-code">WC.02</div>
        </div>
      </article>
      <article className="catalog-card reveal" id="vector-hi" data-category="visibility">
        <div className="catalog-top">
          <span>03 / Visibility</span>
          <span>NVX–VH.03</span>
        </div>
        <div className="catalog-visual">
          <Image src={`${basePath}/images/products/vector-hi.svg`} alt="Комплект Vector Hi" width={720} height={900} unoptimized />
        </div>
        <div className="catalog-meta">
          <div>
            <h2>Vector Hi</h2>
            <p>Сигнальная система круговой видимости для дорожных, складских и аварийных бригад.</p>
          </div>
          <div className="catalog-code">VH.03</div>
        </div>
      </article>
      <article className="catalog-card reveal" id="chem-shield" data-category="chemical">
        <div className="catalog-top">
          <span>04 / Chemical</span>
          <span>NVX–CS.04</span>
        </div>
        <div className="catalog-visual">
          <Image src={`${basePath}/images/products/chem-shield.svg`} alt="Комплект Chem Shield" width={720} height={900} unoptimized />
        </div>
        <div className="catalog-meta">
          <div>
            <h2>Chem Shield</h2>
            <p>Барьерный комплект от аэрозолей, пыли и промышленного загрязнения с герметизированными узлами.</p>
          </div>
          <div className="catalog-code">CS.04</div>
        </div>
      </article>
      <article className="catalog-card reveal" id="urban-shell" data-category="mobility">
        <div className="catalog-top">
          <span>05 / Mobility</span>
          <span>NVX–US.05</span>
        </div>
        <div className="catalog-visual">
          <Image src={`${basePath}/images/products/urban-shell.svg`} alt="Комплект Urban Shell" width={720} height={900} unoptimized />
        </div>
        <div className="catalog-meta">
          <div>
            <h2>Urban Shell</h2>
            <p>Облегчённая инженерная форма для сервисных служб, монтажа и городских инфраструктурных объектов.</p>
          </div>
          <div className="catalog-code">US.05</div>
        </div>
      </article>
      <article className="catalog-card reveal" id="thermo-grid" data-category="climate">
        <div className="catalog-top">
          <span>06 / Base layer</span>
          <span>NVX–TG.06</span>
        </div>
        <div className="catalog-visual">
          <Image src={`${basePath}/images/products/thermo-grid.svg`} alt="Комплект Thermo Grid" width={720} height={900} unoptimized />
        </div>
        <div className="catalog-meta">
          <div>
            <h2>Thermo Grid</h2>
            <p>Функциональный первый слой для управления влагой и поддержания стабильного микроклимата.</p>
          </div>
          <div className="catalog-code">TG.06</div>
        </div>
      </article>
    </section>
    <section className="section content-frame">
      <div className="section-head reveal">
        <div>
          <p className="micro kicker">Контрактная разработка</p>
        </div>
        <div>
          <h2 className="section-title">
            Нет готовой модели?
            <br />
            <em>Спроектируем систему.</em>
          </h2>
          <p className="section-intro">Проводим аудит условий труда, собираем размерную матрицу, создаём прототип и передаём тестовую партию на эксплуатацию.</p>
          <p>
            <a className="text-link" href={`${basePath}/contacts/#form`}>Поставить задачу инженеру</a>
          </p>
        </div>
      </div>
    </section>
  </main>
  );
}
