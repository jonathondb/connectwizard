// ─── STATIC PAGE GENERATOR ───────────────────────────────────────────────────
// Runs after `vite build`. Generates a real, indexable HTML file per combo
// plus sitemap.xml. These pages exist in served HTML so Google/AI can crawl them.

import { combos, amazonLink } from "../src/comboData.js";
import fs from "fs";
import path from "path";

const SITE = "https://connectwizard.tech";
const DIST = path.resolve("dist");

// HowTo + FAQ schema for rich results and AI citation
function buildSchema(combo) {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: combo.title,
    description: combo.metaDescription,
    step: combo.methods.flatMap((m) =>
      m.steps.map((s, i) => ({
        "@type": "HowToStep",
        name: `${m.name} - Step ${i + 1}`,
        text: s,
      }))
    ),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: combo.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return JSON.stringify([howTo, faq]);
}

function methodHtml(combo) {
  return combo.methods
    .map((m) => {
      const steps = m.steps.map((s) => `<li>${s}</li>`).join("");
      const parts = m.parts.length
        ? `<div class="parts"><h4>Parts you may need</h4>${m.parts
            .map(
              (p) =>
                `<a class="part" href="${amazonLink(p.searchQuery)}" target="_blank" rel="nofollow sponsored noopener">🛒 ${p.name}</a>`
            )
            .join("")}</div>`
        : "";
      const badge = m.type === "wireless" ? "⚡ Wireless" : "🔌 Wired";
      return `<div class="method"><h3>${m.name} <span class="badge ${m.type}">${badge}</span></h3><ol>${steps}</ol>${parts}</div>`;
    })
    .join("");
}

function faqHtml(combo) {
  return combo.faqs
    .map((f) => `<div class="faq"><h3>${f.q}</h3><p>${f.a}</p></div>`)
    .join("");
}

function pageHtml(combo) {
  const related = combos
    .filter((c) => c.slug !== combo.slug)
    .slice(0, 4)
    .map((c) => `<a href="/connect/${c.slug}">${c.deviceA} to ${c.deviceB}</a>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${combo.title}</title>
<meta name="description" content="${combo.metaDescription}" />
<link rel="canonical" href="${SITE}/connect/${combo.slug}" />
<meta property="og:title" content="${combo.title}" />
<meta property="og:description" content="${combo.metaDescription}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE}/connect/${combo.slug}" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4387452115275226" crossorigin="anonymous"></script>
<script type="application/ld+json">${buildSchema(combo)}</script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#070C14;color:#e8eaed;line-height:1.65;padding:0 20px 80px}
.wrap{max-width:760px;margin:0 auto}
nav{padding:22px 0;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:40px}
nav a{color:#fff;text-decoration:none;font-weight:800;font-size:18px}
nav .accent{color:#00D4FF}
h1{font-size:clamp(28px,5vw,40px);font-weight:800;line-height:1.15;margin-bottom:20px;color:#fff}
.intro{font-size:18px;color:#c5c8cc;background:rgba(0,212,255,.06);border-left:3px solid #00D4FF;padding:18px 22px;border-radius:8px;margin-bottom:36px}
h2{font-size:24px;margin:36px 0 16px;color:#fff}
h3{font-size:18px;margin-bottom:12px;color:#fff}
.method{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px;margin-bottom:18px}
.badge{font-size:12px;padding:3px 10px;border-radius:100px;margin-left:8px;vertical-align:middle}
.badge.wireless{background:rgba(123,47,255,.2);color:#b794f6}
.badge.wired{background:rgba(255,107,53,.2);color:#ff9f6b}
ol{margin-left:20px;color:#c5c8cc}
ol li{margin-bottom:8px}
.parts{margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08)}
.parts h4{font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#FFB347;margin-bottom:10px}
.part{display:inline-block;background:linear-gradient(135deg,#FF9900,#FFB347);color:#000;font-weight:700;font-size:14px;padding:9px 16px;border-radius:8px;text-decoration:none;margin:0 8px 8px 0}
.faq{margin-bottom:20px}
.faq h3{color:#00D4FF;font-size:16px}
.faq p{color:#c5c8cc}
.tips{background:rgba(123,47,255,.08);border:1px solid rgba(123,47,255,.2);border-radius:12px;padding:20px;margin:28px 0}
.tips h2{margin-top:0}
.tips ul{margin-left:20px;color:#c5c8cc}
.tips li{margin-bottom:8px}
.cta{display:block;text-align:center;background:linear-gradient(135deg,#00D4FF,#7B2FFF);color:#fff;font-weight:800;padding:16px;border-radius:12px;text-decoration:none;margin:36px 0}
.related{margin-top:40px;padding-top:28px;border-top:1px solid rgba(255,255,255,.08)}
.related a{display:inline-block;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#9aa0a6;padding:8px 16px;border-radius:100px;text-decoration:none;margin:0 8px 8px 0;font-size:14px}
footer{margin-top:50px;padding-top:24px;border-top:1px solid rgba(255,255,255,.06);color:#5f6368;font-size:12px;text-align:center}
footer a{color:#5f6368}
</style>
</head>
<body>
<div class="wrap">
<nav><a href="/">Connect<span class="accent">Wizard</span></a></nav>
<h1>${combo.title}</h1>
<p class="intro">${combo.intro}</p>

<h2>Connection Methods</h2>
${methodHtml(combo)}

<a class="cta" href="/?a=${encodeURIComponent(combo.deviceA)}&b=${encodeURIComponent(combo.deviceB)}">⚡ Generate a custom guide for your exact devices →</a>

<div class="tips">
<h2>Pro Tips</h2>
<ul>${combo.tips.map((t) => `<li>${t}</li>`).join("")}</ul>
</div>

<h2>Frequently Asked Questions</h2>
${faqHtml(combo)}

<div class="related">
<h2>Related Guides</h2>
${related}
</div>

<footer>
ConnectWizard.tech · As an Amazon Associate we earn from qualifying purchases.<br/>
<a href="/">Home</a> · © 2026 ConnectWizard
</footer>
</div>
</body>
</html>`;
}

// ── Generate pages ──
let count = 0;
const connectDir = path.join(DIST, "connect");
fs.mkdirSync(connectDir, { recursive: true });

for (const combo of combos) {
  const dir = path.join(connectDir, combo.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), pageHtml(combo));
  count++;
}

// ── Generate sitemap ──
const today = new Date().toISOString().split("T")[0];
const urls = [
  `<url><loc>${SITE}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`,
  ...combos.map(
    (c) =>
      `<url><loc>${SITE}/connect/${c.slug}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`
  ),
].join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);

console.log(`✅ Generated ${count} static combo pages`);
console.log(`✅ Generated sitemap.xml with ${combos.length + 1} URLs`);
