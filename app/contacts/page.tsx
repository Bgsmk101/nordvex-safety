import type { Metadata } from "next";

export const metadata: Metadata = { title: "Контакты" };

export default function ContactsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow">Связаться с нами</p><h1>Обсудим условия и подготовим образцы</h1></div>
          <p>Для первого шага достаточно описать сферу деятельности, условия работы и примерное количество сотрудников.</p>
        </div>
      </section>
      <section className="section" id="request">
        <div className="container contact-grid">
          <aside className="contact-card">
            <h2>NORDVEX</h2>
            <a href="tel:+73430001842">+7 (343) 000-18-42</a>
            <a href="mailto:office@nordvex.ru">office@nordvex.ru</a>
            <span>Екатеринбург, Россия</span>
            <span>Пн–Пт, 09:00–18:00</span>
          </aside>
          <form className="contact-form">
            <div className="field"><label htmlFor="name">Имя</label><input id="name" name="name" type="text" placeholder="Как к вам обращаться" /></div>
            <div className="field"><label htmlFor="company">Компания</label><input id="company" name="company" type="text" placeholder="Название компании" /></div>
            <div className="field"><label htmlFor="phone">Телефон</label><input id="phone" name="phone" type="tel" placeholder="+7" /></div>
            <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="mail@company.ru" /></div>
            <div className="field full"><label htmlFor="industry">Отрасль</label><select id="industry" name="industry"><option>Выберите отрасль</option><option>Нефтегаз</option><option>Металлургия</option><option>Строительство</option><option>Логистика</option><option>Другая</option></select></div>
            <div className="field full"><label htmlFor="message">Задача</label><textarea id="message" name="message" placeholder="Опишите условия работы, количество сотрудников и желаемые сроки"></textarea></div>
            <div className="field full"><button className="button button-primary" type="submit">Отправить запрос</button></div>
          </form>
        </div>
      </section>
    </main>
  );
}
