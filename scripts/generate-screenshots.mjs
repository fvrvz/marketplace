import fs from 'node:fs';
import path from 'node:path';

const items = [
  { slug: 'nostyle-css', title: 'NoStyle CSS', sub: 'Utility-First Zero-JS CSS Framework', color: '#3b82f6', badge: 'npm · CSS' },
  { slug: 'gologger', title: 'gologger', sub: 'Semantic Colored Logger for Go', color: '#06b6d4', badge: 'Go · Package' },
  { slug: 'ngx-nostyle', title: 'ngx-nostyle', sub: 'Reusable Angular UI Component Library', color: '#ef4444', badge: 'Angular · UI Kit' },
  { slug: 'mockease', title: 'MockEase', sub: 'On-Prem & SaaS REST API Mocking Platform', color: '#eab308', badge: 'Python · SaaS' },
  { slug: 'notease', title: 'NoteEase', sub: 'Cross-Platform Flutter Notes App', color: '#6366f1', badge: 'Flutter · App' },
  { slug: 'authforest', title: 'AuthForest', sub: 'OIDC & OAuth2 Identity Provider', color: '#10b981', badge: 'Svelte · SaaS' },
  { slug: 'managease', title: 'ManagEase', sub: 'Kanban & Agile Project Management', color: '#8b5cf6', badge: 'SolidJS · SaaS' },
  { slug: 'profilease', title: 'Profilease', sub: 'Portfolio & Appointment Booking Engine', color: '#f59e0b', badge: 'Angular · SaaS' },
  { slug: 'billease', title: 'BillEase', sub: 'Invoicing & Client Ledger Platform', color: '#14b8a6', badge: 'TypeScript · SaaS' },
  { slug: 'ed-ai', title: 'EdAI', sub: 'AI-Powered Mobile Learning App', color: '#ec4899', badge: 'Expo · Mobile' },
  { slug: 'macrozone', title: 'MacroZone', sub: 'Keyboard-First Workflow Engine', color: '#f97316', badge: 'TypeScript · App' },
  { slug: 'rag-assist', title: 'RAG Assist', sub: 'Personal RAG Knowledge Assistant', color: '#0ea5e9', badge: 'TypeScript · AI' },
  { slug: 'react-decision-tree', title: 'react-decision-tree', sub: 'Branching Decision Tree Engine', color: '#64748b', badge: 'Coming Soon' },
  { slug: 'react-generic-widgets', title: 'react-generic-widgets', sub: 'Data-Driven Dashboard Widgets', color: '#64748b', badge: 'Coming Soon' },
  { slug: 'react-dynamic-layout-engine', title: 'react-dynamic-layout-engine', sub: 'JSON-Driven Responsive Grid Engine', color: '#64748b', badge: 'Coming Soon' },
  { slug: 'react-dynamic-form-builder', title: 'react-dynamic-form-builder', sub: 'Schema-First Form Builder', color: '#64748b', badge: 'Coming Soon' },
];

const outDir = path.resolve('public/screenshots');
fs.mkdirSync(outDir, { recursive: true });

for (const item of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none">
  <defs>
    <linearGradient id="bg-${item.slug}" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <radialGradient id="glow-${item.slug}" cx="50%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${item.color}" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="${item.color}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="450" rx="16" fill="url(#bg-${item.slug})"/>
  <rect width="800" height="450" rx="16" fill="url(#glow-${item.slug})"/>
  <rect x="36" y="32" width="728" height="386" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
  <circle cx="62" cy="56" r="6" fill="#ef4444" fill-opacity="0.8"/>
  <circle cx="82" cy="56" r="6" fill="#f59e0b" fill-opacity="0.8"/>
  <circle cx="102" cy="56" r="6" fill="#10b981" fill-opacity="0.8"/>
  <line x1="36" y1="80" x2="764" y2="80" stroke="#1e293b" stroke-width="1"/>
  <rect x="64" y="110" width="130" height="28" rx="14" fill="${item.color}" fill-opacity="0.18" stroke="${item.color}" stroke-opacity="0.45"/>
  <text x="129" y="129" text-anchor="middle" fill="${item.color}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">${item.badge}</text>
  <text x="64" y="184" fill="#f8fafc" font-family="ui-sans-serif, system-ui, sans-serif" font-size="38" font-weight="700" letter-spacing="-0.02em">${item.title}</text>
  <text x="64" y="218" fill="#94a3b8" font-family="ui-sans-serif, system-ui, sans-serif" font-size="18">${item.sub}</text>
  <rect x="64" y="256" width="672" height="128" rx="10" fill="#020617" stroke="#1e293b"/>
  <rect x="86" y="280" width="220" height="12" rx="6" fill="${item.color}" fill-opacity="0.6"/>
  <rect x="86" y="308" width="460" height="10" rx="5" fill="#334155"/>
  <rect x="86" y="330" width="380" height="10" rx="5" fill="#1e293b"/>
  <rect x="86" y="352" width="290" height="10" rx="5" fill="#1e293b"/>
  <text x="720" y="398" text-anchor="end" fill="#475569" font-family="ui-monospace, monospace" font-size="12">screenshot placeholder · marketplace.byfaraaz.com</text>
</svg>`;
  fs.writeFileSync(path.join(outDir, `${item.slug}.svg`), svg, 'utf8');
}
console.log(`Generated ${items.length} screenshot placeholders in ${outDir}`);
