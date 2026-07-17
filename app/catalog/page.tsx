import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог систем спецодежды и средств индивидуальной защиты NORDVEX.",
};

const products = [
  { id: "arctic-x", category: "climate", label: "Климат", title: "Arctic X", code: "AX.01", image: "arctic-x.svg", text: "Многослойная зимняя система для открытых площадок и длительной работы при экстремально низких температурах." },
  { id: "weld-core", category: "fire", label: "Огонь", title: "Weld Core", code: "WC.02", image: "weld-core.svg", text: "Огнестойкий комплект для сварочных, литейных и ремонтных работ с усилением зон повышенной нагрузки." },
  { id: "vector-hi", category: "visibility", label: "Видимость", title: "Vector Hi", code: "VH.03", image: "vector-hi.svg", text: "Сигнальная система круговой видимости для дорожных, складских и аварийных бригад." },
  { id: "chem-shield", category: "chemical", label: "Загрязнения", title: "Chem Shield", code: "CS.04", image: "chem-shield.svg", text: "Барьерный комплект от аэрозолей, пыли и промышленного загрязнения с защищёнными узлами." },
  { id: "urban-shell", category: "mobility", label: "Мобильность", title: "Urban Shell", code: "US.05", image: "urban-shell.svg", text: "Облегчённая инженерная форма для сервисных служб, монтажа и городских инфраструктурных объектов." },
  { id: "thermo-grid", category: "climate", label: "Первый слой", title: "Thermo Grid", code: "TG.06", image: "thermo-grid.svg", text: "Функциональный первый слой для управления влагой и поддержания стабильного микроклимата." },
];

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <main id="main">
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div>
            <p className="eyebrow">Каталог NORDVEX</p>
            <h1>Системы профессиональной защиты</h1>
          </div>
          <p>Выберите ведущий риск и сравните готовые комплекты. Все модели можно адаптировать под требования предприятия, фирменный стиль и размерную матрицу.</p>
        </div>
      </section>

      <section className="catalog-section">
        <div className="container filter-bar" aria-label="Фильтр каталога">
          <button className="active" data-filter="all">Все системы</button>
          <button data-filter="climate">Климат</button>
          <button data-filter="fire">Огонь</button>
          <button data-filter="visibility">Видимость</button>
          <button data-filter="chemical">Загрязнения</button>
          <button data-filter="mobility">Мобильность</button>
        </div>
        <div className="container product-grid catalog-product-grid">
          {products.map((product) => (
            <article className="product-card catalog-product-card" id={product.id} data-category={product.category} key={product.id}>
              <div className="product-card-image">
                <Image src={`${basePath}/images/products/${product.image}`} alt={product.title} width={720} height={900} unoptimized />
              </div>
              <div className="product-card-body">
                <div className="product-meta"><span>{product.label}</span><span>{product.code}</span></div>
                <h2>{product.title}</h2>
                <p>{product.text}</p>
                <a className="plain-link" href={`${basePath}/contacts/#form`}>Запросить комплектацию</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-muted">
        <div className="container section-heading">
          <div><p className="eyebrow">Контрактная разработка</p><h2>Нет готовой модели — спроектируем</h2></div>
          <div><p>Проводим аудит условий труда, создаём прототип и передаём тестовую партию на эксплуатацию.</p><a className="button button-primary" href={`${basePath}/contacts/#form`}>Поставить задачу</a></div>
        </div>
      </section>
    </main>
  );
}
