import type { Metadata } from "next";

export const metadata: Metadata = { title: "Отрасли" };

const features = [
  {
    tag: "Нефтегаз",
    title: "Северные площадки",
    image: "https://images.pexels.com/photos/35082106/pexels-photo-35082106.jpeg?cs=srgb&dl=pexels-safi-erneste-165511538-35082106.jpg&fm=jpg",
    text: "Система учитывает длительное пребывание на открытом воздухе, ветер, осадки и переходы между тёплыми и холодными зонами.",
  },
  {
    tag: "Металлургия",
    title: "Горячие работы",
    image: "https://images.pexels.com/photos/5362681/pexels-photo-5362681.jpeg?cs=srgb&dl=pexels-hassan-yahia-3582980-5362681.jpg&fm=jpg",
    text: "Огнестойкие материалы, защищённая фурнитура и усиление зон максимальной механической нагрузки.",
  },
  {
    tag: "Строительство",
    title: "Высота и движение",
    image: "https://images.pexels.com/photos/34670925/pexels-photo-34670925.jpeg?cs=srgb&dl=pexels-bymuratisikofficial-34670925.jpg&fm=jpg",
    text: "Свобода движения, круговая видимость, совместимость со страховочной системой и удобное размещение инструмента.",
  },
  {
    tag: "Логистика",
    title: "Интенсивная смена",
    image: "https://images.pexels.com/photos/36122947/pexels-photo-36122947.jpeg?cs=srgb&dl=pexels-james-richardson-2159544295-36122947.jpg&fm=jpg",
    text: "Лёгкая форма, устойчивая к частой стирке и постоянному движению между складом, рампой и открытой площадкой.",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow">Рабочие сценарии</p><h1>Отраслевые решения</h1></div>
          <p>Мы начинаем с условий конкретной смены: воздействия, маршрута сотрудника, необходимых средств защиты и частоты обслуживания комплекта.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {features.map((feature) => (
            <article className="split-feature" key={feature.title}>
              <div className="split-media"><img src={feature.image} alt={feature.title} /></div>
              <div className="split-copy"><span className="tag">{feature.tag}</span><h2>{feature.title}</h2><p>{feature.text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
