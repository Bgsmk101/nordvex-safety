import type { Metadata } from "next";

export const metadata: Metadata = { title: "Каталог" };

const products = [
  {
    id: "arctic",
    tag: "Климат",
    title: "Arctic X",
    image: "https://images.pexels.com/photos/35082106/pexels-photo-35082106.jpeg?cs=srgb&dl=pexels-safi-erneste-165511538-35082106.jpg&fm=jpg",
    text: "Многослойные утеплённые комплекты для открытых площадок, северных регионов и длительной работы на холоде.",
    bullets: ["ветро- и влагозащитные материалы", "регулируемая вентиляция", "совместимость с утепляющими слоями"],
  },
  {
    id: "weld",
    tag: "Огонь",
    title: "Weld Core",
    image: "https://images.pexels.com/photos/5362681/pexels-photo-5362681.jpeg?cs=srgb&dl=pexels-hassan-yahia-3582980-5362681.jpg&fm=jpg",
    text: "Огнестойкие комплекты для сварочных, литейных и ремонтных работ в условиях искр и кратковременного теплового воздействия.",
    bullets: ["огнестойкие ткани и нити", "усиление локтей и коленей", "защищённая фурнитура"],
  },
  {
    id: "vector",
    tag: "Видимость",
    title: "Vector Hi",
    image: "https://images.pexels.com/photos/34670925/pexels-photo-34670925.jpeg?cs=srgb&dl=pexels-bymuratisikofficial-34670925.jpg&fm=jpg",
    text: "Сигнальная одежда круговой видимости для дорожных, строительных, складских и аварийных бригад.",
    bullets: ["флуоресцентные материалы", "световозвращающие элементы", "анатомичный крой для движения"],
  },
  {
    id: "chem",
    tag: "Загрязнения",
    title: "Chem Shield",
    image: "https://images.pexels.com/photos/16368417/pexels-photo-16368417.jpeg?cs=srgb&dl=pexels-marianna-zuzanna-498248397-16368417.jpg&fm=jpg",
    text: "Барьерные комплекты для производств с повышенным уровнем пыли, аэрозолей и технологических загрязнений.",
    bullets: ["герметизированные швы", "защищённые манжеты", "материалы с лёгкой очисткой"],
  },
  {
    id: "urban",
    tag: "Мобильность",
    title: "Urban Shell",
    image: "https://images.pexels.com/photos/36122947/pexels-photo-36122947.jpeg?cs=srgb&dl=pexels-james-richardson-2159544295-36122947.jpg&fm=jpg",
    text: "Лёгкая рабочая форма для складов, сервисных подразделений и городских инфраструктурных служб.",
    bullets: ["облегчённые износостойкие ткани", "карманы под инструмент и устройства", "корпоративная персонализация"],
  },
];

export default function CatalogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow">Продуктовая матрица</p><h1>Каталог систем защиты</h1></div>
          <p>Пять направлений, которые закрывают основные производственные риски. Каждую модель можно адаптировать под климат, регламент и фирменный стиль предприятия.</p>
        </div>
      </section>
      <section className="section">
        <div className="container catalog-list">
          {products.map((product) => (
            <article className="catalog-item" id={product.id} key={product.id}>
              <div className="catalog-item-media"><img src={product.image} alt={product.title} /></div>
              <div className="catalog-item-body">
                <span className="tag">{product.tag}</span>
                <h2>{product.title}</h2>
                <p>{product.text}</p>
                <ul>{product.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
