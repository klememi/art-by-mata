import { getCollection, getEntry } from 'astro:content';

export async function getCategories() {
  const cats = await getCollection('categories');
  return cats.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99) || a.data.name_sk.localeCompare(b.data.name_sk, 'sk'));
}

/** Published paintings, newest first. */
export async function getPaintings() {
  const all = await getCollection('paintings', (p) => p.data.published);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getSettings() {
  const entry = await getEntry('settings', 'site');
  if (!entry) throw new Error('Missing src/content/settings/site.json');
  return entry.data;
}

export async function getAbout() {
  const entry = await getEntry('about', 'about');
  if (!entry) throw new Error('Missing src/content/pages/about.md');
  return entry.data;
}

/** Split plain text from a CMS textarea into paragraphs. */
export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
