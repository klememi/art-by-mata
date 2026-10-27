export type Lang = 'sk' | 'en';
/** Slovak is the default language (served at /), English lives under /en/. */
export const defaultLang: Lang = 'sk';
export const langs: Lang[] = ['sk', 'en'];

type PageKey = 'home' | 'work' | 'about' | 'contact';

const routes: Record<Lang, Record<PageKey, string>> = {
  sk: { home: '', work: 'dielo/', about: 'o-mne/', contact: 'kontakt/' },
  en: { home: 'en/', work: 'en/work/', about: 'en/about/', contact: 'en/contact/' },
};

/** Base-aware URL for a page in a language. */
export function href(lang: Lang, page: PageKey, slug?: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const path = routes[lang][page] + (slug ? `${slug}/` : '');
  return base + path;
}

/** Base-aware URL for a static file in /public. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}

/** Pick the localised value of a bilingual field, falling back to the other language. */
export function pick<T extends Record<string, unknown>>(obj: T, field: string, lang: Lang): string {
  const other: Lang = lang === 'sk' ? 'en' : 'sk';
  const v = (obj[`${field}_${lang}`] ?? '') as string;
  return v || ((obj[`${field}_${other}`] ?? '') as string);
}

export const ui = {
  en: {
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    instagram: 'Instagram',
    language: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mainNav: 'Main',
    paintings: 'Paintings',
    filterLabel: 'Filter by category',
    all: 'All',
    allWork: 'All work',
    medium: 'Medium',
    size: 'Size',
    year: 'Year',
    status: 'Status',
    statusLabels: {
      available: 'Available',
      reserved: 'Reserved',
      sold: 'Sold',
      not_for_sale: 'Not for sale',
    },
    priceOnRequest: 'price on request',
    enquire: 'Enquire about this work',
    seeOnInstagram: 'See on Instagram',
    browse: 'Browse paintings',
    previous: 'Previous',
    next: 'Next',
    moreIn: 'More',
    viewAll: 'View all',
    commissions: 'Commissions & enquiries',
    downloadCv: 'Download CV (PDF)',
    exhibitions: 'Selected exhibitions',
    education: 'Education & awards',
    getInTouch: 'Get in touch',
    contactIntro: 'For purchases, commissions, exhibitions or just to say hello.',
    replyWithin: 'I usually reply within',
    name: 'Name',
    email: 'Email',
    topic: 'What is it about?',
    topics: ['Buying a painting', 'Commission', 'Exhibition or press', 'Something else'],
    message: 'Message',
    send: 'Send message',
    sending: 'Sending…',
    privacy: 'Your details are only used to reply to you.',
    thanksTitle: 'Thank you — message sent.',
    thanksBody: "I'll get back to you soon. Meanwhile, see new work on Instagram.",
    sendAnother: 'Send another message',
    formError: 'Sorry, the message could not be sent. Please email me directly.',
    formNotConnected: 'The contact form is not connected yet. Please email me directly.',
    studio: 'Studio',
    onInstagram: 'On Instagram',
    follow: 'Follow on Instagram',
    aboutPainting: 'Re: ',
    notFound: 'Page not found',
    notFoundBody: 'This page does not exist — maybe the painting moved.',
    backHome: 'Back to all work',
    works: 'works',
  },
  sk: {
    work: 'Diela',
    about: 'O mne',
    contact: 'Kontakt',
    instagram: 'Instagram',
    language: 'Jazyk',
    menuOpen: 'Otvoriť menu',
    menuClose: 'Zavrieť menu',
    mainNav: 'Hlavné menu',
    paintings: 'Obrazy',
    filterLabel: 'Filtrovať podľa kategórie',
    all: 'Všetko',
    allWork: 'Všetky diela',
    medium: 'Technika',
    size: 'Rozmer',
    year: 'Rok',
    status: 'Stav',
    statusLabels: {
      available: 'Na predaj',
      reserved: 'Rezervované',
      sold: 'Predané',
      not_for_sale: 'Nie je na predaj',
    },
    priceOnRequest: 'cena na vyžiadanie',
    enquire: 'Mám záujem o tento obraz',
    seeOnInstagram: 'Pozrieť na Instagrame',
    browse: 'Prechádzať obrazy',
    previous: 'Predchádzajúci',
    next: 'Ďalší',
    moreIn: 'Ďalšie',
    viewAll: 'Zobraziť všetky',
    commissions: 'Objednávky a otázky',
    downloadCv: 'Stiahnuť životopis (PDF)',
    exhibitions: 'Vybrané výstavy',
    education: 'Vzdelanie a ocenenia',
    getInTouch: 'Napíšte mi',
    contactIntro: 'Kvôli kúpe obrazu, objednávke na mieru, výstave alebo len tak pozdraviť.',
    replyWithin: 'Zvyčajne odpovedám do',
    name: 'Meno',
    email: 'E-mail',
    topic: 'Čoho sa správa týka?',
    topics: ['Kúpa obrazu', 'Objednávka na mieru', 'Výstava alebo médiá', 'Niečo iné'],
    message: 'Správa',
    send: 'Odoslať správu',
    sending: 'Odosielam…',
    privacy: 'Vaše údaje použijem iba na odpoveď.',
    thanksTitle: 'Ďakujem — správa bola odoslaná.',
    thanksBody: 'Čoskoro sa vám ozvem. Medzitým nájdete nové obrazy na Instagrame.',
    sendAnother: 'Poslať ďalšiu správu',
    formError: 'Prepáčte, správu sa nepodarilo odoslať. Napíšte mi prosím priamo e-mailom.',
    formNotConnected: 'Kontaktný formulár zatiaľ nie je pripojený. Napíšte mi prosím priamo e-mailom.',
    studio: 'Ateliér',
    onInstagram: 'Na Instagrame',
    follow: 'Sledovať na Instagrame',
    aboutPainting: 'Obraz: ',
    notFound: 'Stránka sa nenašla',
    notFoundBody: 'Táto stránka neexistuje — možno sa obraz presunul.',
    backHome: 'Späť na všetky diela',
    works: 'diel',
  },
} as const;
