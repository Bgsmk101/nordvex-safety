import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: { default: "NORDVEX — системы профессиональной защиты", template: "%s — NORDVEX" },
  description: "Премиальный многостраничный сайт производителя СИЗ и спецодежды NORDVEX.",
  icons: { icon: `${basePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><SiteShell>{children}</SiteShell></body></html>;
}
