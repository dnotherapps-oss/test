#!/usr/bin/env node
// ============================================================
// WhatDentist — Practice Page Generator
// ============================================================
// Usage:
//   node generate-pages.js
//
// What it does:
//   Reads data.js + practice-template.html and writes one
//   HTML file per practice into the /dentists/ output folder.
//
// Adding a new practice:
//   1. Add the practice object to data.js
//   2. Run: node generate-pages.js
//   3. Done — the new page is in /dentists/
//
// Updating the template (new section, redesign etc):
//   1. Edit practice-template.html
//   2. Run: node generate-pages.js
//   3. All pages regenerated instantly
// ============================================================

const fs   = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────
const DATA_FILE     = path.join(__dirname, 'data.js');
const TEMPLATE_FILE = path.join(__dirname, 'practice-template.html');
const OUTPUT_DIR    = path.join(__dirname, 'dentists');
const SITE_URL      = 'https://whatdentist.co.uk';
// ──────────────────────────────────────────────────────────

// ── Load practices from data.js ───────────────────────────
function loadPractices() {
  const vm  = require('vm');
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  const wrapped = '(function(){ ' + raw + '; return practices; })()';
  const result  = vm.runInNewContext(wrapped, {});
  if (!Array.isArray(result) || result.length === 0) {
    throw new Error('Could not load practices array from ' + DATA_FILE);
  }
  return result;
}

// ── Helpers ───────────────────────────────────────────────
function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function fmtPrice(n) {
  if (n == null) return null;
  const num = Number(n);
  const hasPence = Math.round(num * 100) % 100 !== 0;
  return '£' + num.toLocaleString('en-GB', {
    minimumFractionDigits: hasPence ? 2 : 0,
    maximumFractionDigits: hasPence ? 2 : 0,
  });
}

function shortName(name) {
  // Returns the first word or two for use in comparison widget label
  const words = String(name || '').split(' ');
  return words.slice(0, 2).join(' ');
}

function parseHoursToSchema(hoursString) {
  // Converts "Mon 8am–8pm | Tue 8am–7pm | ..." to schema.org OpeningHoursSpecification
  if (!hoursString) return '[]';
  const dayMap = {
    Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday',
    Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday'
  };

  function parseTime(t) {
    // Handles "8am", "8:45am", "5:30pm", "8pm"
    t = t.trim();
    const match = t.match(/^(\d+)(?::(\d+))?(am|pm)$/i);
    if (!match) return null;
    let h = parseInt(match[1], 10);
    const m = match[2] ? parseInt(match[2], 10) : 0;
    const meridiem = match[3].toLowerCase();
    if (meridiem === 'pm' && h !== 12) h += 12;
    if (meridiem === 'am' && h === 12) h = 0;
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  }

  const specs = [];
  hoursString.split('|').forEach(part => {
    part = part.trim();
    if (!part) return;
    const spaceIdx = part.indexOf(' ');
    const abbr = part.slice(0, spaceIdx).trim();
    const times = part.slice(spaceIdx + 1).trim();
    const fullDay = dayMap[abbr] || abbr;
    if (/closed/i.test(times)) return;

    // Handle comma-separated ranges like "9am–1pm, 2–6pm"
    const ranges = times.split(',');
    ranges.forEach(range => {
      range = range.trim();
      const parts = range.split('–');
      if (parts.length === 2) {
        const opens  = parseTime(parts[0]);
        const closes = parseTime(parts[1]);
        if (opens && closes) {
          specs.push({ day: fullDay, opens, closes });
        }
      }
    });
  });

  return JSON.stringify(
    specs.map(s => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.day,
      opens: s.opens,
      closes: s.closes
    })),
    null, 0
  );
}

function buildMetaDescription(p) {
  const prices = [];
  if (p.checkupPrice)    prices.push(`check-ups from ${fmtPrice(p.checkupPrice)}`);
  if (p.hygienePrice)    prices.push(`hygiene from ${fmtPrice(p.hygienePrice)}`);
  if (p.whiteningPrice)  prices.push(`whitening from ${fmtPrice(p.whiteningPrice)}`);
  if (p.invisalignPrice) prices.push(`Invisalign from ${fmtPrice(p.invisalignPrice)}`);
  const priceText = prices.length ? prices.join(', ') + '. ' : '';
  const ratingText = p.rating && p.reviews
    ? `Rated ${Number(p.rating).toFixed(1)}★ by ${Number(p.reviews).toLocaleString('en-GB')} patients. `
    : '';
  const accessText = p.openWeekends ? 'Open weekends. ' : '';
  return `Compare private dental prices at ${p.name}, ${p.area}. ${priceText}${ratingText}${accessText}See full price list.`.slice(0, 160);
}

function buildPageTitle(p) {
  const parts = [];
  if (p.checkupPrice) parts.push(`Check-ups from ${fmtPrice(p.checkupPrice)}`);
  else if (p.hygienePrice) parts.push(`Hygiene from ${fmtPrice(p.hygienePrice)}`);
  const suffix = parts.length ? ` – ${parts[0]}` : '';
  return `${p.name} – Private Dental Prices${suffix} | WhatDentist`;
}

function buildSchema(p) {
  const openingHours = parseHoursToSchema(p.hours);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: p.name,
    url: p.website ? (p.website.startsWith('http') ? p.website : 'https://' + p.website) : undefined,
    telephone: p.phone || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: (p.address || '').split(',')[0] || p.address,
      addressLocality: 'London',
      postalCode: (p.address || '').match(/[A-Z]{1,2}\d[\d A-Z]?\s*\d[A-Z]{2}/i)?.[0] || '',
      addressCountry: 'GB'
    },
    geo: p.lat && p.lng ? {
      '@type': 'GeoCoordinates',
      latitude: p.lat,
      longitude: p.lng
    } : undefined,
    aggregateRating: p.rating && p.reviews ? {
      '@type': 'AggregateRating',
      ratingValue: String(p.rating),
      reviewCount: String(p.reviews)
    } : undefined,
    openingHoursSpecification: JSON.parse(openingHours),
    priceRange: '££'
  });
}

function buildBreadcrumb(p) {
  // Determine the region label and URL from the area
  const regionMap = {
    'Mill Hill': { label: 'North West London', url: '/?area=Mill+Hill' },
    'Colindale': { label: 'North West London', url: '/?area=Colindale' },
    'Hendon': { label: 'North West London', url: '/?area=Hendon' },
    'Edgware': { label: 'North West London', url: '/?area=Edgware' },
    'Finchley': { label: 'North London', url: '/?area=Finchley' },
    'North Finchley': { label: 'North London', url: '/?area=North+Finchley' },
    'East Finchley': { label: 'North London', url: '/?area=East+Finchley' },
    'Temple Fortune': { label: 'North London', url: '/?area=Temple+Fortune' },
    'Northwood': { label: 'North West London', url: '/?area=Northwood' },
    'Central London': { label: 'Central London', url: '/?area=Central+London' },
    'Marylebone': { label: 'Central London', url: '/?area=Marylebone' },
  };
  const region = regionMap[p.area] || { label: p.area || 'London', url: '/' };
  return `<a href="/">All dentists</a> › <a href="${region.url}">${esc(region.label)} Dentists</a><span class="breadcrumb-sep-current"> › </span><span class="breadcrumb-current">${esc(p.name)}</span>`;
}

function buildMobileActionBar(p) {
  const phone = p.phone ? `<a href="tel:${p.phone.replace(/\s/g,'')}" class="mobile-bar-call">📞 Call</a>` : '';
  const website = p.website ? `<a href="${esc(p.website.startsWith('http') ? p.website : 'https://' + p.website)}" target="_blank" class="mobile-bar-web">🌐 Website</a>` : '';
  return phone + website;
}

function buildSidebarBody(p) {
  const websiteUrl = p.website ? (p.website.startsWith('http') ? p.website : 'https://' + p.website) : null;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.address || p.name)}`;
  const nhsLabel = p.type === 'both' ? 'NHS & Private' : 'Private only';
  const financeRow = p.finance === true
    ? `<div class="sidebar-detail" id="finance-detail"><strong>Finance</strong>0% APR available on qualifying treatments</div>`
    : '';
  return `
    ${websiteUrl ? `<a href="${esc(websiteUrl)}" target="_blank" class="cta-btn cta-primary">🌐 Visit Website</a>` : ''}
    ${p.phone ? `<a href="tel:${p.phone.replace(/\s/g,'')}" class="cta-btn cta-secondary">📞 Call ${esc(p.phone)}</a>` : ''}
    <a href="${esc(mapsUrl)}" target="_blank" class="cta-btn cta-secondary">📍 Get Directions</a>
    <div class="sidebar-detail"><strong>Address</strong>${esc(p.address)}</div>
    <div class="sidebar-detail"><strong>NHS patients</strong>${nhsLabel}</div>
    ${financeRow}
  `.trim();
}

// ── Main generator ─────────────────────────────────────────
function generate() {
  const practices = loadPractices();
  const template  = fs.readFileSync(TEMPLATE_FILE, 'utf8');

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let generated = 0;
  let skipped   = 0;

  practices.forEach(p => {
    if (!p.slug) {
      console.warn(`  ⚠  Practice ID ${p.id} (${p.name}) has no slug — skipping`);
      skipped++;
      return;
    }

    const pageUrl     = `${SITE_URL}/dentists/${p.slug}/`;
    const photoSrc    = p.photo || `/images/practices/${p.slug}.jpg`;
    const photoAlt    = `${p.name} dental practice`;
    const websiteUrl  = p.website ? (p.website.startsWith('http') ? p.website : 'https://' + p.website) : '#';
    const mapsQuery   = encodeURIComponent(p.address || p.name);
    const displayName = esc(p.name);
    const shortLabel  = esc(shortName(p.name));

    let html = template;

    // ── <head> replacements ──────────────────────────────
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${esc(buildPageTitle(p))}</title>`
    );
    html = html.replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${esc(buildMetaDescription(p))}">`
    );
    html = html.replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${esc(pageUrl)}">`
    );
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${buildSchema(p)}</script>`
    );

    // ── CURRENT_PRACTICE_ID ──────────────────────────────
    html = html.replace(
      /const CURRENT_PRACTICE_ID\s*=\s*\d+;/,
      `const CURRENT_PRACTICE_ID = ${p.id};`
    );

    // ── Breadcrumb ───────────────────────────────────────
    html = html.replace(
      /<nav class="breadcrumb">[\s\S]*?<\/nav>/,
      `<nav class="breadcrumb">${buildBreadcrumb(p)}</nav>`
    );

    // ── Practice photo ───────────────────────────────────
    html = html.replace(
      /<img[^>]*class="practice-photo"[^>]*>/,
      `<img src="${esc(photoSrc)}" alt="${esc(photoAlt)}" class="practice-photo" loading="lazy">`
    );

    // ── H1 practice name ─────────────────────────────────
    html = html.replace(
      /<h1 class="practice-name">.*?<\/h1>/,
      `<h1 class="practice-name">${displayName}</h1>`
    );

    // ── Address link ─────────────────────────────────────
    html = html.replace(
      /📍 <a href="https:\/\/www\.google\.com\/maps\/search\/[^"]*"[^>]*>.*?<\/a>/,
      `📍 <a href="https://www.google.com/maps/search/?api=1&query=${esc(mapsQuery)}" target="_blank" style="color:var(--teal);text-decoration:none;border-bottom:1px dotted var(--teal)">${esc(p.address)}</a>`
    );

    // ── Compare widget: practice name label ──────────────
    html = html.replace(
      /(<div class="compare-col-label">)[^<]*(Dental Wellness|<\/div>)/,
      `$1${shortLabel}</div>`
    );
    // Compare widget title
    html = html.replace(
      /How does Dental Wellness compare to London\?/g,
      `How does ${displayName} compare to London?`
    );
    // Compare bar label
    html = html.replace(
      /<span>Dental Wellness<\/span>/,
      `<span>${displayName}</span>`
    );

    // ── About section title (static fallback) ────────────
    html = html.replace(
      /<h2 class="section-title" id="about-title">About Dental Wellness Mill Hill<\/h2>/,
      `<h2 class="section-title" id="about-title">About ${displayName}</h2>`
    );

    // ── Nearby practices subtitle ─────────────────────────
    html = html.replace(
      /Other practices close to Dental Wellness Mill Hill\./g,
      `Other dental practices close to ${displayName}.`
    );
    html = html.replace(
      /Other dental practices close to Dental Wellness Mill Hill\./g,
      `Other dental practices close to ${displayName}.`
    );

    // ── Sidebar ──────────────────────────────────────────
    html = html.replace(
      /<div class="sidebar-name">.*?<\/div>/,
      `<div class="sidebar-name">${displayName}</div>`
    );
    html = html.replace(
      /<div class="sidebar-area">.*?<\/div>/,
      `<div class="sidebar-area">${esc(p.area)}, London</div>`
    );
    html = html.replace(
      /<div class="sidebar-body">[\s\S]*?<\/div>\s*<\/div>\s*<div class="nearby-card/,
      `<div class="sidebar-body">\n    ${buildSidebarBody(p)}\n  </div>\n  </div>\n  <div class="nearby-card`
    );

    // ── Nearby sidebar subtitle ──────────────────────────
    html = html.replace(
      /<div class="nearby-subtitle">Other dental practices close to Dental Wellness Mill Hill\.<\/div>/,
      `<div class="nearby-subtitle">Other dental practices close to ${displayName}.</div>`
    );

    // ── Claim overlay: prefill practice name ─────────────
    html = html.replace(
      /value="Dental Wellness Mill Hill"/g,
      `value="${esc(p.name)}"`
    );

    // ── Mobile action bar ────────────────────────────────
    html = html.replace(
      /<div class="mobile-action-bar">[\s\S]*?<\/div>\s*\n/,
      `<div class="mobile-action-bar">\n  ${buildMobileActionBar(p)}\n</div>\n`
    );

    // ── Write output file ────────────────────────────────
    const outDir  = path.join(OUTPUT_DIR, p.slug);
    const outFile = path.join(outDir, 'index.html');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, html, 'utf8');

    console.log(`  ✓  ${p.name}  →  dentists/${p.slug}/index.html`);
    generated++;
  });

  console.log(`\n✅ Done — ${generated} pages generated${skipped ? `, ${skipped} skipped` : ''}`);
  console.log(`   Output: ${OUTPUT_DIR}\n`);
}

generate();
