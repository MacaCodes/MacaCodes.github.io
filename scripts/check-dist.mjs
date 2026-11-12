// Post-build checks on dist/: privacy, links, anchors and required metadata.
// Run with: npm test (after npm run build)
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const dist = 'dist';
const failures = [];
const fail = (msg) => failures.push(msg);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

if (!existsSync(dist)) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const files = walk(dist);
const textFiles = files.filter((f) => ['.html', '.css', '.js', '.xml', '.txt', '.svg'].includes(extname(f)));

// 1. Privacy: no email addresses, phone numbers or surname in anything published.
const banned = [
  [/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, 'email address'],
  [/(\+44\s?7\d{3}|\b07\d{3})\s?\d{3}\s?\d{3}\b/, 'UK mobile number'],
  [/\bGibson\b(?!["'<\s]*$)/, 'surname'],
];
for (const f of textFiles) {
  // The LinkedIn profile URL legitimately contains the surname; remove it before scanning.
  const text = readFileSync(f, 'utf8').replaceAll('linkedin.com/in/Macauley-Gibson', '');
  for (const [re, label] of banned) if (re.test(text)) fail(`${f}: contains ${label}`);
}
const forbiddenExt = ['.docx', '.doc', '.pdf'];
for (const f of files) if (forbiddenExt.includes(extname(f).toLowerCase())) fail(`${f}: document file published`);

// 2. Required files.
for (const f of ['index.html', '404.html', 'robots.txt', 'sitemap-index.xml', 'favicon.svg', 'og.png'])
  if (!existsSync(join(dist, f))) fail(`missing ${f}`);

// 3. Metadata, internal links and anchors on each page.
for (const page of ['index.html', '404.html']) {
  const html = readFileSync(join(dist, page), 'utf8');
  const need = [/<html lang="en-GB"/, /<title>[^<]+<\/title>/, /name="description"/, /property="og:image"/, /name="viewport"/];
  if (page === 'index.html') need.push(/rel="canonical" href="https:\/\/macacodes\.github\.io\/"/);
  for (const re of need) if (!re.test(html)) fail(`${page}: missing ${re}`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) fail(`${page}: expected exactly one h1`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(m[0])) fail(`${page}: img without alt`);

  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  const index = readFileSync(join(dist, 'index.html'), 'utf8');
  const indexIds = new Set([...index.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|data:|mailto:|tel:)/.test(url)) {
      if (/^(mailto:|tel:)/.test(url)) fail(`${page}: contact link ${url}`);
      continue;
    }
    if (url.startsWith('#')) {
      if (!ids.has(url.slice(1))) fail(`${page}: broken anchor ${url}`);
    } else if (url.startsWith('/#')) {
      if (!indexIds.has(url.slice(2))) fail(`${page}: broken anchor ${url}`);
    } else if (url.startsWith('/')) {
      const path = url.split(/[?#]/)[0];
      const target = path === '/' ? 'index.html' : path.slice(1);
      if (!existsSync(join(dist, target))) fail(`${page}: broken link ${url}`);
    } else fail(`${page}: relative link ${url} (use root-relative)`);
  }
}

if (failures.length) {
  console.error(`${failures.length} check(s) failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`dist checks passed (${files.length} files scanned).`);
