// Idiomas de la web: español en "/" e inglés en "/en/".
// Los componentes piden sus textos con useContent(Astro.currentLocale).
import * as es from './data/content';
import * as en from './data/content.en';

export type Lang = 'es' | 'en';

export const useContent = (locale?: string) => (locale === 'en' ? en : es);

// Ruta de la portada en cada idioma
export const homePath = (lang: Lang) => (lang === 'en' ? '/en/' : '/');
