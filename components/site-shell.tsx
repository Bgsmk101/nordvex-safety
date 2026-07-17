"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const navigation = [
  { n: "01", href: "/", title: "Главная", note: "Манифест бренда" },
  { n: "02", href: "/catalog/", title: "Каталог", note: "Системы защиты" },
  { n: "03", href: "/industries/", title: "Отрасли", note: "Рабочие сценарии" },
  { n: "04", href: "/production/", title: "Производство", note: "Материалы и контроль" },
  { n: "05", href: "/company/", title: "Компания", note: "Принципы NORDVEX" },
  { n: "06", href: "/contacts/", title: "Контакты", note: "Проект и поставка" },
];

function normalizePath(pathname: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const clean = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return clean === "" ? "/" : clean;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const current = navigation.find((item) => item.href === currentPath || (item.href !== "/" && currentPath.startsWith(item.href))) ?? navigation[0];

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const countObservers: IntersectionObserver[] = [];
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((element) => {
      const target = Number(element.dataset.count ?? 0);
      const suffix = element.dataset.suffix ?? "";
      let started = false;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          const start = performance.now();
          const duration = 1100;
          const update = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            element.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.disconnect();
        });
      }, { threshold: 0.6 });
      observer.observe(element);
      countObservers.push(observer);
    });

    const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter]"));
    const productCards = Array.from(document.querySelectorAll<HTMLElement>("[data-category]"));
    const filterHandlers = filterButtons.map((button) => {
      const handler = () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        const value = button.dataset.filter;
        productCards.forEach((card) => {
          card.hidden = value !== "all" && card.dataset.category !== value;
        });
      };
      button.addEventListener("click", handler);
      return { button, handler };
    });

    const form = document.querySelector<HTMLFormElement>("[data-demo-form]");
    const success = document.querySelector<HTMLElement>("[data-form-success]");
    const submitHandler = (event: Event) => {
      event.preventDefault();
      success?.classList.add("show");
      form?.reset();
    };
    form?.addEventListener("submit", submitHandler);

    return () => {
      revealObserver.disconnect();
      countObservers.forEach((observer) => observer.disconnect());
      filterHandlers.forEach(({ button, handler }) => button.removeEventListener("click", handler));
      form?.removeEventListener("submit", submitHandler);
    };
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Перейти к содержанию</a>
      <header className="topbar">
        <Link className="brand-mark" href="/" aria-label="NORDVEX — главная">NV</Link>
        <Link className="brand-word" href="/">NORD<span>VEX</span></Link>
        <div className="header-meta">
          <Link className="header-link header-link--icon" href="/contacts/#form"><span>Запросить образцы</span><span className="icon-arrow" aria-hidden="true"></span></Link>
          <button className="menu-trigger" type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span>Разделы</span><i /></button>
        </div>
      </header>
      <aside className="side-rail" aria-hidden="true"><span className="vertical">Engineered workwear / Russian North</span><span className="rail-index">{current.n}</span></aside>
      <div className="nav-overlay" aria-hidden={!menuOpen} onClick={(event) => { if (event.target === event.currentTarget) setMenuOpen(false); }}>
        <div className="nav-overlay-inner">
          <nav className="nav-list" aria-label="Основная навигация">
            {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={item.n === current.n ? "page" : undefined} onClick={() => setMenuOpen(false)}><small>{item.n}</small><span>{item.title}</span><span>{item.note}</span></Link>)}
          </nav>
          <div className="nav-side">
            <div><p className="micro kicker">NORDVEX / 2026</p><p className="statement">Спецодежда рассматривается не как униформа, а как часть производственной системы.</p></div>
            <div><p className="micro">Комплектация предприятий<br />Серийное производство<br />Контрактная разработка</p></div>
          </div>
        </div>
      </div>

      {children}

      <footer className="footer">
        <div className="footer-grid">
          <div><div className="footer-brand">NVX</div><p>Системы профессиональной защиты для среды, где цена ошибки выше стоимости экипировки.</p></div>
          <div><h4>Навигация</h4><Link href="/catalog/">Каталог</Link><Link href="/industries/">Отрасли</Link><Link href="/production/">Производство</Link><Link href="/company/">Компания</Link></div>
          <div><h4>Связь</h4><a href="tel:+73430001842">+7 (343) 000-18-42</a><a href="mailto:office@nordvex.ru">office@nordvex.ru</a><span>Екатеринбург<br />Промышленный контур, 18</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 NORDVEX. Демонстрационный проект.</span><span>СИЗ · Спецодежда · Корпоративные комплекты</span></div>
      </footer>
    </div>
  );
}
