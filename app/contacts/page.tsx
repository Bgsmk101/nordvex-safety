import type { Metadata } from "next";

export const metadata: Metadata = { title: "Контакты и бриф" };

export default function ContactsPage() {
  return (
    <main className="page" id="main">
      <section className="contact-hero">
        <div className="content-frame contact-hero-layout">
          <div className="contact-heading"><p className="micro kicker">06 / Начать проект</p><h1>Опишите<br />рабочую среду.</h1><p>Для первого разговора достаточно отрасли, условий эксплуатации и примерной численности команды.</p></div>
          <div className="contact-channel">
            <span className="micro">Прямая связь</span>
            <a href="tel:+73430001842">+7 (343) 000–18–42</a>
            <a href="mailto:office@nordvex.ru">office@nordvex.ru</a>
            <p>Екатеринбург<br />Пн–Пт / 09:00–18:00</p>
          </div>
        </div>
      </section>

      <section className="brief-form-section" id="form">
        <div className="content-frame brief-form-layout">
          <aside className="brief-aside">
            <p className="micro kicker">Project input / 01</p>
            <h2>Пять вводных для точного старта.</h2>
            <ol><li><span>01</span>Отрасль и тип площадки</li><li><span>02</span>Ключевые операции</li><li><span>03</span>Климат и воздействия</li><li><span>04</span>Состав действующих СИЗ</li><li><span>05</span>Количество сотрудников</li></ol>
            <p className="brief-aside-note">Форма демонстрационная: данные никуда не отправляются.</p>
          </aside>

          <form className="project-form" data-demo-form>
            <div className="form-index">Бриф <span>01—07</span></div>
            <div className="form-field"><label htmlFor="name">01 / Имя</label><input id="name" name="name" type="text" autoComplete="name" placeholder="Как к вам обращаться" required /></div>
            <div className="form-field"><label htmlFor="company">02 / Компания</label><input id="company" name="company" type="text" autoComplete="organization" placeholder="Название организации" required /></div>
            <div className="form-field"><label htmlFor="phone">03 / Телефон</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+7 900 000-00-00" required /></div>
            <div className="form-field"><label htmlFor="email">04 / Email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="mail@company.ru" required /></div>
            <div className="form-field form-field--wide"><label htmlFor="industry">05 / Отрасль</label><select id="industry" name="industry" defaultValue="" required><option value="" disabled>Выберите направление</option><option>Нефтегаз</option><option>Металлургия</option><option>Строительство и инфраструктура</option><option>Логистика и сервис</option><option>Химическое производство</option><option>Другая отрасль</option></select></div>
            <div className="form-field form-field--wide"><label htmlFor="quantity">06 / Численность команды</label><input id="quantity" name="quantity" type="number" inputMode="numeric" min="1" placeholder="Например, 120" /></div>
            <div className="form-field form-field--wide"><label htmlFor="message">07 / Условия и задача</label><textarea id="message" name="message" placeholder="Температура, тип работ, воздействия, действующие СИЗ и желаемые сроки" required /></div>
            <div className="form-submit"><p>Нажимая кнопку, вы соглашаетесь на обработку введённых данных в рамках демонстрации.</p><button className="primary-action" type="submit">Передать задачу <span className="icon-arrow" aria-hidden="true" /></button></div>
            <p className="form-success" role="status" data-form-success>Бриф принят. В реальном проекте здесь появится номер обращения и срок ответа.</p>
          </form>
        </div>
      </section>

      <section className="contact-location">
        <div className="content-frame location-layout">
          <div><p className="micro kicker">Base / 56.8389° N</p><h2>Екатеринбург.<br />Работаем по всей России.</h2></div>
          <div className="location-grid" aria-hidden="true"><span className="location-dot" /><strong>NVX / HQ</strong><i /><i /><i /></div>
        </div>
      </section>
    </main>
  );
}
