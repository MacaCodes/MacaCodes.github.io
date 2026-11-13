// Regenerates public/og.png (1200x630). Run with: npm run og
import sharp from 'sharp';

const stages = ['Discover', 'Design', 'Build', 'Test', 'Release', 'Support'];
const ticks = stages
  .map((s, i) => {
    const x = 80 + i * 173.3;
    return `<line x1="${x}" y1="430" x2="${x}" y2="470" stroke="#0f2a24" stroke-width="2"/>
    <text x="${x + 12}" y="468" font-size="26" font-weight="700" fill="#0f2a24">${s}</text>`;
  })
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" font-family="Arial, Helvetica, sans-serif">
  <defs><linearGradient id="g" x1="0" x2="1">
    <stop offset="0" stop-color="#2447D6"/><stop offset=".55" stop-color="#0A8791"/><stop offset="1" stop-color="#1F7A4A"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <text x="80" y="170" font-size="76" font-weight="700" fill="#0f2a24">Macauley</text>
  <text x="80" y="250" font-size="46" fill="#0f2a24">Power Platform, automation and AI</text>
  <text x="80" y="318" font-size="32" fill="#4c5f59">Solutions that move from requirements</text>
  <text x="80" y="362" font-size="32" fill="#4c5f59">through to production support.</text>
  <rect x="80" y="424" width="1040" height="6" fill="url(#g)"/>
  ${ticks}
</svg>`;

const info = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile('public/og.png');
console.log(`og.png ${info.width}x${info.height} ${info.size} bytes`);
