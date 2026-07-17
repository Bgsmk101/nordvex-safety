import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Производство",
  description: "Материалы, разработка, испытания и контроль производства NORDVEX.",
};

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
  <main className="page" id="main">
    <section className="page-hero content-frame" data-index="04">
      <div>
        <div className="breadcrumbs">
          <a href={`${basePath}/`}>NORDVEX</a>
          <span>/</span>
          <strong>Производство</strong>
        </div>
        <h1>
          От риска
          <br />
          до серии
        </h1>
      </div>
      <p className="page-lead">Сначала мы изучаем рабочую среду и движение сотрудника, затем подбираем материалы, создаём прототип и проверяем его в реальной смене. Только после этого модель выходит в серию.</p>
    </section>
    <section className="section content-frame">
      <div className="section-head reveal">
        <div>
          <p className="micro kicker">Метод NORDVEX</p>
        </div>
        <div>
          <h2 className="section-title">
            Пять этапов.
            <br />
            <em>Ноль догадок.</em>
          </h2>
        </div>
      </div>
      <article className="process-line reveal">
        <div className="step">01</div>
        <div>
          <h2>Аудит рабочей среды</h2>
          <p>Фиксируем реальные воздействия на сотрудника: температуру, движение, загрязнение, точки контакта и обязательные СИЗ.</p>
          <div className="process-specs">
            <div>
              <strong>12</strong>
              <span>параметров риска</span>
            </div>
            <div>
              <strong>1</strong>
              <span>карта маршрута</span>
            </div>
            <div>
              <strong>3</strong>
              <span>уровня нагрузки</span>
            </div>
          </div>
        </div>
      </article>
      <article className="process-line reveal">
        <div className="step">02</div>
        <div>
          <h2>Материальная архитектура</h2>
          <p>Выбираем не одну ткань, а систему слоёв. Проверяем пароперенос, истирание, усадку и устойчивость защитных свойств.</p>
          <div className="process-specs">
            <div>
              <strong>4</strong>
              <span>функциональных слоя</span>
            </div>
            <div>
              <strong>60+</strong>
              <span>тестовых циклов</span>
            </div>
            <div>
              <strong>0</strong>
              <span>случайных решений</span>
            </div>
          </div>
        </div>
      </article>
      <article className="process-line reveal">
        <div className="step">03</div>
        <div>
          <h2>Анатомический прототип</h2>
          <p>Строим конструкцию вокруг движения: подъём рук, работа на колене, лестницы, страховочная система и инструмент.</p>
          <div className="process-specs">
            <div>
              <strong>8</strong>
              <span>зон артикуляции</span>
            </div>
            <div>
              <strong>2</strong>
              <span>цикла примерки</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>контроль посадки</span>
            </div>
          </div>
        </div>
      </article>
      <article className="process-line reveal">
        <div className="step">04</div>
        <div>
          <h2>Пилотная эксплуатация</h2>
          <p>Тестовая партия уходит в реальную смену. Собираем обратную связь от сотрудников и инженеров по охране труда.</p>
          <div className="process-specs">
            <div>
              <strong>30</strong>
              <span>дней испытаний</span>
            </div>
            <div>
              <strong>3</strong>
              <span>группы пользователей</span>
            </div>
            <div>
              <strong>1</strong>
              <span>отчёт по правкам</span>
            </div>
          </div>
        </div>
      </article>
      <article className="process-line reveal">
        <div className="step">05</div>
        <div>
          <h2>Серия и паспорт</h2>
          <p>После утверждения запускаем серийное производство. Каждая модель получает цифровой паспорт и историю изменений.</p>
          <div className="process-specs">
            <div>
              <strong>7</strong>
              <span>контрольных точек</span>
            </div>
            <div>
              <strong>1</strong>
              <span>единый эталон</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>повторяемость заказа</span>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section className="split-panel section-dark">
      <div className="split-copy reveal">
        <div>
          <p className="micro kicker">Контроль качества</p>
          <h2>
            Каждый
            <br />
            узел
            <br />
            считается
          </h2>
        </div>
        <blockquote>Шов, молния, световозвращающая лента и усиление рассматриваются как элементы одной защитной цепи.</blockquote>
      </div>
      <div className="split-visual split-visual--quality">
        <div className="quality-board" aria-label="Контрольные точки производства NORDVEX">
          <div><span>01</span><strong>Входной контроль</strong><small>Материал и фурнитура</small></div>
          <div><span>02</span><strong>Карта раскроя</strong><small>Точность деталей</small></div>
          <div><span>03</span><strong>Аудит швов</strong><small>Нагрузка и герметичность</small></div>
          <div><span>04</span><strong>Финальная проверка</strong><small>Эталон и паспорт изделия</small></div>
        </div>
      </div>
    </section>
  </main>
  );
}
