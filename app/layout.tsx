import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: { default: "NORDVEX — инженерные системы защиты", template: "%s — NORDVEX" },
  description: "Проектирование и производство спецодежды и систем индивидуальной защиты для промышленных предприятий.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
