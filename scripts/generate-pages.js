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
  const today = new Date().toISOString().split("T")[0];
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: combo.title,
    description: combo.metaDescription,
    datePublished: today,
    dateModified: today,
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
  const prettyDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T2QWM3ZSE4"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-T2QWM3ZSE4');</script>
<script type="application/ld+json">${buildSchema(combo)}</script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F7F9FC;color:#1A2332;line-height:1.65;padding:0 20px 80px}
.wrap{max-width:760px;margin:0 auto}
nav{padding:22px 0;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:40px}
nav a{color:#1A2332;text-decoration:none;font-weight:800;font-size:18px}
nav .accent{color:#2563EB}
h1{font-size:clamp(28px,5vw,40px);font-weight:800;line-height:1.15;margin-bottom:20px;color:#1A2332}
.intro{font-size:18px;color:#334155;background:rgba(37,99,235,.06);border-left:3px solid #2563EB;padding:18px 22px;border-radius:8px;margin-bottom:36px}
.pubdate{font-size:13px;color:#94A3B8;margin-bottom:20px;font-family:-apple-system,sans-serif}
h2{font-size:24px;margin:36px 0 16px;color:#1A2332}
h3{font-size:18px;margin-bottom:12px;color:#1A2332}
.method{background:#FFFFFF;border:1px solid rgba(26,35,50,.10);border-radius:14px;padding:24px;margin-bottom:18px}
.badge{font-size:12px;padding:3px 10px;border-radius:100px;margin-left:8px;vertical-align:middle}
.badge.wireless{background:rgba(124,58,237,.12);color:#7C3AED}
.badge.wired{background:rgba(234,88,12,.12);color:#EA580C}
ol{margin-left:20px;color:#334155}
ol li{margin-bottom:8px}
.parts{margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08)}
.parts h4{font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#FFB347;margin-bottom:10px}
.part{display:inline-block;background:linear-gradient(135deg,#FF9900,#FFB347);color:#000;font-weight:700;font-size:14px;padding:9px 16px;border-radius:8px;text-decoration:none;margin:0 8px 8px 0}
.faq{margin-bottom:20px}
.faq h3{color:#2563EB;font-size:16px}
.faq p{color:#334155}
.tips{background:rgba(124,58,237,.06);border:1px solid rgba(124,58,237,.18);border-radius:12px;padding:20px;margin:28px 0}
.tips h2{margin-top:0}
.tips ul{margin-left:20px;color:#334155}
.tips li{margin-bottom:8px}
.cta{display:block;text-align:center;background:linear-gradient(135deg,#2563EB,#7C3AED);color:#fff;font-weight:800;padding:16px;border-radius:12px;text-decoration:none;margin:36px 0}
.related{margin-top:40px;padding-top:28px;border-top:1px solid rgba(255,255,255,.08)}
.related a{display:inline-block;background:#FFFFFF;border:1px solid rgba(26,35,50,.12);color:#475569;padding:8px 16px;border-radius:100px;text-decoration:none;margin:0 8px 8px 0;font-size:14px}
footer{margin-top:50px;padding-top:24px;border-top:1px solid rgba(26,35,50,.10);color:#94A3B8;font-size:12px;text-align:center}
footer a{color:#94A3B8}
</style>
</head>
<body>
<div class="wrap">
<nav><a href="/" style="display:inline-flex;align-items:center;gap:10px;"><img src="/logo.png" alt="ConnectWizard" width="36" height="36" style="border-radius:50%;vertical-align:middle"/><span>Connect<span class="accent">Wizard</span></span></a></nav>
<h1>${combo.title}</h1>
<p class="pubdate">Updated ${prettyDate} · ConnectWizard</p>
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

// ── Static content pages (About, Contact, Privacy) ──
function staticPage(slug, title, metaDescription, bodyHtml) {
  const prettyDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${metaDescription}" />
<link rel="canonical" href="${SITE}/${slug}" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4387452115275226" crossorigin="anonymous"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T2QWM3ZSE4"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-T2QWM3ZSE4');</script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F7F9FC;color:#1A2332;line-height:1.7;padding:0 20px 80px}
.wrap{max-width:760px;margin:0 auto}
nav{padding:22px 0;border-bottom:1px solid rgba(26,35,50,.08);margin-bottom:40px}
nav a{color:#1A2332;text-decoration:none;font-weight:800;font-size:18px;display:inline-flex;align-items:center;gap:10px}
nav .accent{color:#2563EB}
h1{font-size:clamp(28px,5vw,40px);font-weight:800;line-height:1.15;margin-bottom:10px;color:#1A2332}
.pubdate{font-size:13px;color:#94A3B8;margin-bottom:28px}
h2{font-size:22px;margin:32px 0 14px;color:#1A2332}
p{margin-bottom:16px;color:#334155}
ul{margin:0 0 16px 22px;color:#334155}
li{margin-bottom:8px}
a.link{color:#2563EB}
.field{margin-bottom:16px}
label{display:block;font-size:13px;font-weight:700;color:#475569;margin-bottom:6px}
input,textarea{width:100%;background:#fff;border:1.5px solid rgba(26,35,50,.15);border-radius:10px;padding:12px 14px;font-size:15px;font-family:inherit;color:#1A2332}
textarea{min-height:130px;resize:vertical}
button{background:linear-gradient(135deg,#2563EB,#7C3AED);color:#fff;border:none;border-radius:10px;font-weight:800;font-size:15px;padding:14px 28px;cursor:pointer}
.msg{padding:14px;border-radius:10px;margin-top:14px;font-size:14px}
.msg.ok{background:rgba(37,99,235,.08);color:#1D4ED8}
.msg.err{background:rgba(220,38,38,.08);color:#DC2626}
footer{margin-top:50px;padding-top:24px;border-top:1px solid rgba(26,35,50,.10);color:#94A3B8;font-size:12px;text-align:center}
footer a{color:#94A3B8;margin:0 6px}
</style>
</head>
<body>
<div class="wrap">
<nav><a href="/"><img src="/logo.png" alt="ConnectWizard" width="36" height="36" style="border-radius:50%"/><span>Connect<span class="accent">Wizard</span></span></a></nav>
<h1>${title.replace(" · ConnectWizard","")}</h1>
<p class="pubdate">Last updated ${prettyDate}</p>
${bodyHtml}
<footer>
<a href="/">Home</a> · <a href="/about">About</a> · <a href="/contact">Contact</a> · <a href="/privacy">Privacy</a><br/>
ConnectWizard.tech · As an Amazon Associate we earn from qualifying purchases. · © 2026
</footer>
</div>
</body>
</html>`;
}

const aboutBody = `
<p>ConnectWizard is a free resource that helps people figure out how to connect any two devices — wired or wireless — with clear, step-by-step instructions and the exact cables or adapters needed to make it work.</p>
<p>The idea came from a simple, universal frustration: you have two pieces of technology, you need them to talk to each other, and you end up lost in a maze of conflicting forum posts, outdated manuals, and mismatched cable names. ConnectWizard exists to give you a single, straight answer.</p>
<h2>What we do</h2>
<p>Our growing library covers the most common device-connection questions, from connecting a MacBook to a 4K monitor, to getting a PS5 working with a soundbar, to pairing Bluetooth headphones with a PC that has no Bluetooth. Each guide explains every realistic connection method, walks through the setup step by step, and points to the specific parts you may need.</p>
<p>We also offer an interactive tool that generates a custom connection guide for any pair of devices you enter — useful for the combinations that aren't yet in our written library.</p>
<h2>How we make money</h2>
<p>ConnectWizard is free to use. We earn through affiliate commissions: when a guide recommends a cable or adapter and you buy it through our link, we may earn a small commission at no extra cost to you. As an Amazon Associate we earn from qualifying purchases. We also display advertising to support the site. These earnings let us keep the guides free and continuously expand the library.</p>
<h2>Our commitment</h2>
<p>We aim to give accurate, practical, vendor-neutral advice. We recommend the type of cable or adapter that genuinely solves your problem — not the most expensive option. If you ever find a guide that's outdated or incorrect, we want to know so we can fix it.</p>
`;

const contactBody = `
<p>Have a question, found an error in a guide, or want to request a connection guide for a specific pair of devices? We'd love to hear from you. Fill out the form below and we'll get back to you.</p>
<div class="field"><label for="cname">Your Name</label><input id="cname" type="text" placeholder="Jane Smith" /></div>
<div class="field"><label for="cemail">Your Email</label><input id="cemail" type="email" placeholder="you@email.com" /></div>
<div class="field"><label for="cmsg">Message</label><textarea id="cmsg" placeholder="How can we help?"></textarea></div>
<button id="csend" onclick="sendContact()">Send Message</button>
<div id="cresult"></div>
<script>
async function sendContact(){
  var name=document.getElementById('cname').value.trim();
  var email=document.getElementById('cemail').value.trim();
  var message=document.getElementById('cmsg').value.trim();
  var box=document.getElementById('cresult');
  var btn=document.getElementById('csend');
  box.className=''; box.textContent='';
  if(!name||!email||!message){box.className='msg err';box.textContent='Please fill in all three fields.';return;}
  if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)){box.className='msg err';box.textContent='Please enter a valid email address.';return;}
  btn.disabled=true; btn.textContent='Sending…';
  try{
    var r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name,email:email,message:message})});
    var d=await r.json();
    if(d.success){box.className='msg ok';box.textContent='Thanks! Your message has been sent. We\\'ll be in touch.';document.getElementById('cname').value='';document.getElementById('cemail').value='';document.getElementById('cmsg').value='';}
    else{box.className='msg err';box.textContent=d.error||'Something went wrong. Please try again.';}
  }catch(e){box.className='msg err';box.textContent='Something went wrong. Please try again.';}
  btn.disabled=false; btn.textContent='Send Message';
}
</script>
`;

const privacyBody = `
<p>This Privacy Policy explains how ConnectWizard ("we", "us") handles information when you use connectwizard.tech (the "site"). By using the site, you agree to the practices described here.</p>
<h2>Information we collect</h2>
<p>We collect limited information in the following ways:</p>
<ul>
<li><strong>Information you provide:</strong> When you submit your email to generate a guide, request a new guide, or use our contact form, we collect the information you enter (such as your name, email address, and message).</li>
<li><strong>Usage data:</strong> Like most websites, we automatically collect standard analytics data — such as pages visited, time on site, approximate location, device type, and referring source — through Google Analytics.</li>
<li><strong>Device-connection queries:</strong> When you use our generator tool, we log the device pairs searched (without personally identifying you) to understand demand and improve our guides.</li>
</ul>
<h2>How we use information</h2>
<ul>
<li>To provide and improve our connection guides and tools.</li>
<li>To respond to your questions and requests.</li>
<li>To send you updates if you have opted in by providing your email.</li>
<li>To understand which guides are most useful and what new guides to create.</li>
</ul>
<h2>Cookies and advertising</h2>
<p>We use cookies and similar technologies for analytics and advertising. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the internet.</p>
<p>You may opt out of personalized advertising by visiting <a class="link" href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ads Settings</a>. For more information about how Google uses data, see <a class="link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">Google's policies</a>.</p>
<h2>Affiliate links</h2>
<p>ConnectWizard participates in the Amazon Associates Program and other affiliate programs. When you click an affiliate link and make a purchase, we may earn a commission at no additional cost to you. Affiliate links do not affect the price you pay.</p>
<h2>Analytics</h2>
<p>We use Google Analytics to understand site usage. Google Analytics collects information such as how often users visit the site and what pages they view. You can learn more at <a class="link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy</a>.</p>
<h2>Data retention and security</h2>
<p>We retain submitted information only as long as needed to provide our services and respond to you. We take reasonable measures to protect your information, but no method of transmission over the internet is completely secure.</p>
<h2>Your choices</h2>
<p>You may request that we delete information you have submitted by contacting us through our contact form. You can also control cookies through your browser settings and opt out of analytics tracking using available browser tools.</p>
<h2>Children's privacy</h2>
<p>This site is not directed at children under 13, and we do not knowingly collect personal information from children.</p>
<h2>Changes to this policy</h2>
<p>We may update this Privacy Policy from time to time. The "last updated" date at the top of this page reflects the most recent revision.</p>
<h2>Contact</h2>
<p>If you have questions about this Privacy Policy, please reach us through our <a class="link" href="/contact">contact page</a>.</p>
`;

const staticPages = [
  { slug: "about", title: "About ConnectWizard", meta: "Learn about ConnectWizard — a free resource for step-by-step guides on connecting any two devices, with the exact cables and adapters you need.", body: aboutBody },
  { slug: "contact", title: "Contact ConnectWizard", meta: "Get in touch with ConnectWizard. Ask a question, report an error, or request a new device-connection guide.", body: contactBody },
  { slug: "privacy", title: "Privacy Policy", meta: "ConnectWizard's privacy policy — how we collect, use, and protect your information, including cookies, analytics, and affiliate links.", body: privacyBody },
];

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

// Write static trust pages (About, Contact, Privacy)
let staticCount = 0;
for (const sp of staticPages) {
  const dir = path.join(DIST, sp.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), staticPage(sp.slug, sp.title, sp.meta, sp.body));
  staticCount++;
}

// ── Generate sitemap ──
const today = new Date().toISOString().split("T")[0];
const urls = [
  `<url><loc>${SITE}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`,
  ...staticPages.map(
    (s) => `<url><loc>${SITE}/${s.slug}</loc><lastmod>${today}</lastmod><priority>0.5</priority></url>`
  ),
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
console.log(`✅ Generated ${staticCount} trust pages (about, contact, privacy)`);
console.log(`✅ Generated sitemap.xml with ${combos.length + staticPages.length + 1} URLs`);
