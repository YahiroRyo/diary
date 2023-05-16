import { defineCollection, z } from "astro:content";

const Daily = z.object({
  title: z.string(),
});

export type Daily = { title: string }

const daily = defineCollection({
  schema: Daily,
});

export const collections = { daily };
