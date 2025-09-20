import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Diallo Wallace'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
  }),
});

// Bio collection for homepage/about content
const bio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog, bio };
