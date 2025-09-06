import { defineCollection, z } from 'astro:content';

export const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    featured: z.boolean().default(false),
    links: z
      .object({
        demo: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
      .default({}),
  }),
});

export const experience = defineCollection({
  schema: z.object({
    company: z.string(),
    title: z.string(),
    start: z.string(),
    end: z.string().optional(),
    location: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const apps = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    summary: z.string().optional(),
    icon: z.string().optional(),
    tags: z.array(z.string()).default([]),
    hotkey: z.string().optional(),
    favorite: z.boolean().default(false),
  }),
});

export const collections = { projects, experience, apps };
