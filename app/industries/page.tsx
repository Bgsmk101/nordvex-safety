import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отраслевые решения",
  description: "Комплектация СИЗ и спецодеждой для нефтегаза, металлургии, энергетики и логистики.",
};

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
  <main className="page" id="main">
    <section className="page-hero content-frame" data-index="03">
      <div>
        <div className="breadcrumbs">
          <a href={`${basePath}/`}>NORDVEX</a>
          <span>/</span>
          <strong>Отрасли</strong>
        </div>
        <h1>
          Сначала среда.
          <br />
          Потом изделие.
        </h1>
      </div>
      <p className="page-lead">Каждая отрасль создаёт свой набор нагрузок. Мы переводим этот профиль риска в материал, конструкцию, фурнитуру и состав комплекта, чтобы система работала в реальной смене, а не только в презентации.</p>
    </section>
    <section className="industry-grid content-frame">
      <article className="industry-card dark reveal">
        <p className="micro">01 / Нефтегаз</p>
        <div>
          <h2>
            Северный
            <br />
            контур
          </h2>
          <p>Холод, ветер, открытые площадки, статическая работа и резкая смена активности. Решение строится на управляемой многослойности.</p>
        </div>
      </article>
      <article className="industry-card reveal">
        <p className="micro">02 / Металлургия</p>
        <div>
          <h2>
            Горячая
            <br />
            зона
          </h2>
          <p>Искры, брызги металла и контактное тепло. Крой исключает открытые карманы и зоны накопления горячих частиц.</p>
        </div>
      </article>
      <article className="industry-card reveal">
        <p className="micro">03 / Строительство</p>
        <div>
          <h2>
            Высота и
            <br />
            движение
          </h2>
          <p>Экипировка совместима со страховочной системой, наколенниками и инструментальным оснащением.</p>
        </div>
      </article>
      <article className="industry-card dark reveal">
        <p className="micro">04 / Логистика</p>
        <div>
          <h2>
            Видимость
            <br />
            24×7
          </h2>
          <p>Круговая сигнальная геометрия, малая масса и устойчивость к интенсивной эксплуатации и промышленной стирке.</p>
        </div>
      </article>
    </section>
    <section className="section content-frame">
      <div className="section-head reveal">
        <div>
          <p className="micro kicker">Матрица подбора</p>
        </div>
        <div>
          <h2 className="section-title">
            Один сотрудник.
            <br />
            <em>Несколько воздействий.</em>
          </h2>
          <p className="section-intro">Финальная комплектация учитывает не только должность, но и продолжительность воздействия, темп движения, климатическую зону и совместимость с другими СИЗ.</p>
        </div>
      </div>
      <div className="product-ledger reveal">
        <div className="product-row">
          <span className="n">A</span>
          <h3>Среда</h3>
          <p>Температура, осадки, загрязнение, искра, химический риск</p>
          <span className="arrow">01</span>
        </div>
        <div className="product-row">
          <span className="n">B</span>
          <h3>Движение</h3>
          <p>Статика, циклическая работа, высота, ограниченное пространство</p>
          <span className="arrow">02</span>
        </div>
        <div className="product-row">
          <span className="n">C</span>
          <h3>Смена</h3>
          <p>Продолжительность, переходы между зонами, частота переодевания</p>
          <span className="arrow">03</span>
        </div>
        <div className="product-row">
          <span className="n">D</span>
          <h3>Совместимость</h3>
          <p>Каска, респиратор, страховка, перчатки, защитная обувь</p>
          <span className="arrow">04</span>
        </div>
      </div>
    </section>
  </main>
  );
}
