import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">NORD<span>VEX</span></div>
          <p>Спецодежда и системы индивидуальной защиты для промышленности, строительства и инфраструктуры.</p>
        </div>
        <div>
          <h3>Разделы</h3>
          <Link href="/catalog/">Каталог</Link>
          <Link href="/industries/">Отрасли</Link>
          <Link href="/production/">Производство</Link>
          <Link href="/company/">Компания</Link>
        </div>
        <div>
          <h3>Контакты</h3>
          <a href="tel:+73430001842">+7 (343) 000-18-42</a>
          <a href="mailto:office@nordvex.ru">office@nordvex.ru</a>
          <span>Екатеринбург, Россия</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 NORDVEX</span>
        <span>СИЗ · Спецодежда · Корпоративные комплекты</span>
      </div>
    </footer>
  );
}
