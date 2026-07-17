import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "NORDVEX — системы профессиональной защиты",
  description: "Системы профессиональной защиты и спецодежды для промышленности.",
};

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
  <main className="page" id="main">
    <section className="hero content-frame">
      <div className="hero-copy">
        <div>
          <p className="micro kicker">Производитель профессиональной экипировки</p>
          <h1 className="hero-title">
            <span className="hero-title-line">Рабочая</span>
            <span className="hero-title-line outline">среда</span>
            <span className="hero-title-line">под</span>
            <span className="hero-title-line hero-title-line--long">контролем</span>
          </h1>
          <p className="hero-lead">NORDVEX проектирует комплекты СИЗ и спецодежды как единую систему: под климат, риск, движение человека и регламент конкретного производства.</p>
          <p className="hero-sublead">Не отдельные вещи, а согласованные слои защиты, которые работают вместе на площадке, в цехе и на маршруте сотрудника.</p>
        </div>
        <div className="hero-bottom">
          <a className="text-link" href={`${basePath}/catalog/`}>Открыть продуктовый атлас</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-tag micro">
          <span>System / NVX-01</span>
          <span>Protection layer 03</span>
        </div>
        <div className="hero-suit">
          <Image src={`${basePath}/images/hero-suit.svg`} alt="Визуализация комплекта профессиональной экипировки NORDVEX" width={720} height={900} priority unoptimized />
        </div>
        <div className="hero-spec">Модульная конструкция, анатомический крой и совместимость слоёв позволяют собирать экипировку без разрыва между безопасностью и движением.</div>
      </div>
    </section>
    <div className="marquee">
      <div className="marquee-track">
        <span>Нефтегаз</span>
        <span>Металлургия</span>
        <span>Энергетика</span>
        <span>Строительство</span>
        <span>Логистика</span>
        <span>Химическая промышленность</span>
        <span>Нефтегаз</span>
        <span>Металлургия</span>
        <span>Энергетика</span>
        <span>Строительство</span>
        <span>Логистика</span>
        <span>Химическая промышленность</span>
      </div>
    </div>
    <section className="section content-frame">
      <div className="section-head reveal">
        <div>
          <p className="micro kicker">Масштаб системы</p>
        </div>
        <div>
          <h2 className="section-title">
            Не коллекция.
            <br />
            <em>Инфраструктура защиты.</em>
          </h2>
          <p className="section-intro">От первичного аудита рисков до серийной поставки и повторного заказа по цифровому паспорту изделия.</p>
        </div>
      </div>
      <div className="number-grid reveal">
        <div className="number-cell">
          <strong data-count="42" data-suffix="+">0</strong>
          <p>базовые модели в единой матрице совместимости</p>
        </div>
        <div className="number-cell">
          <strong data-count="18">0</strong>
          <p>отраслевых сценариев комплектации</p>
        </div>
        <div className="number-cell">
          <strong data-count="7">0</strong>
          <p>контрольных точек на каждом производственном цикле</p>
        </div>
        <div className="number-cell">
          <strong data-count="72" data-suffix="ч">0</strong>
          <p>на подготовку тестового комплекта после брифа</p>
        </div>
      </div>
    </section>
    <section className="section content-frame">
      <div className="section-head reveal">
        <div>
          <p className="micro kicker">Продуктовый атлас</p>
        </div>
        <div>
          <h2 className="section-title">
            Шесть систем.
            <br />
            Одна логика.
          </h2>
        </div>
      </div>
      <div className="product-ledger reveal">
        <a className="product-row" href={`${basePath}/catalog/#arctic-x`}>
          <span className="n">01</span>
          <h3>Arctic X</h3>
          <p>Защита при экстремально низких температурах</p>
          <span className="arrow" aria-hidden="true"></span>
        </a>
        <a className="product-row" href={`${basePath}/catalog/#weld-core`}>
          <span className="n">02</span>
          <h3>Weld Core</h3>
          <p>Огнестойкая экипировка для горячих работ</p>
          <span className="arrow" aria-hidden="true"></span>
        </a>
        <a className="product-row" href={`${basePath}/catalog/#vector-hi`}>
          <span className="n">03</span>
          <h3>Vector Hi</h3>
          <p>Сигнальная система круговой видимости</p>
          <span className="arrow" aria-hidden="true"></span>
        </a>
        <a className="product-row" href={`${basePath}/catalog/#chem-shield`}>
          <span className="n">04</span>
          <h3>Chem Shield</h3>
          <p>Барьер от промышленных загрязнений</p>
          <span className="arrow" aria-hidden="true"></span>
        </a>
        <a className="product-row" href={`${basePath}/catalog/#urban-shell`}>
          <span className="n">05</span>
          <h3>Urban Shell</h3>
          <p>Мобильная форма для инженерных служб</p>
          <span className="arrow" aria-hidden="true"></span>
        </a>
        <a className="product-row" href={`${basePath}/catalog/#thermo-grid`}>
          <span className="n">06</span>
          <h3>Thermo Grid</h3>
          <p>Первый слой с управлением влагой</p>
          <span className="arrow" aria-hidden="true"></span>
        </a>
      </div>
    </section>
    <section className="split-panel section-dark">
      <div className="split-copy reveal">
        <div>
          <p className="micro kicker">Материальная инженерия</p>
          <h2>
            Слой
            <br />
            за слоем
          </h2>
        </div>
        <blockquote>«Хорошая спецодежда перестаёт ощущаться на теле и начинает работать как продолжение производственного процесса».</blockquote>
      </div>
      <div className="split-visual split-visual--layers">
        <div className="layer-stack" aria-label="Четыре функциональных слоя системы NORDVEX">
          <div className="layer-sheet layer-sheet--outer">
            <span>04</span>
            <strong>Outer shell</strong>
            <small>Ветер, осадки и механическое воздействие</small>
          </div>
          <div className="layer-sheet layer-sheet--barrier">
            <span>03</span>
            <strong>Barrier</strong>
            <small>Защита от производственной среды</small>
          </div>
          <div className="layer-sheet layer-sheet--insulation">
            <span>02</span>
            <strong>Insulation</strong>
            <small>Стабильный тепловой контур</small>
          </div>
          <div className="layer-sheet layer-sheet--body">
            <span>01</span>
            <strong>Body layer</strong>
            <small>Отвод влаги и контакт с телом</small>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-dark">
      <div className="content-frame">
        <div className="section-head reveal">
          <div>
            <p className="micro kicker">Рабочие сценарии</p>
          </div>
          <div>
            <h2 className="section-title">
              Риск измерим.
              <br />
              <em>Решение конкретно.</em>
            </h2>
            <p className="section-intro">Мы не предлагаем одну куртку всем предприятиям. Система собирается из реального маршрута сотрудника и набора воздействий на смене.</p>
          </div>
        </div>
        <div className="case-strip reveal">
          <a className="case-card" data-code="01" href={`${basePath}/industries/`}>
            <p className="micro">Нефтегаз / Север</p>
            <div className="case-graph">
              <span style={{ "--h": "35%" } as CSSProperties}></span>
              <span style={{ "--h": "74%" } as CSSProperties}></span>
              <span style={{ "--h": "56%" } as CSSProperties}></span>
              <span style={{ "--h": "91%" } as CSSProperties}></span>
              <span style={{ "--h": "66%" } as CSSProperties}></span>
            </div>
            <div>
              <h3>−48°C и открытая площадка</h3>
              <p>Многослойный комплект с контролем теплопотерь и без ограничения амплитуды движения.</p>
            </div>
          </a>
          <a className="case-card" data-code="02" href={`${basePath}/industries/`}>
            <p className="micro">Металлургия / Цех</p>
            <div className="case-graph">
              <span style={{ "--h": "58%" } as CSSProperties}></span>
              <span style={{ "--h": "42%" } as CSSProperties}></span>
              <span style={{ "--h": "88%" } as CSSProperties}></span>
              <span style={{ "--h": "72%" } as CSSProperties}></span>
              <span style={{ "--h": "96%" } as CSSProperties}></span>
            </div>
            <div>
              <h3>Искры, жар и контактное тепло</h3>
              <p>Огнестойкая система с усилением зон максимальной нагрузки и быстрым сбросом тепла.</p>
            </div>
          </a>
          <a className="case-card" data-code="03" href={`${basePath}/industries/`}>
            <p className="micro">Логистика / 24×7</p>
            <div className="case-graph">
              <span style={{ "--h": "88%" } as CSSProperties}></span>
              <span style={{ "--h": "62%" } as CSSProperties}></span>
              <span style={{ "--h": "76%" } as CSSProperties}></span>
              <span style={{ "--h": "52%" } as CSSProperties}></span>
              <span style={{ "--h": "84%" } as CSSProperties}></span>
            </div>
            <div>
              <h3>Видимость и постоянное движение</h3>
              <p>Лёгкая сигнальная экипировка, рассчитанная на многократные циклы стирки.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
  );
}
