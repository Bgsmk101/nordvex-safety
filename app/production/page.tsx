import type { Metadata } from "next";

export const metadata: Metadata = { title: "Производство" };

const steps = [
  ["01", "Аудит условий", "Фиксируем рабочие операции, риски, климатические зоны, средства защиты и требования предприятия."],
  ["02", "Техническое задание", "Определяем состав комплекта, материалы, конструктивные узлы и требования к персонализации."],
  ["03", "Прототип", "Создаём тестовый комплект и проверяем посадку, свободу движения и совместимость элементов."],
  ["04", "Испытания", "Передаём комплект в эксплуатацию, собираем замечания и корректируем конструкцию."],
  ["05", "Серийный запуск", "Фиксируем эталон изделия, размерную матрицу и требования к производственному контролю."],
  ["06", "Поддержка поставок", "Сохраняем паспорт модели, историю изменений и параметры для повторных заказов."],
];

export default function ProductionPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow">Производственный цикл</p><h1>Понятный процесс без скрытых этапов</h1></div>
          <p>Каждый этап имеет конкретный результат и точку согласования. Поэтому текст, конструкция и производство не конфликтуют между собой.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="timeline">
            {steps.map(([number, title, text]) => (
              <div className="timeline-row" key={number}><strong>{number}</strong><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container split-feature">
          <div className="split-media"><img src="https://images.pexels.com/photos/23232388/pexels-photo-23232388.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-23232388.jpg&fm=jpg" alt="Производственный участок" /></div>
          <div className="split-copy"><p className="eyebrow">Контроль качества</p><h2>Проверяем изделие как систему</h2><p>Материал, швы, молнии, световозвращающие элементы и усиления оцениваются вместе. Это исключает ситуацию, когда каждый узел формально соответствует требованиям, а комплект в целом неудобен или ненадёжен.</p></div>
        </div>
      </section>
    </main>
  );
}
