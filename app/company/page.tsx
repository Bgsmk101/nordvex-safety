import type { Metadata } from "next";

export const metadata: Metadata = { title: "Компания" };

export default function CompanyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow">О NORDVEX</p><h1>Инженерный подход к рабочей одежде</h1></div>
          <p>Мы рассматриваем спецодежду не как форму, а как инструмент, который должен снижать нагрузку, поддерживать безопасность и помогать человеку выполнять работу.</p>
        </div>
      </section>
      <section className="section">
        <div className="container values-grid">
          <article className="value-card"><h3>Сначала задача</h3><p>Не начинаем с выбора готовой модели. Сначала разбираем условия, риски и рабочий маршрут.</p></article>
          <article className="value-card"><h3>Проверка в эксплуатации</h3><p>Прототип оценивается не только технологом, но и сотрудниками, которые будут носить комплект.</p></article>
          <article className="value-card"><h3>Повторяемый результат</h3><p>Фиксируем паспорт модели и размерную матрицу, чтобы следующие поставки сохраняли качество.</p></article>
          <article className="value-card"><h3>Совместимость</h3><p>Учитываем каски, страховочные системы, обувь, перчатки, респираторы и другие СИЗ.</p></article>
          <article className="value-card"><h3>Корпоративный стиль</h3><p>Интегрируем цвет, маркировку и идентификацию без ущерба для защитных свойств.</p></article>
          <article className="value-card"><h3>Поддержка изменений</h3><p>При смене условий или регламентов обновляем конструкцию, сохраняя историю модели.</p></article>
        </div>
      </section>
    </main>
  );
}
