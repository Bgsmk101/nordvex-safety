import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Запрос проекта, образцов и корпоративной комплектации NORDVEX.",
};

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
  <main className="page" id="main">
    <section className="contact-layout content-frame">
      <div className="contact-info">
        <div>
          <p className="micro kicker">Начать проект</p>
          <h1>
            Опишите
            <br />
            рабочую
            <br />
            среду
          </h1>
        </div>
        <div className="contact-list">
          <div>
            <small>Телефон</small>
            <a href="tel:+73430001842">+7 (343) 000-18-42</a>
          </div>
          <div>
            <small>Почта</small>
            <a href="mailto:office@nordvex.ru">office@nordvex.ru</a>
          </div>
          <div>
            <small>Производственный офис</small>
            <span>
              Екатеринбург
              <br />
              Промышленный контур, 18
            </span>
          </div>
        </div>
      </div>
      <div className="contact-form-wrap" id="form">
        <div className="breadcrumbs">
          <a href={`${basePath}/`}>NORDVEX</a>
          <span>/</span>
          <strong>Контакты</strong>
        </div>
        <h2 className="section-title contact-form-title">
          Технический
          <br />
          <em>бриф</em>
        </h2>
        <form className="form-grid" data-demo-form="">
          <div className="field">
            <label htmlFor="name">Имя и компания</label>
            <input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="contact">Телефон или e-mail</label>
            <input id="contact" name="contact" required />
          </div>
          <div className="field">
            <label htmlFor="industry">Отрасль</label>
            <select id="industry" name="industry">
              <option>Нефтегаз</option>
              <option>Металлургия</option>
              <option>Строительство</option>
              <option>Логистика</option>
              <option>Энергетика</option>
              <option>Другая отрасль</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="task">Условия и задача</label>
            <textarea id="task" name="task" placeholder="Температура, вид работ, количество сотрудников, обязательные СИЗ..."></textarea>
          </div>
          <button className="submit-btn" type="submit">Передать задачу</button>
          <div className="form-success" data-form-success="">Спасибо. Запрос принят — специалист свяжется с вами для уточнения условий и комплектации.</div>
          <p className="form-note">Отправляя форму, вы соглашаетесь на обработку данных для подготовки предложения по проекту.</p>
        </form>
      </div>
    </section>
  </main>
  );
}
