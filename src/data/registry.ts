export type ItemCategory = 'package' | 'ui-kit' | 'saas' | 'app';

export type Ecosystem =
  | 'npm'
  | 'go'
  | 'flutter'
  | 'angular'
  | 'python'
  | 'svelte'
  | 'typescript'
  | 'react';

export type ReleaseStatus = 'stable' | 'beta' | 'coming-soon';

export interface InstallMethod {
  readonly label: string;
  readonly command: string;
}

export interface WeeklyDownloadPoint {
  readonly week: string;
  readonly count: number;
}

export interface MarketplaceItem {
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly category: ItemCategory;
  readonly ecosystem: Ecosystem;
  readonly language: string;
  readonly version: string;
  readonly license: string;
  readonly status: ReleaseStatus;
  readonly isPrivate: boolean;
  readonly featured: boolean;
  readonly screenshot: string;
  readonly accentColor: string;
  readonly installMethods: readonly InstallMethod[];
  readonly quickStart: string;
  readonly features: readonly string[];
  readonly tags: readonly string[];
  readonly links: {
    readonly landingPage?: string;
    readonly github: string;
    readonly docs?: string;
  };
  readonly fallbackDownloads: {
    readonly total: number;
    readonly weekly: readonly WeeklyDownloadPoint[];
  };
}

export const DEVELOPER_PROFILE = {
  name: 'Faraaz Khan',
  handle: 'fvrvz',
  title: 'Full-Stack Engineer & Open-Source Builder',
  bio: 'Building lean, developer-first libraries, UI kits, and full-stack SaaS platforms across Go, TypeScript, Angular, Flutter, Svelte, and Cloudflare Workers.',
  location: 'Guna, Madhya Pradesh, India',
  avatarUrl: 'https://avatars.githubusercontent.com/u/52616655?v=4',
  githubUrl: 'https://github.com/fvrvz',
  linkedinUrl: 'https://linkedin.com/in/faraazkhhan',
  websiteUrl: 'https://www.byfaraaz.com',
  skills: ['TypeScript', 'Go', 'Astro', 'Angular', 'Flutter', 'Svelte', 'Cloudflare D1', 'NoStyle CSS'],
} as const;

export const MARKETPLACE_ITEMS: readonly MarketplaceItem[] = [
  {
    slug: 'nostyle-css',
    name: 'NoStyle CSS',
    tagline: 'Lightweight, utility-first CSS framework with zero JavaScript.',
    description:
      'Use it like Tailwind — ship it lean. Built for developers who want clean defaults, CSS variable theming (--ns-*), PurgeCSS tree-shaking, and an ~8 KB gzipped footprint without the bloat.',
    category: 'ui-kit',
    ecosystem: 'npm',
    language: 'CSS / PostCSS',
    version: '1.2.0',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: true,
    screenshot: '/screenshots/nostyle-css.svg',
    accentColor: '#3b82f6',
    installMethods: [
      { label: 'npm', command: 'npm install @fayso/nostyle-css' },
      { label: 'pnpm', command: 'pnpm add @fayso/nostyle-css' },
      { label: 'CDN', command: '<link rel="stylesheet" href="https://fvrvz.github.io/nostyle-css/static/css/nostyle.css" />' },
    ],
    quickStart: `import '@fayso/nostyle-css';\n\n// Or import modular layers:\nimport '@fayso/nostyle-css/base';\nimport '@fayso/nostyle-css/utilities';\nimport '@fayso/nostyle-css/components';`,
    features: [
      'Tailwind-like utility class API (.flex, .gap-4, .rounded-lg)',
      'Zero JavaScript runtime — pure CSS everywhere',
      'Built-in light & dark mode via --ns-* CSS custom properties',
      'Tree-shakeable with PurgeCSS integration',
    ],
    tags: ['css', 'utility-first', 'ui-kit', 'design-system', 'npm'],
    links: {
      landingPage: 'https://fvrvz.github.io/nostyle-css/',
      github: 'https://github.com/fvrvz/nostyle-css',
      docs: 'https://fvrvz.github.io/nostyle-css/',
    },
    fallbackDownloads: {
      total: 1840,
      weekly: [
        { week: '2026-10-05', count: 165 },
        { week: '2026-10-12', count: 190 },
        { week: '2026-10-19', count: 210 },
        { week: '2026-10-26', count: 235 },
        { week: '2026-11-02', count: 240 },
        { week: '2026-11-09', count: 260 },
        { week: '2026-11-16', count: 255 },
        { week: '2026-11-23', count: 285 },
      ],
    },
  },
  {
    slug: 'gologger',
    name: 'gologger',
    tagline: 'Simple, semantic colored logger package for Go.',
    description:
      'A lightweight, zero-external-dependency logging library for Go that wraps the standard log package with semantic levels (INFO, DEBUG, WARN, ERROR), colored terminal prefixes, and source file/line tracking.',
    category: 'package',
    ecosystem: 'go',
    language: 'Go',
    version: '1.0.4',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: true,
    screenshot: '/screenshots/gologger.svg',
    accentColor: '#06b6d4',
    installMethods: [
      { label: 'go get', command: 'go get github.com/fvrvz/gologger' },
    ],
    quickStart: `package main\n\nimport logger "github.com/fvrvz/gologger"\n\nfunc main() {\n  logger.INFO("Server started on port %d", 8080)\n  logger.DEBUG("Loaded config")\n  logger.WARN("Using fallback value")\n  logger.ERROR("Database connection failed")\n}`,
    features: [
      'Semantic log levels: INFO, DEBUG, WARN, ERROR',
      'Colored terminal output for fast local debugging',
      'Includes source file name and line number automatically',
      'Zero third-party dependencies — Go stdlib only',
    ],
    tags: ['go', 'golang', 'logger', 'cli', 'backend'],
    links: {
      github: 'https://github.com/fvrvz/gologger',
    },
    fallbackDownloads: {
      total: 920,
      weekly: [
        { week: '2026-10-05', count: 85 },
        { week: '2026-10-12', count: 95 },
        { week: '2026-10-19', count: 110 },
        { week: '2026-10-26', count: 105 },
        { week: '2026-11-02', count: 120 },
        { week: '2026-11-09', count: 130 },
        { week: '2026-11-16', count: 135 },
        { week: '2026-11-23', count: 140 },
      ],
    },
  },
  {
    slug: 'ngx-nostyle',
    name: 'ngx-nostyle',
    tagline: 'Reusable, customizable UI component library for Angular.',
    description:
      'A collection of reusable, accessible, and customizable Angular UI components designed to pair seamlessly with NoStyle CSS and streamline enterprise Angular development.',
    category: 'ui-kit',
    ecosystem: 'angular',
    language: 'TypeScript / Angular',
    version: '0.9.0',
    license: 'MIT',
    status: 'beta',
    isPrivate: false,
    featured: true,
    screenshot: '/screenshots/ngx-nostyle.svg',
    accentColor: '#ef4444',
    installMethods: [
      { label: 'npm', command: 'npm install ngx-nostyle @fayso/nostyle-css' },
      { label: 'git', command: 'git clone https://github.com/fvrvz/ngx-nostyle.git' },
    ],
    quickStart: `import { NsButtonComponent, NsCardComponent } from 'ngx-nostyle';\n\n@Component({\n  standalone: true,\n  imports: [NsButtonComponent, NsCardComponent],\n  template: '<ns-card><ns-button variant="primary">Click</ns-button></ns-card>',\n})`,
    features: [
      'Standalone Angular components with strict typing',
      'Built-in theming compatible with NoStyle CSS tokens',
      'Consistent, well-tested UI primitives',
      'Tree-shakeable per-component imports',
    ],
    tags: ['angular', 'components', 'ui-kit', 'typescript'],
    links: {
      github: 'https://github.com/fvrvz/ngx-nostyle',
    },
    fallbackDownloads: {
      total: 540,
      weekly: [
        { week: '2026-10-05', count: 45 },
        { week: '2026-10-12', count: 52 },
        { week: '2026-10-19', count: 60 },
        { week: '2026-10-26', count: 68 },
        { week: '2026-11-02', count: 72 },
        { week: '2026-11-09', count: 75 },
        { week: '2026-11-16', count: 80 },
        { week: '2026-11-23', count: 88 },
      ],
    },
  },
  {
    slug: 'mockease',
    name: 'MockEase',
    tagline: 'Self-hostable & SaaS REST API mocking platform.',
    description:
      'Spin up realistic, configurable mock REST APIs in seconds. Deploy on-prem with Docker/Python or run as a hosted SaaS workspace for frontend and QA teams.',
    category: 'saas',
    ecosystem: 'python',
    language: 'Python / SaaS',
    version: '0.8.2',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: true,
    screenshot: '/screenshots/mockease.svg',
    accentColor: '#eab308',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/mockease.git' },
      { label: 'pip', command: 'pip install git+https://github.com/fvrvz/mockease.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/mockease.git\ncd mockease\npip install -r requirements.txt\npython main.py`,
    features: [
      'Deploy on-prem or run as a multi-project SaaS',
      'Instant REST endpoint mocking from JSON/Python specs',
      'Configurable latency, headers, and status codes',
    ],
    tags: ['python', 'mock-api', 'saas', 'on-prem', 'devtools'],
    links: {
      landingPage: 'https://mockease.byfaraaz.com',
      github: 'https://github.com/fvrvz/mockease',
    },
    fallbackDownloads: {
      total: 410,
      weekly: [
        { week: '2026-10-05', count: 35 },
        { week: '2026-10-12', count: 42 },
        { week: '2026-10-19', count: 48 },
        { week: '2026-10-26', count: 50 },
        { week: '2026-11-02', count: 55 },
        { week: '2026-11-09', count: 58 },
        { week: '2026-11-16', count: 60 },
        { week: '2026-11-23', count: 62 },
      ],
    },
  },
  {
    slug: 'notease',
    name: 'NoteEase',
    tagline: 'Minimal, cross-platform Flutter notes app with multi-provider sync.',
    description:
      'A clean, distraction-free cross-platform notes application built with Flutter & Dart featuring offline-first storage and multi-provider cloud synchronization.',
    category: 'app',
    ecosystem: 'flutter',
    language: 'Dart / Flutter',
    version: '1.1.0',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: true,
    screenshot: '/screenshots/notease.svg',
    accentColor: '#6366f1',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/notease.git' },
      { label: 'flutter', command: 'flutter pub get && flutter run' },
    ],
    quickStart: `git clone https://github.com/fvrvz/notease.git\ncd notease\nflutter pub get\nflutter run`,
    features: [
      'Cross-platform: iOS, Android, macOS, Web & Desktop',
      'Multi-provider sync architecture',
      'Minimalist, fast markdown-friendly editor',
    ],
    tags: ['flutter', 'dart', 'notes', 'cross-platform', 'mobile'],
    links: {
      landingPage: 'https://notease.byfaraaz.com',
      github: 'https://github.com/fvrvz/notease',
    },
    fallbackDownloads: {
      total: 1290,
      weekly: [
        { week: '2026-10-05', count: 120 },
        { week: '2026-10-12', count: 135 },
        { week: '2026-10-19', count: 145 },
        { week: '2026-10-26', count: 160 },
        { week: '2026-11-02', count: 170 },
        { week: '2026-11-09', count: 180 },
        { week: '2026-11-16', count: 185 },
        { week: '2026-11-23', count: 195 },
      ],
    },
  },
  {
    slug: 'authforest',
    name: 'AuthForest',
    tagline: 'OpenID Connect & OAuth2 compatible Identity Provider monorepo.',
    description:
      'A self-hostable Identity Provider (IDP) supporting OpenID Connect, OAuth2, JWT issuance, and a modern Svelte admin console.',
    category: 'saas',
    ecosystem: 'svelte',
    language: 'Svelte / Go',
    version: '1.0.0',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: true,
    screenshot: '/screenshots/authforest.png',
    accentColor: '#10b981',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/authforest.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/authforest.git\ncd authforest\ndocker compose up -d`,
    features: [
      'Full OpenID Connect & OAuth2 authorization flows',
      'JWT signing, key rotation, and client management',
      'SvelteKit management dashboard',
    ],
    tags: ['oauth2', 'oidc', 'jwt', 'idp', 'auth', 'saas'],
    links: {
      landingPage: 'https://authforest.byfaraaz.com',
      github: 'https://github.com/fvrvz/authforest',
      docs: 'https://fvrvz.github.io/authforest/',
    },
    fallbackDownloads: {
      total: 780,
      weekly: [
        { week: '2026-10-05', count: 70 },
        { week: '2026-10-12', count: 82 },
        { week: '2026-10-19', count: 88 },
        { week: '2026-10-26', count: 95 },
        { week: '2026-11-02', count: 102 },
        { week: '2026-11-09', count: 110 },
        { week: '2026-11-16', count: 115 },
        { week: '2026-11-23', count: 118 },
      ],
    },
  },
  {
    slug: 'managease',
    name: 'ManagEase',
    tagline: 'Kanban & Agile project management SaaS with Excel plan importer.',
    description:
      'Jira-like Kanban and Agile project management platform built with SolidJS, Rails 8, PostgreSQL, and an automated Excel sprint plan importer.',
    category: 'saas',
    ecosystem: 'typescript',
    language: 'TypeScript / Rails 8',
    version: '1.0.0',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: false,
    screenshot: '/screenshots/managease.png',
    accentColor: '#8b5cf6',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/managease.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/managease.git\ncd managease\ndocker compose up`,
    features: [
      'Drag-and-drop Kanban boards & sprint backlogs',
      'Excel project plan importer',
      'SolidJS reactive UI + Rails 8 API + Postgres',
    ],
    tags: ['kanban', 'agile', 'saas', 'project-management'],
    links: {
      landingPage: 'https://managease.byfaraaz.com',
      github: 'https://github.com/fvrvz/managease',
    },
    fallbackDownloads: {
      total: 490,
      weekly: [
        { week: '2026-10-05', count: 40 },
        { week: '2026-10-12', count: 48 },
        { week: '2026-10-19', count: 54 },
        { week: '2026-10-26', count: 60 },
        { week: '2026-11-02', count: 66 },
        { week: '2026-11-09', count: 70 },
        { week: '2026-11-16', count: 74 },
        { week: '2026-11-23', count: 78 },
      ],
    },
  },
  {
    slug: 'profilease',
    name: 'Profilease',
    tagline: 'Bespoke portfolio & appointment booking engine for professionals.',
    description:
      'Multi-tenant portfolio and scheduling SaaS for doctors, teachers, and consultants. Built with Angular v22 Zoneless Signals, Signal Forms, and SSR custom domain resolution.',
    category: 'saas',
    ecosystem: 'angular',
    language: 'TypeScript / Angular',
    version: '1.0.0',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: false,
    screenshot: '/screenshots/profilease.png',
    accentColor: '#f59e0b',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/profilease.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/profilease.git\ncd profilease\nnpm install && npx nx serve web`,
    features: [
      'Multi-tenant custom domain resolution',
      'Interactive slot scheduling & intake engine',
      'Industry presets for Medical, Academic, and Coaching',
    ],
    tags: ['saas', 'booking', 'portfolio', 'angular'],
    links: {
      landingPage: 'https://profilease.byfaraaz.com',
      github: 'https://github.com/fvrvz/profilease',
    },
    fallbackDownloads: {
      total: 360,
      weekly: [
        { week: '2026-10-05', count: 30 },
        { week: '2026-10-12', count: 36 },
        { week: '2026-10-19', count: 42 },
        { week: '2026-10-26', count: 44 },
        { week: '2026-11-02', count: 48 },
        { week: '2026-11-09', count: 50 },
        { week: '2026-11-16', count: 54 },
        { week: '2026-11-23', count: 56 },
      ],
    },
  },
  {
    slug: 'billease',
    name: 'BillEase',
    tagline: 'Full-stack invoicing, billing, and client ledger SaaS.',
    description:
      'Streamlined invoicing and billing platform with Dockerized backend, responsive frontend, and dedicated landing page.',
    category: 'saas',
    ecosystem: 'typescript',
    language: 'TypeScript',
    version: '0.9.5',
    license: 'MIT',
    status: 'beta',
    isPrivate: false,
    featured: false,
    screenshot: '/screenshots/billease.png',
    accentColor: '#14b8a6',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/billease.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/billease.git\ncd billease\ndocker compose up`,
    features: [
      'Invoice generation and payment tracking',
      'Multi-client ledger & tax calculation',
      'Docker Compose ready deployment',
    ],
    tags: ['saas', 'billing', 'invoicing', 'typescript'],
    links: {
      landingPage: 'https://billease.byfaraaz.com',
      github: 'https://github.com/fvrvz/billease',
    },
    fallbackDownloads: {
      total: 310,
      weekly: [
        { week: '2026-10-05', count: 25 },
        { week: '2026-10-12', count: 30 },
        { week: '2026-10-19', count: 34 },
        { week: '2026-10-26', count: 38 },
        { week: '2026-11-02', count: 42 },
        { week: '2026-11-09', count: 45 },
        { week: '2026-11-16', count: 47 },
        { week: '2026-11-23', count: 49 },
      ],
    },
  },
  {
    slug: 'ed-ai',
    name: 'EdAI',
    tagline: 'AI-powered mobile learning companion built with Expo & React Native.',
    description:
      'A cross-platform iOS and Android mobile learning app powered by a RAG chatbot for personalized study assistance.',
    category: 'app',
    ecosystem: 'react',
    language: 'TypeScript / Expo',
    version: '1.0.0',
    license: 'MIT',
    status: 'stable',
    isPrivate: false,
    featured: false,
    screenshot: '/screenshots/ed-ai.svg',
    accentColor: '#ec4899',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/ed-ai.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/ed-ai.git\ncd ed-ai\nnpm install && npx expo start`,
    features: [
      'RAG-based AI study tutor',
      'iOS and Android support via Expo',
      'Interactive flashcards and topic quizzes',
    ],
    tags: ['ai', 'rag', 'expo', 'react-native', 'mobile'],
    links: {
      github: 'https://github.com/fvrvz/ed-ai',
    },
    fallbackDownloads: {
      total: 450,
      weekly: [
        { week: '2026-10-05', count: 38 },
        { week: '2026-10-12', count: 44 },
        { week: '2026-10-19', count: 50 },
        { week: '2026-10-26', count: 55 },
        { week: '2026-11-02', count: 60 },
        { week: '2026-11-09', count: 65 },
        { week: '2026-11-16', count: 68 },
        { week: '2026-11-23', count: 70 },
      ],
    },
  },
  {
    slug: 'macrozone',
    name: 'MacroZone',
    tagline: 'TypeScript productivity & workflow automation application.',
    description:
      'A modern TypeScript web application focused on streamlined macro workflows and fast keyboard-driven productivity.',
    category: 'app',
    ecosystem: 'typescript',
    language: 'TypeScript',
    version: '0.7.0',
    license: 'MIT',
    status: 'beta',
    isPrivate: false,
    featured: false,
    screenshot: '/screenshots/macrozone.svg',
    accentColor: '#f97316',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/macrozone.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/macrozone.git\ncd macrozone\nnpm install && npm run dev`,
    features: [
      'Keyboard-first macro & workflow engine',
      'Strictly typed TypeScript codebase',
      'Modular extensible architecture',
    ],
    tags: ['typescript', 'productivity', 'automation'],
    links: {
      github: 'https://github.com/fvrvz/macrozone',
    },
    fallbackDownloads: {
      total: 275,
      weekly: [
        { week: '2026-10-05', count: 20 },
        { week: '2026-10-12', count: 26 },
        { week: '2026-10-19', count: 30 },
        { week: '2026-10-26', count: 34 },
        { week: '2026-11-02', count: 38 },
        { week: '2026-11-09', count: 40 },
        { week: '2026-11-16', count: 43 },
        { week: '2026-11-23', count: 44 },
      ],
    },
  },
  {
    slug: 'rag-assist',
    name: 'RAG Assist',
    tagline: 'Retrieval-Augmented Generation app for personal knowledge assistance.',
    description:
      'A personal AI assistant built around Retrieval-Augmented Generation (RAG) for querying private documents and notes with citations.',
    category: 'app',
    ecosystem: 'typescript',
    language: 'TypeScript',
    version: '0.8.0',
    license: 'MIT',
    status: 'beta',
    isPrivate: false,
    featured: false,
    screenshot: '/screenshots/rag-assist.svg',
    accentColor: '#0ea5e9',
    installMethods: [
      { label: 'git', command: 'git clone https://github.com/fvrvz/rag-assist.git' },
    ],
    quickStart: `git clone https://github.com/fvrvz/rag-assist.git\ncd rag-assist\nnpm install && npm run dev`,
    features: [
      'Document ingestion & vector similarity search',
      'Context-aware Q&A with source grounding',
      'Clean TypeScript web interface',
    ],
    tags: ['rag', 'ai', 'typescript', 'assistant'],
    links: {
      github: 'https://github.com/fvrvz/rag-assist',
    },
    fallbackDownloads: {
      total: 330,
      weekly: [
        { week: '2026-10-05', count: 28 },
        { week: '2026-10-12', count: 32 },
        { week: '2026-10-19', count: 38 },
        { week: '2026-10-26', count: 40 },
        { week: '2026-11-02', count: 44 },
        { week: '2026-11-09', count: 47 },
        { week: '2026-11-16', count: 49 },
        { week: '2026-11-23', count: 52 },
      ],
    },
  },
  {
    slug: 'react-decision-tree',
    name: 'react-decision-tree',
    tagline: 'Composable decision tree builder & visual flow engine for React.',
    description:
      'Strictly typed React library for building interactive branching decision trees, rule evaluators, and conditional workflows.',
    category: 'package',
    ecosystem: 'react',
    language: 'TypeScript',
    version: '0.1.0-alpha',
    license: 'Private',
    status: 'coming-soon',
    isPrivate: true,
    featured: false,
    screenshot: '/screenshots/react-decision-tree.svg',
    accentColor: '#64748b',
    installMethods: [
      { label: 'npm (soon)', command: 'npm install @fvrvz/react-decision-tree' },
    ],
    quickStart: '// Publishing soon — currently in private preview.',
    features: [
      'Typed node & edge schema',
      'Conditional branching & rule evaluation',
      'Customizable node renderers',
    ],
    tags: ['react', 'decision-tree', 'workflow', 'coming-soon'],
    links: {
      github: 'https://github.com/fvrvz/react-decision-tree',
    },
    fallbackDownloads: { total: 0, weekly: [] },
  },
  {
    slug: 'react-generic-widgets',
    name: 'react-generic-widgets',
    tagline: 'Reusable data-driven widget primitives for React dashboards.',
    description:
      'A modular widget system for rendering KPI cards, tables, charts, and status panels from declarative JSON configs.',
    category: 'ui-kit',
    ecosystem: 'react',
    language: 'TypeScript',
    version: '0.1.0-alpha',
    license: 'Private',
    status: 'coming-soon',
    isPrivate: true,
    featured: false,
    screenshot: '/screenshots/react-generic-widgets.svg',
    accentColor: '#64748b',
    installMethods: [
      { label: 'npm (soon)', command: 'npm install @fvrvz/react-generic-widgets' },
    ],
    quickStart: '// Publishing soon — currently in private preview.',
    features: [
      'Declarative widget registry',
      'Strict TypeScript prop contracts',
      'Zero-boilerplate dashboard composition',
    ],
    tags: ['react', 'widgets', 'ui-kit', 'coming-soon'],
    links: {
      github: 'https://github.com/fvrvz/react-generic-widgets',
    },
    fallbackDownloads: { total: 0, weekly: [] },
  },
  {
    slug: 'react-dynamic-layout-engine',
    name: 'react-dynamic-layout-engine',
    tagline: 'JSON-driven responsive grid & layout engine for React apps.',
    description:
      'Render adaptive multi-column layouts, split panes, and nested containers dynamically from a typed layout schema.',
    category: 'package',
    ecosystem: 'react',
    language: 'TypeScript',
    version: '0.1.0-alpha',
    license: 'Private',
    status: 'coming-soon',
    isPrivate: true,
    featured: false,
    screenshot: '/screenshots/react-dynamic-layout-engine.svg',
    accentColor: '#64748b',
    installMethods: [
      { label: 'npm (soon)', command: 'npm install @fvrvz/react-dynamic-layout-engine' },
    ],
    quickStart: '// Publishing soon — currently in private preview.',
    features: [
      'Schema-driven responsive grids',
      'Nested slot & pane composition',
      'Breakpoint-aware rendering',
    ],
    tags: ['react', 'layout-engine', 'grid', 'coming-soon'],
    links: {
      github: 'https://github.com/fvrvz/react-dynamic-layout-engine',
    },
    fallbackDownloads: { total: 0, weekly: [] },
  },
  {
    slug: 'react-dynamic-form-builder',
    name: 'react-dynamic-form-builder',
    tagline: 'Schema-first dynamic form builder with validation for React.',
    description:
      'Generate multi-step, conditionally visible, and schema-validated React forms from declarative JSON definitions.',
    category: 'ui-kit',
    ecosystem: 'react',
    language: 'TypeScript',
    version: '0.1.0-alpha',
    license: 'Private',
    status: 'coming-soon',
    isPrivate: true,
    featured: false,
    screenshot: '/screenshots/react-dynamic-form-builder.svg',
    accentColor: '#64748b',
    installMethods: [
      { label: 'npm (soon)', command: 'npm install @fvrvz/react-dynamic-form-builder' },
    ],
    quickStart: '// Publishing soon — currently in private preview.',
    features: [
      'Declarative field & validation schemas',
      'Conditional visibility rules',
      'Accessible form controls',
    ],
    tags: ['react', 'form-builder', 'forms', 'coming-soon'],
    links: {
      github: 'https://github.com/fvrvz/react-dynamic-form-builder',
    },
    fallbackDownloads: { total: 0, weekly: [] },
  },
] as const;

export function getItemBySlug(slug: string): MarketplaceItem | undefined {
  return MARKETPLACE_ITEMS.find((item) => item.slug === slug);
}

export function getCategoryLabel(category: ItemCategory): string {
  switch (category) {
    case 'package':
      return 'Package / Lib';
    case 'ui-kit':
      return 'UI Kit';
    case 'saas':
      return 'SaaS Platform';
    case 'app':
      return 'Application';
  }
}
