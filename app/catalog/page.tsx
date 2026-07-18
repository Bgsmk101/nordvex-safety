import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";

export const metadata: Metadata = { title: "Каталог систем защиты" };

const products = [
  { id: "arctic", category: "climate", code: "AX–05", name: "Arctic X", role: "Многослойная защита от холода", image: "/images/products/arctic-x.webp", description: "Комплект для продолжительной работы на открытых площадках, ветра и резких переходов между климатическими зонами.", specs: [["Диапазон", "до −50 °C"], ["Слои", "3 + 1"], ["Материал", "NordShell 240"]] },
  { id: "weld", category: "thermal", code: "WC–12", name: "Weld Core", role: "Огнестойкий рабочий комплект", image: "/images/products/weld-core.webp", description: "Экипировка для сварочных, литейных и ремонтных операций с кратковременным тепловым воздействием.", specs: [["Защита", "огонь / искры"], ["Усиление", "aramid"], ["Швы", "FR thread"]] },
  { id: "vector", category: "visibility", code: "VH–03", name: "Vector Hi", role: "Система круговой видимости", image: "/images/products/vector-hi.webp", description: "Анатомичная сигнальная одежда для дорожных, строительных и аварийных команд в активном трафике.", specs: [["Обзор", "360°"], ["Класс", "high visibility"], ["Посадка", "dynamic"]] },
  { id: "chem", category: "barrier", code: "CS–08", name: "Chem Shield", role: "Барьер от загрязнений", image: "/images/products/chem-shield.webp", description: "Конструкция с защищёнными манжетами и легко очищаемыми материалами для пыли, аэрозолей и технологических загрязнений.", specs: [["Барьер", "particle"], ["Швы", "sealed"], ["Очистка", "industrial"]] },
  { id: "urban", category: "mobility", code: "US–21", name: "Urban Shell", role: "Лёгкая форма высокой мобильности", image: "/images/products/urban-shell.webp", description: "Рабочая система для складов, сервисных подразделений и инфраструктурных объектов с частой сменой операций.", specs: [["Плотность", "195 г/м²"], ["Цикл", "daily"], ["Крой", "mobility"]] },
  { id: "thermo", category: "climate", code: "TG–14", name: "Thermo Grid", role: "Функциональный утепляющий слой", image: "/images/products/thermo-grid.webp", description: "Совместимый средний слой с зональной теплоизоляцией и управлением влагой для переменной активности.", specs: [["Слой", "mid"], ["Тепло", "zonal"], ["Влага", "wicking"]] },
];

const filters = [["all", "Все системы"], ["climate", "Климат"], ["thermal", "Огонь"], ["visibility", "Видимость"], ["barrier", "Барьер"], ["mobility", "Мобильность"]];

export default function CatalogPage() {
  return (
    <main className="page" id="main">
      <section className="page-hero page-hero--catalog">
        <div className="content-frame page-hero-layout">
          <div><p className="micro kicker">02 / Каталог</p><h1>Системы,<br />а не униформа.</h1></div>
          <div className="page-hero-note"><span>06 базовых платформ</span><p>Модель адаптируется под климат, регламент предприятия, состав СИЗ и корпоративную идентификацию.</p></div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="content-frame">
          <div className="catalog-toolbar" aria-label="Фильтр каталога">
            <span className="micro">Фильтр / риск</span>
            <div>{filters.map(([value, label], index) => <button className={index === 0 ? "active" : ""} type="button" data-filter={value} key={value}>{label}</button>)}</div>
          </div>

          <div className="product-spec-grid">
            {products.map((product, index) => (
              <article className="product-spec-card reveal" id={product.id} data-category={product.category} key={product.id}>
                <div className="product-visual">
                  <span className="product-code">{product.code}</span>
                  <Image src={asset(product.image)} alt={`Защитный комплект ${product.name}`} fill sizes="(max-width: 760px) 100vw, 45vw" />
                </div>
                <div className="product-data">
                  <p className="micro">{String(index + 1).padStart(2, "0")} / {product.role}</p>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <dl>{product.specs.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
                  <Link className="text-link" href={`/contacts/?system=${product.id}#form`}>Запросить спецификацию</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-note">
        <div className="content-frame catalog-note-layout reveal">
          <p className="micro kicker">Custom Lab</p>
          <h2>Нужна другая конфигурация?</h2>
          <p>Соберём новую модель на основе отраслевого аудита: материалы, посадка, критические узлы и размерная матрица.</p>
          <Link className="primary-action primary-action--light" href="/contacts/#form">Обсудить разработку</Link>
        </div>
      </section>
    </main>
  );
}
