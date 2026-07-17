import Link from "next/link";
export default function NotFound() { return <main className="page" id="main"><section className="page-hero content-frame"><div><p className="micro kicker">Ошибка 404</p><h1>Маршрут<br />не найден</h1></div><Link className="text-link" href="/">Вернуться на главную</Link></section></main>; }
