// Dil altyapısı: Türkçe ana dil (önek yok), Almanca /de/, İngilizce /en/.
import { metinler as tr } from './data/metinler';
import { metinler as de } from './data/metinler.de';
import { metinler as en } from './data/metinler.en';
import { localizedProducts, type Product } from './data/products';
import { site } from './data/site';

export const langs = ['tr', 'de', 'en'] as const;
export type Lang = (typeof langs)[number];
export const otherLangs = ['de', 'en'] as const;

export const langInfo: Record<Lang, { label: string; name: string; htmlLang: string; og: string }> = {
  tr: { label: 'TR', name: 'Türkçe', htmlLang: 'tr', og: 'tr_TR' },
  de: { label: 'DE', name: 'Deutsch', htmlLang: 'de', og: 'de_DE' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', og: 'en_GB' },
};

const all = { tr, de, en };

const base = () => import.meta.env.BASE_URL.replace(/\/$/, '');

/** URL'den dili bulur. */
export function getLang(url: URL): Lang {
  const rest = url.pathname.slice(base().length).replace(/^\//, '');
  const first = rest.split('/')[0];
  return (otherLangs as readonly string[]).includes(first) ? (first as Lang) : 'tr';
}

/** Dil ve base path'e göre site içi bağlantı. */
export function hrefFor(path: string, lang: Lang) {
  const prefix = lang === 'tr' ? '' : `/${lang}`;
  const clean = path.replace(/^\//, '');
  if (!clean) return `${base()}${prefix}/`;
  if (clean.includes('#')) {
    const [p, h] = clean.split('#');
    return `${hrefFor(p, lang)}#${h}`;
  }
  if (clean.includes('.')) return `${base()}/${clean}`;
  return `${base()}${prefix}/${clean.replace(/\/?$/, '/')}`;
}

/** Aynı sayfanın başka dildeki adresi. */
export function switchLang(url: URL, to: Lang) {
  const from = getLang(url);
  let rest = url.pathname.slice(base().length).replace(/^\//, '');
  if (from !== 'tr') rest = rest.replace(new RegExp(`^${from}/?`), '');
  return hrefFor(rest, to);
}

/** Bileşenlerde: const { lang, m, ui, href, products, bySlug } = useLang(Astro.url) */
export function useLang(url: URL) {
  const lang = getLang(url);
  const m = all[lang];
  const products = localizedProducts(lang);
  return {
    lang,
    m,
    ui: m.ui,
    href: (p = '') => hrefFor(p, lang),
    products,
    bySlug: (slug: string): Product | undefined => products.find((p) => p.slug === slug),
  };
}

/** {yil} gibi yer tutucuları doldurur. {yil} her zaman işletme yılıdır. */
export function fill(text: string, vars: Record<string, string | number> = {}) {
  const v: Record<string, string | number> = { yil: site.years, ...vars };
  return text.replace(/\{(\w+)\}/g, (_, k) => (k in v ? String(v[k]) : `{${k}}`));
}
export const y = (text: string) => fill(text);

/** Diğer diller için statik yollar ([lang] klasöründeki sayfalar). */
export const langPaths = () => otherLangs.map((lang) => ({ params: { lang } }));
