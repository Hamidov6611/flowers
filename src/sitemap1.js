import React from "react";
import { routes } from "./route";
const Sitemap = () => {
  // Получите список всех маршрутов вашего приложения

  // Генерация XML-структуры с ссылками на маршруты
  const generateSitemap = () => {
    const sitemapItems = routes.map(
      (route) =>
        `<url>
        <loc>${window.location.origin}${route.path}</loc>
      </url>`
    );

    return `<?xml version="1.0" encoding="UTF-8"?>
      <user xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapItems.join("")}
      </user>`;
  };

  // Рендеринг компонента
  return <pre>{generateSitemap()}</pre>;
};

export default Sitemap;
