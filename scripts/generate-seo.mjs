import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const fallbackUrl = "http://localhost:4200";
const candidateUrl = process.env.SITE_URL ?? fallbackUrl;
let siteUrl;

try {
  siteUrl = new URL(candidateUrl);
} catch {
  throw new Error(`SITE_URL invalide : ${candidateUrl}`);
}

const baseUrl = siteUrl.toString().replace(/\/$/, "");
const routes = ["/", "/projects/statunox", "/projects/archboard", "/projects/villa-deste"];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`).join("\n")}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

await Promise.all([
  writeFile(resolve("public/sitemap.xml"), sitemap, "utf8"),
  writeFile(resolve("public/robots.txt"), robots, "utf8"),
]);
