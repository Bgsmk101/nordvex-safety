"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Каталог", "/catalog/"],
  ["Отрасли", "/industries/"],
  ["Производство", "/production/"],
  ["Компания", "/company/"],
  ["Контакты", "/contacts/"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="logo" href="/" aria-label="NORDVEX — главная">
          <span className="logo-sign">NV</span>
          <span className="logo-word">NORD<span>VEX</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>

        <Link className="header-cta" href="/contacts/#request">Запросить образцы</Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {open && (
        <div className="mobile-nav-wrap">
          <nav className="mobile-nav container" aria-label="Мобильная навигация">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <Link className="button button-primary" href="/contacts/#request" onClick={() => setOpen(false)}>
              Запросить образцы
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
