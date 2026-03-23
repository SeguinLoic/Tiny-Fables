import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const personnages = defineCollection({
  loader: file("src/content/personnages/personnages.json"),
  schema: ({ image }) => z.object({
    name: z.string(),
    level: z.number(),
    image: z.object({
       source: image(),
       alt: z.string()
    }),
    stats: z.object({
       str: z.number(),
       dex: z.number(),
       will: z.number(),
       life: z.number()
    }),
    pips: z.number(),
  })
})

export const collections = { posts, personnages };