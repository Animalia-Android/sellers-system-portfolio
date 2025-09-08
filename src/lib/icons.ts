// // src/lib/icons.ts
// export const CDN = (slug: string, color = 'FFFFFF') =>
//   `https://cdn.simpleicons.org/${slug}/${color}`;

// export const ICON = {
//   react: CDN('react', '61DAFB'),
//   nextjs: CDN('nextdotjs', 'FFFFFF'),
//   astro: CDN('astro', 'FFFFFF'),
//   typescript: CDN('typescript', '3178C6'),
//   tailwind: CDN('tailwindcss', '38BDF8'),
//   framer: CDN('framer', 'FFFFFF'),
//   radix: CDN('radixui', 'FFFFFF'),
//   mdx: CDN('mdx', 'FFFFFF'),
//   vite: CDN('vite', '646CFF'),
//   'react-native': CDN('react', '61DAFB'),
//   expo: CDN('expo', '000020'),
//   node: CDN('nodedotjs', '83CD29'),
//   express: CDN('express', 'FFFFFF'),
//   postgres: CDN('postgresql', '4169E1'),
//   prisma: CDN('prisma', '2D3748'),
//   supabase: CDN('supabase', '3ECF8E'),
//   firebase: CDN('firebase', 'FFCA28'),
//   chartjs: CDN('chartdotjs', 'FF6384'),
//   leaflet: CDN('leaflet', '199900'),
//   mapbox: CDN('mapbox', 'FFFFFF'),
//   vercel: CDN('vercel', 'FFFFFF'),
//   github: CDN('github', 'FFFFFF'),
//   openai: CDN('openai', '412991'),
// } as const;

// export type IconKey = keyof typeof ICON;
// export const iconFor = (id: string) =>
//   (ICON as Record<string, string>)[id] ?? CDN(id, 'FFFFFF');

// src/lib/icons.ts
export const CDN = (slug: string, color = 'FFFFFF') =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

type Meta = { slug: string; light: string; dark: string };

export const ICON_META: Record<string, Meta> = {
  react: { slug: 'react', light: '087EA4', dark: '61DAFB' },
  nextjs: { slug: 'nextdotjs', light: '000000', dark: 'FFFFFF' },
  astro: { slug: 'astro', light: '000000', dark: 'FFFFFF' },
  typescript: { slug: 'typescript', light: '3178C6', dark: '3178C6' },
  tailwind: { slug: 'tailwindcss', light: '0B1120', dark: '38BDF8' },
  framer: { slug: 'framer', light: '000000', dark: 'FFFFFF' },
  radix: { slug: 'radixui', light: '000000', dark: 'FFFFFF' },
  mdx: { slug: 'mdx', light: '000000', dark: 'FFFFFF' },
  vite: { slug: 'vite', light: '646CFF', dark: '646CFF' },
  'react-native': { slug: 'react', light: '087EA4', dark: '61DAFB' },
  expo: { slug: 'expo', light: '000020', dark: '000020' },
  node: { slug: 'nodedotjs', light: '83CD29', dark: '83CD29' },
  express: { slug: 'express', light: '000000', dark: 'FFFFFF' },
  postgres: { slug: 'postgresql', light: '4169E1', dark: '4169E1' },
  prisma: { slug: 'prisma', light: '2D3748', dark: '2D3748' },
  supabase: { slug: 'supabase', light: '3ECF8E', dark: '3ECF8E' },
  firebase: { slug: 'firebase', light: 'FFCA28', dark: 'FFCA28' },
  chartjs: { slug: 'chartdotjs', light: 'FF6384', dark: 'FF6384' },
  leaflet: { slug: 'leaflet', light: '199900', dark: '199900' },
  mapbox: { slug: 'mapbox', light: '000000', dark: 'FFFFFF' },
  vercel: { slug: 'vercel', light: '000000', dark: 'FFFFFF' },
  github: { slug: 'github', light: '000000', dark: 'FFFFFF' },
  openai: { slug: 'openai', light: '000000', dark: '412991' },
};

export const iconUrl = (id: string, theme: 'light' | 'dark' = 'dark') => {
  const m = ICON_META[id];
  const slug = m?.slug ?? id;
  const color =
    (theme === 'light' ? m?.light : m?.dark) ??
    (theme === 'light' ? '000000' : 'FFFFFF');
  return CDN(slug, color);
};
