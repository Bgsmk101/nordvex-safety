import Link from "next/link";

const images = {
  hero: "https://images.pexels.com/photos/35082106/pexels-photo-35082106.jpeg?cs=srgb&dl=pexels-safi-erneste-165511538-35082106.jpg&fm=jpg",
  chemical: "https://images.pexels.com/photos/16368417/pexels-photo-16368417.jpeg?cs=srgb&dl=pexels-marianna-zuzanna-498248397-16368417.jpg&fm=jpg",
  fire: "https://images.pexels.com/photos/5362681/pexels-photo-5362681.jpeg?cs=srgb&dl=pexels-hassan-yahia-3582980-5362681.jpg&fm=jpg",
  production: "https://images.pexels.com/photos/23232388/pexels-photo-23232388.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-23232388.jpg&fm=jpg",
  construction: "https://images.pexels.com/photos/34670925/pexels-photo-34670925.jpeg?cs=srgb&dl=pexels-bymuratisikofficial-34670925.jpg&fm=jpg",
  logistics: "https://images.pexels.com/photos/36122947/pexels-photo-36122947.jpeg?cs=srgb&dl=pexels-james-richardson-2159544295-36122947.jpg&fm=jpg",
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Производитель профессиональной экипировки</p>
            <h1>Спецодежда, которая работает вместе с человеком</h1>
            <p className="hero-lead">Проектируем комплекты под климат, производственный риск и реальные движения сотрудника в течение смены.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/catalog/">Смотреть каталог</Link>
              <Link className="button button-light" href="/contacts/#request">Получить образцы</Link>
            </div>
            <p className="hero-note">Серийное производство · корпоративный стиль · размерные матрицы</p>
          </div>
          <div className="hero-media">
            <img src={images.hero} alt="Специалист в защитной спецодежде на производстве" />
            <div className="hero-badge">
              <strong>Комплект как единая система защиты</strong>
              <span>Климат · видимость · огонь · загрязнение</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>42+</strong><span>базовые модели в совместимой продуктовой матрице</span></div>
          <div className="stat"><strong>18</strong><span>отраслевых сценариев комплектации</span></div>
          <div className="stat"><strong>7</strong><span>этапов производственного контроля</span></div>
          <div className="stat"><strong>72 ч</strong><span>на подготовку тестового комплекта после брифа</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Каталог</p>
              <h2>Пять направлений защиты</h2>
            </div>
            <p>Каждое направление решает конкретную задачу. Модели можно адаптировать под корпоративный стиль, климат и требования предприятия.</p>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <div className="product-card-media"><img src={images.hero} alt="Зимняя промышленная спецодежда" /></div>
              <div className="product-card-body"><small>Климат</small><h3>Arctic X</h3><p>Утеплённые многослойные комплекты для открытых площадок и низких температур.</p><Link href="/catalog/#arctic">Подробнее</Link></div>
            </article>
            <article className="product-card">
              <div className="product-card-media"><img src={images.fire} alt="Огнестойкая экипировка для сварочных работ" /></div>
              <div className="product-card-body"><small>Огонь</small><h3>Weld Core</h3><p>Огнестойкие решения для сварочных, литейных и ремонтных работ.</p><Link href="/catalog/#weld">Подробнее</Link></div>
            </article>
            <article className="product-card">
              <div className="product-card-media"><img src={images.construction} alt="Сигнальная рабочая одежда" /></div>
              <div className="product-card-body"><small>Видимость</small><h3>Vector Hi</h3><p>Сигнальная одежда круговой видимости для стройки, дорог и логистики.</p><Link href="/catalog/#vector">Подробнее</Link></div>
            </article>
            <article className="product-card">
              <div className="product-card-media"><img src={images.chemical} alt="Защитная одежда от промышленного загрязнения" /></div>
              <div className="product-card-body"><small>Загрязнения</small><h3>Chem Shield</h3><p>Барьерные материалы, герметичные узлы и защита от производственных загрязнений.</p><Link href="/catalog/#chem">Подробнее</Link></div>
            </article>
            <article className="product-card">
              <div className="product-card-media"><img src={images.logistics} alt="Рабочая одежда для логистики" /></div>
              <div className="product-card-body"><small>Мобильность</small><h3>Urban Shell</h3><p>Лёгкая форма для сервисных служб, складов и инфраструктурных объектов.</p><Link href="/catalog/#urban">Подробнее</Link></div>
            </article>
            <article className="product-card">
              <div className="product-card-media"><img src={images.production} alt="Производство профессиональной спецодежды" /></div>
              <div className="product-card-body"><small>Разработка</small><h3>Custom Lab</h3><p>Контрактная разработка комплекта с прототипом, испытаниями и размерной матрицей.</p><Link href="/production/">Как мы работаем</Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Отрасли</p><h2>Решения под реальные условия</h2></div>
            <p>Комплектация начинается не с выбора куртки, а с понимания среды, продолжительности воздействия и маршрута сотрудника.</p>
          </div>
          <div className="industry-grid">
            <article className="industry-card"><span>01</span><div><h3>Нефтегаз и северные площадки</h3><p>Теплозащита, ветер, статическая работа и резкие переходы между зонами.</p></div></article>
            <article className="industry-card"><span>02</span><div><h3>Металлургия и горячие работы</h3><p>Искры, контактное тепло, усиленные зоны и совместимость со средствами защиты.</p></div></article>
            <article className="industry-card"><span>03</span><div><h3>Строительство и инфраструктура</h3><p>Высота, движение, видимость и удобное размещение инструмента.</p></div></article>
            <article className="industry-card"><span>04</span><div><h3>Логистика и сервисные службы</h3><p>Высокая подвижность, регулярная стирка и понятная идентификация персонала.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Процесс</p><h2>От задачи до серийной поставки</h2></div>
            <p>Работа разделена на понятные этапы. На каждом из них есть конкретный результат и точка согласования.</p>
          </div>
          <div className="steps">
            <div className="step"><strong>01</strong><h3>Аудит условий</h3><p>Фиксируем риски, климат, движения и действующие нормы.</p></div>
            <div className="step"><strong>02</strong><h3>Проектирование</h3><p>Подбираем материалы, конструкцию и состав комплекта.</p></div>
            <div className="step"><strong>03</strong><h3>Тестовая партия</h3><p>Проверяем изделие в реальной эксплуатации и собираем обратную связь.</p></div>
            <div className="step"><strong>04</strong><h3>Серия и поддержка</h3><p>Запускаем поставку, сохраняем паспорт модели и размерную матрицу.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div><h2>Начните с тестового комплекта</h2><p>Опишите условия работы — мы предложим состав системы и подготовим образцы для примерки.</p></div>
          <Link className="button button-dark" href="/contacts/#request">Поставить задачу</Link>
        </div>
      </section>
    </main>
  );
}
