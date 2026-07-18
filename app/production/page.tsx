import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";

export const metadata: Metadata = { title: "Производство" };

const stages = [
  ["01", "Аудит среды", "Карта операций, рисков и смежных СИЗ.", "Field map"],
  ["02", "Техническое задание", "Состав комплекта, материалы и конструктивные узлы.", "Design brief"],
  ["03", "Прототип", "Один комплект для проверки посадки и механики движения.", "Sample 01"],
  ["04", "Полевое испытание", "Эксплуатация на смене и обратная связь от сотрудников.", "Field test"],
  ["05", "Эталон серии", "Фиксированная конструкция, карта узлов и размерная матрица.", "Master spec"],
  ["06", "Повторная поставка", "Контроль отклонений и история всех изменений модели.", "Series control"],
];

export default function ProductionPage() {
  return (
    <main className="page" id="main">
      <section className="production-hero">
        <div className="content-frame production-hero-grid">
          <div className="production-hero-copy"><p className="micro kicker">04 / Производство</p><h1>Точность, которую можно повторить.</h1><p>Качество серии определяется не лучшим образцом, а тем, насколько стабильно каждый следующий комплект соответствует эталону.</p></div>
          <figure className="production-hero-image">
            <Image src={asset("/images/nordvex-production.webp")} alt="Пошив технической защитной одежды" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
            <figcaption><span>Line 02 / seam control</span><span>Revision 4.8</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="production-stages">
        <div className="content-frame">
          <header className="section-intro reveal"><p className="micro kicker">Производственный протокол</p><div><h2>Шесть этапов.<br />Одна версия правды.</h2><p>У технолога, конструктора, отдела качества и заказчика — один паспорт изделия и понятная точка согласования на каждом этапе.</p></div></header>
          <div className="stage-table">
            {stages.map(([number, title, result, code]) => <div className="stage-row reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{result}</p><small>{code}</small></div>)}
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="content-frame quality-layout">
          <div className="quality-copy reveal"><p className="micro kicker">Quality gate / 07</p><h2>Проверяем изделие целиком.</h2><p>Материал, нити, молнии, усиления и световозвращающие элементы могут пройти отдельные тесты — и всё равно конфликтовать в готовом комплекте. Поэтому финальная проверка всегда системная.</p><Link className="text-link text-link--light" href="/contacts/#form">Запросить карту контроля</Link></div>
          <div className="quality-board reveal">
            <div><span>01</span><strong>Входной контроль</strong><p>Материал и фурнитура сверяются с паспортом партии.</p></div>
            <div><span>02</span><strong>Критические узлы</strong><p>Швы, усиления, застёжки и точки повышенной нагрузки.</p></div>
            <div><span>03</span><strong>Размерный аудит</strong><p>Ключевые измерения контролируются на каждой партии.</p></div>
            <div><span>04</span><strong>Финальная система</strong><p>Посадка, движение, маркировка и комплектность.</p></div>
          </div>
        </div>
      </section>

      <section className="materials-section">
        <div className="content-frame materials-layout reveal">
          <div><p className="micro kicker">Материалы</p><h2>Функция до фактуры.</h2></div>
          <div className="material-row"><span>NordShell</span><b>240</b><p>Ветро- и влагозащитный внешний слой</p><small>outer / climate</small></div>
          <div className="material-row"><span>Aramid Core</span><b>FR</b><p>Огнестойкая основа и усиление узлов</p><small>thermal / weld</small></div>
          <div className="material-row"><span>Grid Flex</span><b>195</b><p>Износостойкая ткань для высокой мобильности</p><small>service / logistics</small></div>
        </div>
      </section>
    </main>
  );
}
