#!/usr/bin/env node
/*
  WhatDentist static practice page generator

  Usage from project root:
    node scripts/generate-practice-pages.js
    node scripts/generate-practice-pages.js dental-wellness-mill-hill

  Expected structure:
    /data.js
    /templates/practice-template.html
    /scripts/generate-practice-pages.js

  Output:
    /dentists/[slug]/index.html
*/

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, 'data.js');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'practice-template.html');
const OUTPUT_ROOT = path.join(ROOT, 'dentists');
const SITE_ORIGIN = 'https://whatdentist.co.uk';
const PLACEHOLDER_PHOTO = '/images/practices/placeholder-dental-practice.jpg';

function loadData() {
  const code = fs.readFileSync(DATA_PATH, 'utf8');
  const sandbox = { console };
  vm.createContext(sandbox);
  vm.runInContext(
    code + '\nthis.__practices = practices; this.__londonAverages = (typeof londonAverages !== "undefined" ? londonAverages : null); this.__practiceCount = (typeof practiceCount !== "undefined" ? practiceCount : practices.length);',
    sandbox,
    { filename: 'data.js' }
  );
  return {
    practices: sandbox.__practices || [],
    londonAverages: sandbox.__londonAverages,
    practiceCount: sandbox.__practiceCount || (sandbox.__practices || []).length,
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function formatPrice(n) {
  if (n == null || n === '' || Number.isNaN(Number(n))) return 'N/A';
  const num = Number(n);
  const hasPence = Math.round(num * 100) % 100 !== 0;
  return '£' + num.toLocaleString('en-GB', {
    minimumFractionDigits: hasPence ? 2 : 0,
    maximumFractionDigits: hasPence ? 2 : 0,
  });
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normaliseWebsite(url) {
  if (!url) return '';
  return String(url).startsWith('http') ? String(url) : 'https://' + String(url);
}

function telHref(phone) {
  if (!phone) return '';
  return 'tel:' + String(phone).replace(/[^+\d]/g, '');
}

function postcodeFromAddress(address) {
  const match = String(address || '').match(/[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i);
  return match ? match[0].toUpperCase() : '';
}

function areaRegion(area) {
  // Keep this simple for now; can be expanded later if you add area pages.
  return 'North West London';
}

function googleReviewsUrl(practice) {
  if (practice.googleReviewsUrl) return practice.googleReviewsUrl;
  return 'https://www.google.com/search?q=' + encodeURIComponent((practice.name || '') + ' Google reviews');
}

function practiceUrl(practice) {
  const slug = practice.slug || slugify(`${practice.name}-${practice.area}`);
  return practice.url || `/dentists/${slug}/`;
}

function generateMetaDescription(practice) {
  const bits = [];
  if (practice.checkupPrice) bits.push(`Check-ups from ${formatPrice(practice.checkupPrice)}`);
  if (practice.hygienePrice) bits.push(`hygiene from ${formatPrice(practice.hygienePrice)}`);
  if (practice.whiteningPrice) bits.push(`whitening from ${formatPrice(practice.whiteningPrice)}`);
  if (practice.invisalignPrice) bits.push(`Invisalign from ${formatPrice(practice.invisalignPrice)}`);
  const priceText = bits.length ? bits.join(', ') + '. ' : '';
  const ratingText = practice.rating && practice.reviews ? `Rated ${Number(practice.rating).toFixed(1)}★ by ${Number(practice.reviews).toLocaleString('en-GB')} patients. ` : '';
  const weekendText = practice.openWeekends ? 'Open weekends.' : '';
  return `Compare private dental prices at ${practice.name}, ${practice.area}. ${priceText}${ratingText}${weekendText}`.trim();
}

function buildSchema(practice) {
  const postcode = postcodeFromAddress(practice.address);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: practice.name,
    url: normaliseWebsite(practice.website) || SITE_ORIGIN + practiceUrl(practice),
    telephone: practice.phone || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: practice.address || undefined,
      addressLocality: 'London',
      postalCode: postcode || undefined,
      addressCountry: 'GB',
    },
    geo: practice.lat && practice.lng ? {
      '@type': 'GeoCoordinates',
      latitude: Number(practice.lat),
      longitude: Number(practice.lng),
    } : undefined,
    aggregateRating: practice.rating && practice.reviews ? {
      '@type': 'AggregateRating',
      ratingValue: Number(practice.rating).toFixed(1),
      reviewCount: String(practice.reviews),
    } : undefined,
    priceRange: '££',
  };
  return JSON.stringify(schema, null, 2).replace(/\n/g, '\n');
}

function photoFor(practice) {
  return practice.photo || `/images/practices/${practice.slug || slugify(`${practice.name}-${practice.area}`)}.jpg` || PLACEHOLDER_PHOTO;
}

function photoAltFor(practice) {
  return practice.photoAlt || `${practice.name} dental practice${practice.area ? ' in ' + practice.area : ''}`;
}

function findPriceInPricing(practice, categoryIncludes, itemIncludes) {
  if (!practice || !practice.pricing) return null;
  const categoryKey = Object.keys(practice.pricing).find(k => k.toLowerCase().includes(categoryIncludes.toLowerCase()));
  if (!categoryKey) return null;
  const item = practice.pricing[categoryKey].find(i => i.name.toLowerCase().includes(itemIncludes.toLowerCase()));
  return item ? item.price : null;
}

function keyPricesHtml(practice) {
  const keyPrices = [
    ['Check-up', formatPrice(practice.checkupPrice)],
    ['Hygiene', formatPrice(practice.hygienePrice)],
    ['Filling', formatPrice(practice.fillingPrice)],
    ['Crown', findPriceInPricing(practice, 'Crowns', 'Crown') || 'See price list'],
    ['Invisalign', formatPrice(practice.invisalignPrice)],
    ['Whitening', formatPrice(practice.whiteningPrice)],
  ];
  return keyPrices.map(([label, price]) => `<div class="kp-item"><div class="kp-label">${escapeHtml(label)}</div><div class="kp-price">${escapeHtml(price)}</div></div>`).join('\n          ');
}

function generateFallbackAbout(practice) {
  const typeLabel = practice.type === 'both' ? 'a mixed NHS and private dental practice' : 'a private dental practice';
  const area = practice.area || 'London';
  const treatments = [];
  if (practice.checkupPrice) treatments.push('routine check-ups');
  if (practice.hygienePrice) treatments.push('hygiene appointments');
  if (practice.invisalignPrice) treatments.push('Invisalign clear aligners');
  if (practice.whiteningPrice) treatments.push('teeth whitening');
  if (practice.bondingPrice) treatments.push('composite bonding');
  if (practice.implantPrice) treatments.push('dental implants');
  const treatmentText = treatments.length ? ` The practice lists ${treatments.join(', ').replace(/, ([^,]*)$/, ' and $1')} in its publicly available fee information.` : '';
  const reviewText = practice.rating && practice.reviews ? ` It is rated ${Number(practice.rating).toFixed(1)} stars from ${Number(practice.reviews).toLocaleString('en-GB')} Google reviews.` : '';
  const accessBits = [];
  if (practice.openWeekends) accessBits.push('weekend opening');
  if (practice.finance) accessBits.push('finance options on qualifying treatments');
  const accessText = accessBits.length ? ` The practice also notes ${accessBits.join(' and ')}.` : '';
  return [
    `${practice.name || 'This practice'} is ${typeLabel} in ${area}. ${practice.address ? `It is located at ${practice.address}.` : ''}${treatmentText}`,
    `${reviewText}${accessText}`.trim(),
    'This page helps patients compare prices, opening hours and nearby dental practices before contacting the practice directly.',
  ].filter(Boolean);
}

function aboutHtml(practice) {
  const paragraphs = Array.isArray(practice.about) && practice.about.length ? practice.about : generateFallbackAbout(practice);
  return paragraphs.map(p => `<p>${p}</p>`).join('\n          ');
}

function nhsStatus(practice) {
  if (practice.type === 'both') return 'NHS and private';
  if (practice.type === 'nhs') return 'NHS patients accepted';
  return 'Private only';
}

function financeHtml(practice) {
  if (practice.finance !== true) return '';
  return '<div class="sidebar-detail" id="finance-detail"><strong>Finance</strong>0% APR available on qualifying treatments</div>';
}

function websiteButtonHtml(practice) {
  const website = normaliseWebsite(practice.website);
  if (!website) return '';
  return `<a href="${escapeAttr(website)}" target="_blank" class="cta-btn cta-primary">🌐 Visit Website</a>`;
}

function callButtonHtml(practice) {
  if (!practice.phone) return '';
  return `<a href="${escapeAttr(telHref(practice.phone))}" class="cta-btn cta-secondary">📞 Call ${escapeHtml(practice.phone)}</a>`;
}

function directionsButtonHtml(practice) {
  if (!practice.address) return '';
  return `<a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(practice.address)}" target="_blank" class="cta-btn cta-secondary">📍 Get Directions</a>`;
}

function mobileActionLinks(practice) {
  const links = [];
  if (practice.phone) links.push(`<a href="${escapeAttr(telHref(practice.phone))}" class="mobile-bar-call">📞 Call</a>`);
  const website = normaliseWebsite(practice.website);
  if (website) links.push(`<a href="${escapeAttr(website)}" target="_blank" class="mobile-bar-web">🌐 Website</a>`);
  return links.join('\n  ');
}

function initialStarsText(rating) {
  // Text fallback only; JS turns this into precise star fills after load.
  const r = Number(rating) || 0;
  const rounded = Math.max(0, Math.min(5, Math.round(r)));
  return '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
}

function replacementsFor(practice) {
  const url = practiceUrl(practice);
  const address = practice.address || '';
  const website = normaliseWebsite(practice.website);
  return {
    TITLE: `${practice.name} – Private Dental Prices | WhatDentist`,
    META_DESCRIPTION: generateMetaDescription(practice),
    CANONICAL_URL: SITE_ORIGIN + url,
    SCHEMA_JSON: buildSchema(practice),
    PRACTICE_ID: String(practice.id),
    PRACTICE_NAME: practice.name,
    PRACTICE_SHORT_NAME: practice.name,
    ADDRESS: address,
    SIDEBAR_AREA: `${practice.area || 'London'}${postcodeFromAddress(address) ? ', London ' + postcodeFromAddress(address).split(' ')[0] : ''}`,
    PHOTO: photoFor(practice),
    PHOTO_ALT: photoAltFor(practice),
    MAP_SEARCH_URL: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
    MAP_EMBED_URL: `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`,
    INITIAL_STARS: initialStarsText(practice.rating),
    RATING: practice.rating ? Number(practice.rating).toFixed(1) : '',
    REVIEW_TEXT: `${Number(practice.reviews || 0).toLocaleString('en-GB')} Google reviews`,
    GOOGLE_REVIEWS_URL: googleReviewsUrl(practice),
    KEY_PRICES_HTML: keyPricesHtml(practice),
    ABOUT_HTML: aboutHtml(practice),
    NHS_STATUS: nhsStatus(practice),
    FINANCE_DETAIL_HTML: financeHtml(practice),
    WEBSITE_BUTTON_HTML: websiteButtonHtml(practice),
    CALL_BUTTON_HTML: callButtonHtml(practice),
    DIRECTIONS_BUTTON_HTML: directionsButtonHtml(practice),
    MOBILE_ACTION_LINKS: mobileActionLinks(practice),
  };
}

function fillTemplate(template, values) {
  return template.replace(/{{([A-Z0-9_]+)}}/g, (_, key) => values[key] ?? '');
}

function generatePage(practice, template) {
  const html = fillTemplate(template, replacementsFor(practice));
  const slug = practice.slug || slugify(`${practice.name}-${practice.area}`);
  const outDir = path.join(OUTPUT_ROOT, slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  return path.join('dentists', slug, 'index.html');
}

function main() {
  if (!fs.existsSync(DATA_PATH)) throw new Error('Cannot find data.js at project root.');
  if (!fs.existsSync(TEMPLATE_PATH)) throw new Error('Cannot find templates/practice-template.html.');
  const { practices } = loadData();
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const requestedSlug = process.argv[2];
  const selected = requestedSlug ? practices.filter(p => p.slug === requestedSlug) : practices;
  if (requestedSlug && selected.length === 0) throw new Error(`No practice found with slug: ${requestedSlug}`);
  const written = selected.map(p => generatePage(p, template));
  console.log(`Generated ${written.length} practice page${written.length === 1 ? '' : 's'}:`);
  written.forEach(file => console.log(' - ' + file));
}

main();
