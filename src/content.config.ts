import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages CMS may save empty fields as "" or null — normalise them.
const text = () => z.string().nullish().transform((v) => (v ?? '').trim());
const num = () =>
  z
    .union([z.number(), z.string()])
    .nullish()
    .transform((v) => (v === null || v === undefined || v === '' ? null : Number(v)));
// A reference saved by Pages CMS is the entry path, e.g. "src/content/categories/landscapes.md".
const refId = () =>
  text().transform((v) => v.split('/').pop()!.replace(/\.(md|json|ya?ml)$/i, ''));

const paintings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paintings' }),
  schema: ({ image }) =>
    z.object({
      title_sk: z.string(),
      title_en: text(),
      image: image(),
      category: refId(),
      date: z.coerce.date(),
      year: num(),
      medium_en: text(),
      medium_sk: text(),
      width_cm: num(),
      height_cm: num(),
      // Empty = status not shown on the website.
      status: z
        .enum(['', 'available', 'reserved', 'sold', 'not_for_sale'])
        .nullish()
        .transform((v) => v ?? ''),
      price: text(),
      description_en: text(),
      description_sk: text(),
      instagram_url: text(),
      published: z.boolean().nullish().transform((v) => v !== false),
    }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    name_sk: z.string(),
    name_en: text(),
    order: num(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      portrait: image().nullish(),
      portrait_caption_en: text(),
      portrait_caption_sk: text(),
      lead_en: text(),
      lead_sk: text(),
      bio_en: text(),
      bio_sk: text(),
      statement_en: text(),
      statement_sk: text(),
      cv_file: text(),
      exhibitions: z
        .array(
          z.object({
            year: text(),
            title_en: text(),
            title_sk: text(),
            venue: text(),
          }),
        )
        .nullish()
        .transform((v) => v ?? []),
      education: z
        .array(
          z.object({
            year: text(),
            title_en: text(),
            title_sk: text(),
            institution: text(),
          }),
        )
        .nullish()
        .transform((v) => v ?? []),
    }),
});

const settings = defineCollection({
  loader: file('./src/content/settings/site.json', { parser: (t) => ({ site: JSON.parse(t) }) }),
  schema: z.object({
    artist_name: z.string(),
    intro_en: text(),
    intro_sk: text(),
    seo_description_en: text(),
    seo_description_sk: text(),
    email: text(),
    location_en: text(),
    location_sk: text(),
    reply_time_en: text(),
    reply_time_sk: text(),
    instagram_handle: text(),
    instagram_url: text(),
    web3forms_access_key: text(),
  }),
});

export const collections = { paintings, categories, about, settings };
