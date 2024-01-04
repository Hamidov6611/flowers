import React from "react";
import { routes } from "./route";
const Sitemap = () => {
  // Получите список всех маршрутов вашего приложения

  // Генерация XML-структуры с ссылками на маршруты
  const generateSitemap = () => {
    const sitemapItems = routes.map(
      (route) =>
        `<url>
        <loc>${"https://www.букетнаямануфактура.рф"}${route.path}</loc>
        <priority>${route.priority || "0.5"}</priority>
      </url>`
    );

    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapItems.join("")}
      </urlset>`;
  };

  // Рендеринг компонента
  return <pre>{generateSitemap()}</pre>;
};

export default Sitemap;
